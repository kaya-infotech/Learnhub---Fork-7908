import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export const useEnrollments = () => {
  const { user } = useAuth()
  const [enrollments, setEnrollments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (user) {
      fetchEnrollments()
    }
  }, [user])

  const fetchEnrollments = async () => {
    if (!user) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('enrollments_lh2024')
        .select(`
          *,
          course:courses_lh2024(*)
        `)
        .eq('user_id', user.id)
        .order('enrolled_at', { ascending: false })

      if (error) throw error

      setEnrollments(data || [])
    } catch (error) {
      console.error('Error fetching enrollments:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const enrollInCourse = async (courseId) => {
    if (!user) throw new Error('Must be logged in to enroll')

    try {
      const { data, error } = await supabase
        .from('enrollments_lh2024')
        .insert([
          {
            user_id: user.id,
            course_id: courseId,
            progress: 0
          }
        ])
        .select()

      if (error) throw error

      await fetchEnrollments()
      return { data, error: null }
    } catch (error) {
      console.error('Error enrolling in course:', error)
      return { data: null, error }
    }
  }

  const updateProgress = async (courseId, progress) => {
    if (!user) throw new Error('Must be logged in to update progress')

    try {
      const updates = { progress }
      if (progress >= 100) {
        updates.completed_at = new Date().toISOString()
      }

      const { data, error } = await supabase
        .from('enrollments_lh2024')
        .update(updates)
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .select()

      if (error) throw error

      await fetchEnrollments()
      return { data, error: null }
    } catch (error) {
      console.error('Error updating progress:', error)
      return { data: null, error }
    }
  }

  const isEnrolled = (courseId) => {
    return enrollments.some(enrollment => enrollment.course_id === courseId)
  }

  const getEnrollment = (courseId) => {
    return enrollments.find(enrollment => enrollment.course_id === courseId)
  }

  return {
    enrollments,
    loading,
    error,
    enrollInCourse,
    updateProgress,
    isEnrolled,
    getEnrollment,
    refetch: fetchEnrollments
  }
}