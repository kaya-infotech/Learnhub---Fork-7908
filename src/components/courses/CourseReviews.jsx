import { useState } from 'react'
import { FiStar, FiThumbsUp } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useReviews } from '../../hooks/useReviews'
import { useAuth } from '../../context/AuthContext'

const CourseReviews = ({ courseId }) => {
  const { isAuthenticated } = useAuth()
  const { reviews, userReview, loading, submitReview, markHelpful } = useReviews(courseId)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [reviewData, setReviewData] = useState({
    rating: 5,
    review_text: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      alert('Please sign in to submit a review')
      return
    }

    try {
      setSubmitting(true)
      const result = await submitReview(reviewData.rating, reviewData.review_text)
      if (result.error) {
        alert('Failed to submit review: ' + result.error.message)
      } else {
        setShowReviewForm(false)
        setReviewData({ rating: 5, review_text: '' })
        alert('Review submitted successfully!')
      }
    } catch (error) {
      alert('Failed to submit review: ' + error.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Calculate rating statistics
  const ratingStats = [5, 4, 3, 2, 1].reduce((acc, rating) => {
    const count = reviews.filter(review => review.rating === rating).length
    const percentage = reviews.length > 0 ? Math.round((count / reviews.length) * 100) : 0
    acc[rating] = percentage
    return acc
  }, {})

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Overall Rating */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <div className="text-center mb-4">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">
              {averageRating.toFixed(1)}
            </h3>
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={i < Math.floor(averageRating) ? "fill-current" : ""}
                />
              ))}
            </div>
            <p className="text-gray-600">Course Rating</p>
          </div>
          
          {/* Rating Breakdown */}
          <div className="space-y-2">
            {Object.entries(ratingStats).reverse().map(([rating, percentage]) => (
              <div key={rating} className="flex items-center">
                <div className="flex items-center w-20">
                  <span className="mr-2">{rating}</span>
                  <FiStar className="text-yellow-400 fill-current" />
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="ml-2 w-12 text-sm text-gray-600">{percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Form */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Share Your Experience</h3>
          {isAuthenticated ? (
            userReview ? (
              <div className="text-center">
                <p className="text-gray-600 mb-4">You've already reviewed this course</p>
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Edit Review
                </button>
              </div>
            ) : showReviewForm ? (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewData({...reviewData, rating: star})}
                        className={`text-2xl ${
                          star <= reviewData.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        <FiStar className={star <= reviewData.rating ? 'fill-current' : ''} />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Review</label>
                  <textarea
                    value={reviewData.review_text}
                    onChange={(e) => setReviewData({...reviewData, review_text: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    rows="4"
                    placeholder="Share your thoughts about this course..."
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit Review'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Write a Review
                </button>
              </div>
            )
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Sign in to write a review</p>
            </div>
          )}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No reviews yet. Be the first to review this course!</p>
          </div>
        ) : (
          reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b pb-6"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">
                    {review.user?.full_name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold mr-2">
                      {review.user?.full_name || 'Anonymous User'}
                    </h4>
                    <span className="text-gray-500 text-sm">
                      {new Date(review.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={i < review.rating ? "fill-current" : ""}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{review.review_text}</p>
                  <button 
                    onClick={() => markHelpful(review.id)}
                    className="flex items-center text-gray-500 hover:text-blue-600"
                  >
                    <FiThumbsUp className="mr-2" />
                    <span>Helpful ({review.helpful_count || 0})</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}

export default CourseReviews