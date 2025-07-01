import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiClock, FiBookOpen } from 'react-icons/fi';

const features = [
  {
    icon: FiAward,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience'
  },
  {
    icon: FiUsers,
    title: 'Global Community',
    description: 'Join millions of learners from around the world'
  },
  {
    icon: FiClock,
    title: 'Flexible Learning',
    description: 'Study at your own pace, anywhere, anytime'
  },
  {
    icon: FiBookOpen,
    title: 'Verified Certificates',
    description: 'Earn recognized certificates upon course completion'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose LearnHub?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the tools and resources you need to succeed in today's fast-paced world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
            Start Learning Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;