import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar, FiClock, FiUser } from 'react-icons/fi'
import { useCourses } from '../../hooks/useCourses'

const CourseCard = ({ course }) => {
  return (
    <div className="flex-shrink-0 w-72 mr-6 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-duration-300">
      <div className="relative">
        <img
          src={course.image_url}
          alt={course.title}
          className="w-full h-40 object-cover"
        />
        {course.is_bestseller && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium">
            Bestseller
          </span>
        )}
        {course.is_trending && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Trending
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{course.category}</span>
          <span className="text-sm text-gray-500">{course.level}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <FiUser className="mr-1" />
          <span>{course.instructor_name}</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={i < Math.floor(course.rating) ? "fill-current" : ""}
              />
            ))}
            <span className="ml-1 text-gray-700">{course.rating}</span>
          </div>
          <span className="ml-2 text-sm text-gray-600">({course.reviews?.toLocaleString()})</span>
        </div>
        <div className="flex items-center mb-3 text-sm text-gray-600">
          <FiClock className="mr-1" />
          <span>{course.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">
            {course.price === 0 ? 'Free' : `£${course.price}`}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

const CourseCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = useRef(null)
  const { courses, loading } = useCourses({ limit: 8 })

  const scroll = (direction) => {
    const container = carouselRef.current
    const scrollAmount = 600
    
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount)
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  if (loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Top-Rated Courses</h2>
            <p className="text-gray-600">Learn from the best courses chosen by our students</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={scrollPosition === 0}
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCarousel