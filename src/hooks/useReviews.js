import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

export const useReviews = (courseId) => {
  const { user } = useAuth()
  const [reviews, setReviews] = useState([])
  const [userReview, setUserReview] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (courseId) {
      fetchReviews()
    }
  }, [courseId, user])

  const fetchReviews = async () => {
    try {
      setLoading(true)
      
      // Fetch all reviews for the course
      const { data: reviewsData, error: reviewsError } = await supabase
        .from('course_reviews_lh2024')
        .select(`
          *,
          user:user_profiles_lh2024(full_name, avatar_url)
        `)
        .eq('course_id', courseId)
        .order('created_at', { ascending: false })

      if (reviewsError) throw reviewsError

      setReviews(reviewsData || [])

      // Check if current user has reviewed this course
      if (user) {
        const userReviewData = reviewsData?.find(review => review.user_id === user.id)
        setUserReview(userReviewData || null)
      }
    } catch (error) {
      console.error('Error fetching reviews:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const submitReview = async (rating, reviewText) => {
    if (!user) throw new Error('Must be logged in to submit review')

    try {
      const reviewData = {
        user_id: user.id,
        course_id: courseId,
        rating,
        review_text: reviewText
      }

      let result
      if (userReview) {
        // Update existing review
        result = await supabase
          .from('course_reviews_lh2024')
          .update(reviewData)
          .eq('id', userReview.id)
          .select()
      } else {
        // Create new review
        result = await supabase
          .from('course_reviews_lh2024')
          .insert([reviewData])
          .select()
      }

      if (result.error) throw result.error

      await fetchReviews()
      return { data: result.data, error: null }
    } catch (error) {
      console.error('Error submitting review:', error)
      return { data: null, error }
    }
  }

  const markHelpful = async (reviewId) => {
    try {
      const { data, error } = await supabase
        .from('course_reviews_lh2024')
        .update({ helpful_count: supabase.raw('helpful_count + 1') })
        .eq('id', reviewId)
        .select()

      if (error) throw error

      await fetchReviews()
      return { data, error: null }
    } catch (error) {
      console.error('Error marking review as helpful:', error)
      return { data: null, error }
    }
  }

  return {
    reviews,
    userReview,
    loading,
    error,
    submitReview,
    markHelpful,
    refetch: fetchReviews
  }
}