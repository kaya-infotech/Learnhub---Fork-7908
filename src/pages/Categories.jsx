import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiVideo, FiStar } from 'react-icons/fi';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn to build modern websites and applications",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      courses: 234,
      students: "50K+",
      rating: 4.8,
      popular: ["React", "JavaScript", "HTML/CSS", "Node.js"]
    },
    {
      id: 2,
      title: "Data Science",
      description: "Master data analysis and machine learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      courses: 189,
      students: "45K+",
      rating: 4.7,
      popular: ["Python", "Machine Learning", "SQL", "Statistics"]
    },
    {
      id: 3,
      title: "Business",
      description: "Develop essential business and management skills",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      courses: 156,
      students: "38K+",
      rating: 4.6,
      popular: ["Marketing", "Finance", "Strategy", "Leadership"]
    },
    {
      id: 4,
      title: "Design",
      description: "Create stunning designs and user experiences",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
      courses: 167,
      students: "42K+",
      rating: 4.9,
      popular: ["UI/UX", "Graphic Design", "Figma", "Adobe XD"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Course Categories</h1>
          <p className="text-gray-200">
            Explore our wide range of courses across different domains
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={category.image}
                    alt={category.title}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <FiVideo className="text-blue-600 mr-2" />
                      <span>{category.courses} courses</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="text-blue-600 mr-2" />
                      <span>{category.students} students</span>
                    </div>
                    <div className="flex items-center">
                      <FiStar className="text-blue-600 mr-2" />
                      <span>{category.rating} rating</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Popular Topics:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.popular.map((topic) => (
                        <span
                          key={topic}
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    Explore Category
                    <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;