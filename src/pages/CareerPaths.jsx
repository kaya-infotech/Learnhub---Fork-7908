import { motion } from 'framer-motion';
import { FiArrowRight, FiBook, FiClock, FiBriefcase } from 'react-icons/fi';

const CareerPaths = () => {
  const careerPaths = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Master modern web development and build responsive, user-friendly websites",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      courses: 12,
      duration: "6 months",
      level: "Beginner to Advanced",
      skills: ["HTML/CSS", "JavaScript", "React", "UI/UX Design"],
      jobs: ["Frontend Developer", "UI Developer", "Web Designer"]
    },
    {
      id: 2,
      title: "Data Scientist",
      description: "Learn data analysis, machine learning, and statistical modeling",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      courses: 15,
      duration: "8 months",
      level: "Intermediate to Advanced",
      skills: ["Python", "Machine Learning", "Statistics", "Data Visualization"],
      jobs: ["Data Scientist", "ML Engineer", "Data Analyst"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      description: "Become proficient in both frontend and backend development",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3",
      courses: 18,
      duration: "10 months",
      level: "Intermediate to Advanced",
      skills: ["JavaScript", "Node.js", "React", "Databases"],
      jobs: ["Full Stack Developer", "Software Engineer", "Technical Lead"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Career Paths</h1>
          <p className="text-gray-200">
            Follow structured learning paths to achieve your career goals
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">
                    {path.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{path.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FiBook className="mr-2" />
                    <span>{path.courses} Courses</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiClock className="mr-2" />
                    <span>{path.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Career Opportunities:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {path.jobs.map((job) => (
                      <li key={job}>{job}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                  Start Learning
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPaths;