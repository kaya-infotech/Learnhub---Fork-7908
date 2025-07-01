import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiUsers, FiBook, FiAward, FiArrowRight, FiCheck } from 'react-icons/fi';

const InstructorPage = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Miller",
      role: "AI & Machine Learning Expert",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      bio: "Former Google AI researcher with PhD in Computer Science. Specializes in deep learning and neural networks.",
      rating: 4.9,
      students: 75000,
      courses: 12,
      reviews: 1500,
      expertise: ["Machine Learning", "Python", "Deep Learning", "Data Science"],
      recentCourses: [
        {
          title: "Deep Learning Masterclass",
          students: 15000,
          rating: 4.9
        },
        {
          title: "AI for Beginners",
          students: 25000,
          rating: 4.8
        }
      ]
    },
    {
      id: 2,
      name: "Prof. David Chen",
      role: "Web Development Instructor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      bio: "Full-stack developer with 15 years of experience. Tech lead at several Fortune 500 companies.",
      rating: 4.8,
      students: 120000,
      courses: 15,
      reviews: 2800,
      expertise: ["JavaScript", "React", "Node.js", "Web Development"],
      recentCourses: [
        {
          title: "Full Stack Web Development",
          students: 35000,
          rating: 4.9
        },
        {
          title: "React & Node.js Advanced",
          students: 18000,
          rating: 4.7
        }
      ]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX/UI Design Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      bio: "Award-winning designer with experience at top tech companies. Passionate about creating user-centered designs.",
      rating: 4.9,
      students: 45000,
      courses: 8,
      reviews: 950,
      expertise: ["UI Design", "UX Research", "Figma", "Design Systems"],
      recentCourses: [
        {
          title: "Complete UI/UX Design Bootcamp",
          students: 22000,
          rating: 4.9
        },
        {
          title: "Design Systems Masterclass",
          students: 12000,
          rating: 4.8
        }
      ]
    }
  ];

  const becomeInstructorBenefits = [
    {
      title: "Share Your Expertise",
      description: "Reach millions of students worldwide and share your knowledge with those eager to learn."
    },
    {
      title: "Earn Revenue",
      description: "Generate income through course sales with our competitive revenue sharing model."
    },
    {
      title: "Professional Growth",
      description: "Build your personal brand and establish yourself as an industry expert."
    },
    {
      title: "Flexible Teaching",
      description: "Create courses on your own schedule and teach from anywhere in the world."
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Learn from Industry Experts</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our instructors are leading professionals who bring real-world experience to the classroom
            </p>
          </div>
        </div>
      </div>

      {/* Featured Instructors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                    <p className="text-blue-600">{instructor.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{instructor.bio}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {instructor.students.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {instructor.courses}
                    </div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <FiStar className="text-yellow-400 fill-current" />
                    <span className="ml-2 font-semibold">{instructor.rating}</span>
                    <span className="ml-2 text-gray-600">
                      ({instructor.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Popular Courses</h4>
                  <div className="space-y-2">
                    {instructor.recentCourses.map((course) => (
                      <div
                        key={course.title}
                        className="flex justify-between items-center p-2 bg-gray-50 rounded-lg"
                      >
                        <span className="text-sm font-medium">{course.title}</span>
                        <div className="flex items-center">
                          <FiStar className="text-yellow-400 fill-current mr-1" />
                          <span className="text-sm">{course.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become an Instructor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-gray-50 rounded-xl p-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Become an Instructor</h2>
            <p className="text-xl text-gray-600 mb-12">
              Join our community of expert instructors and share your knowledge with millions of learners worldwide
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {becomeInstructorBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                    <FiCheck className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center justify-center mx-auto">
              Start Teaching Today
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstructorPage;