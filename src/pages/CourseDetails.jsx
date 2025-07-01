import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiStar, FiClock, FiBook, FiUser, FiAward } from 'react-icons/fi'
import { useCourse } from '../hooks/useCourses'
import { useEnrollments } from '../hooks/useEnrollments'
import { useReviews } from '../hooks/useReviews'
import { useAuth } from '../context/AuthContext'
import CourseContent from '../components/courses/CourseContent'
import CourseReviews from '../components/courses/CourseReviews'
import InstructorBio from '../components/courses/InstructorBio'
import ProgressTracker from '../components/courses/ProgressTracker'

const CourseDetails = () => {
  const { id } = useParams()
  const { isAuthenticated } = useAuth()
  const { course, loading: courseLoading } = useCourse(id)
  const { enrollInCourse, isEnrolled, getEnrollment } = useEnrollments()
  const [activeTab, setActiveTab] = useState('content')
  const [enrolling, setEnrolling] = useState(false)

  const enrollment = getEnrollment(id)
  const progress = enrollment ? enrollment.progress : 0

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      alert('Please sign in to enroll in this course')
      return
    }

    try {
      setEnrolling(true)
      const result = await enrollInCourse(id)
      if (result.error) {
        alert('Failed to enroll: ' + result.error.message)
      } else {
        alert('Successfully enrolled in course!')
      }
    } catch (error) {
      alert('Failed to enroll: ' + error.message)
    } finally {
      setEnrolling(false)
    }
  }

  if (courseLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'content', label: 'Course Content' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'instructor', label: 'Instructor' }
  ]

  return (
    <div className="pt-16">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-gray-200 mb-6">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-white mb-6">
                <span className="flex items-center">
                  <FiStar className="mr-1" />
                  {course.rating} ({course.reviews} reviews)
                </span>
                <span className="flex items-center">
                  <FiUser className="mr-1" />
                  {course.students?.toLocaleString()} students
                </span>
                <span className="flex items-center">
                  <FiClock className="mr-1" />
                  {course.duration}
                </span>
                <span className="flex items-center">
                  <FiBook className="mr-1" />
                  {course.lectures} lectures
                </span>
              </div>
              <div className="flex items-center text-white">
                <img
                  src={course.instructor_image}
                  alt={course.instructor_name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span>Created by {course.instructor_name}</span>
              </div>
            </motion.div>

            {/* Course Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <img
                src={course.image_url}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold">
                    {course.price === 0 ? 'Free' : `£${course.price}`}
                  </span>
                </div>
                
                {isEnrolled(id) ? (
                  <div className="space-y-4">
                    <div className="bg-green-100 text-green-700 py-3 rounded-md font-medium text-center">
                      ✓ Enrolled
                    </div>
                    <ProgressTracker progress={progress} />
                  </div>
                ) : (
                  <button
                    onClick={handleEnroll}
                    disabled={enrolling}
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 disabled:opacity-50 mb-4"
                  >
                    {enrolling ? 'Enrolling...' : 'Enrol Now'}
                  </button>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiClock className="mr-2" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center">
                    <FiAward className="mr-2" />
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  pb-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'content' && <CourseContent course={course} />}
          {activeTab === 'reviews' && <CourseReviews courseId={id} />}
          {activeTab === 'instructor' && <InstructorBio instructor={{
            name: course.instructor_name,
            image: course.instructor_image,
            bio: "Expert instructor with years of experience in the field.",
            expertise: [course.category],
            totalStudents: course.students || 0,
            courses: 1,
            rating: course.rating
          }} />}
        </div>
      </div>
    </div>
  )
}

export default CourseDetails