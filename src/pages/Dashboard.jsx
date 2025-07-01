import { motion } from 'framer-motion'
import { FiBook, FiTrendingUp, FiAward, FiClock, FiPlay } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'
import { useEnrollments } from '../hooks/useEnrollments'

const Dashboard = () => {
  const { user, profile, signOut } = useAuth()
  const { enrollments, loading } = useEnrollments()

  // Calculate statistics
  const totalCourses = enrollments.length
  const completedCourses = enrollments.filter(e => e.completed_at).length
  const averageProgress = totalCourses > 0 
    ? Math.round(enrollments.reduce((sum, e) => sum + e.progress, 0) / totalCourses)
    : 0
  const totalHours = enrollments.reduce((sum, e) => {
    const duration = e.course?.duration || '0 hours'
    const hours = parseInt(duration.split(' ')[0]) || 0
    return sum + (hours * e.progress / 100)
  }, 0)

  const stats = [
    { icon: FiBook, label: 'Courses Enrolled', value: totalCourses.toString() },
    { icon: FiTrendingUp, label: 'Average Progress', value: `${averageProgress}%` },
    { icon: FiAward, label: 'Completed', value: completedCourses.toString() },
    { icon: FiClock, label: 'Hours Learned', value: Math.round(totalHours).toString() }
  ]

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {profile?.full_name || user?.email}!
              </h1>
              <p className="text-gray-600 mt-2">
                Continue your learning journey
              </p>
            </div>
            <button
              onClick={signOut}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Sign Out
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
            {enrollments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">You haven't enrolled in any courses yet.</p>
                <a
                  href="/courses"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Browse Courses
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {enrollments.slice(0, 3).map((enrollment) => (
                  <div
                    key={enrollment.id}
                    className="flex items-center p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src={enrollment.course.image_url}
                      alt={enrollment.course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-semibold">{enrollment.course.title}</h3>
                      <p className="text-gray-600 text-sm">{enrollment.course.instructor_name}</p>
                      <div className="mt-2 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${enrollment.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{enrollment.progress}% complete</p>
                    </div>
                    <button className="ml-4 flex items-center text-blue-600 hover:text-blue-700">
                      <FiPlay className="mr-1" />
                      Continue
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {completedCourses > 0 ? (
                enrollments
                  .filter(e => e.completed_at)
                  .slice(0, 3)
                  .map((enrollment) => (
                    <div key={enrollment.id} className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <FiAward className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Course Completed</p>
                        <p className="text-sm text-gray-600">{enrollment.course.title}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(enrollment.completed_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-600">No recent activity</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard