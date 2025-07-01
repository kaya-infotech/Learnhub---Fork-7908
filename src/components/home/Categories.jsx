import { motion } from 'framer-motion';
import { FiCode, FiBarChart2, FiBriefcase, FiCpu, FiDatabase, FiPenTool, FiMusic, FiCamera } from 'react-icons/fi';

const categories = [
  { icon: FiCode, name: 'Web Development', courses: 230, color: 'bg-blue-100 text-blue-600' },
  { icon: FiBarChart2, name: 'Business', courses: 195, color: 'bg-green-100 text-green-600' },
  { icon: FiCpu, name: 'Artificial Intelligence', courses: 145, color: 'bg-purple-100 text-purple-600' },
  { icon: FiDatabase, name: 'Data Science', courses: 180, color: 'bg-red-100 text-red-600' },
  { icon: FiBriefcase, name: 'Marketing', courses: 120, color: 'bg-yellow-100 text-yellow-600' },
  { icon: FiPenTool, name: 'Design', courses: 160, color: 'bg-pink-100 text-pink-600' },
  { icon: FiMusic, name: 'Music', courses: 85, color: 'bg-indigo-100 text-indigo-600' },
  { icon: FiCamera, name: 'Photography', courses: 95, color: 'bg-orange-100 text-orange-600' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Categories</h2>
          <p className="text-gray-600">Explore our most popular course categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                <category.icon size={24} />
              </div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.courses} courses</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;