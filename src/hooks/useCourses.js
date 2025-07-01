import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export const useCourses = (filters = {}) => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCourses()
  }, [filters])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      let query = supabase
        .from('courses_lh2024')
        .select('*')
        .order('created_at', { ascending: false })

      // Apply filters
      if (filters.category && filters.category !== 'all') {
        query = query.eq('category', filters.category)
      }

      if (filters.level && filters.level !== 'all') {
        query = query.eq('level', filters.level)
      }

      if (filters.price && filters.price !== 'all') {
        if (filters.price === 'free') {
          query = query.eq('price', 0)
        } else if (filters.price === 'paid') {
          query = query.gt('price', 0)
        }
      }

      if (filters.rating && filters.rating !== 'all') {
        query = query.gte('rating', parseFloat(filters.rating))
      }

      if (filters.search) {
        query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
      }

      const { data, error } = await query

      if (error) throw error

      setCourses(data || [])
    } catch (error) {
      console.error('Error fetching courses:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { courses, loading, error, refetch: fetchCourses }
}

export const useCourse = (id) => {
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id) {
      fetchCourse()
    }
  }, [id])

  const fetchCourse = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('courses_lh2024')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      setCourse(data)
    } catch (error) {
      console.error('Error fetching course:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { course, loading, error, refetch: fetchCourse }
}