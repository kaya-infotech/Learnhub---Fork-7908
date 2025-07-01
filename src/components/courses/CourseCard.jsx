import { FiStar, FiClock, FiBookOpen } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img
            src={course.image_url}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          {course.is_bestseller && (
            <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
              Bestseller
            </span>
          )}
          {course.is_trending && (
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Trending
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600">{course.category}</span>
            <span className="text-sm text-gray-500">{course.level}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{course.instructor_name}</p>
          <div className="flex items-center mb-3">
            <div className="flex items-center text-yellow-400">
              <FiStar className="fill-current" />
              <span className="ml-1 text-gray-700">{course.rating}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600 text-sm">{course.reviews} reviews</span>
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
    </Link>
  )
}

export default CourseCard