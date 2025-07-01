import { motion } from 'framer-motion';
import { FiUser, FiStar, FiAward } from 'react-icons/fi';

const InstructorBio = ({ instructor }) => {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start mb-8"
      >
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">{instructor.name}</h3>
          <p className="text-gray-600 mb-4">{instructor.bio}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <FiUser className="mr-2 text-blue-600" />
              <span>{instructor.totalStudents.toLocaleString()} students</span>
            </div>
            <div className="flex items-center">
              <FiStar className="mr-2 text-blue-600" />
              <span>{instructor.rating} rating</span>
            </div>
            <div className="flex items-center">
              <FiAward className="mr-2 text-blue-600" />
              <span>{instructor.courses} courses</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">Areas of Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {instructor.expertise.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-4">More Courses by {instructor.name}</h4>
        {/* Add a grid or carousel of other courses by the instructor */}
      </div>
    </div>
  );
};

export default InstructorBio;