import { motion } from 'framer-motion';
import { FiStar, FiBriefcase, FiAward } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
    content: "LearnHub transformed my career. The web development course gave me the skills I needed to land my dream job at Google. The practical projects and mentor support were invaluable.",
    company: "google",
    rating: 5,
    courseCompleted: "Full Stack Web Development"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist at Amazon",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    content: "The data science course was comprehensive and practical. It helped me transition from academia to tech seamlessly. The real-world projects made all the difference.",
    company: "amazon",
    rating: 5,
    courseCompleted: "Data Science Bootcamp"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer at Apple",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    content: "Thanks to LearnHub's UI/UX design course, I was able to switch careers from marketing to design. The portfolio projects helped me showcase my skills to employers.",
    company: "apple",
    rating: 5,
    courseCompleted: "UI/UX Design Masterclass"
  },
  {
    id: 4,
    name: "David Kim",
    role: "ML Engineer at Microsoft",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
    content: "The AI & Machine Learning path was exactly what I needed to specialize in ML. The hands-on projects and industry insights were exceptional.",
    company: "microsoft",
    rating: 5,
    courseCompleted: "AI & Machine Learning"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Digital Marketing Manager at Netflix",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3",
    content: "LearnHub's digital marketing courses are top-notch. I learned practical strategies that I now use daily in my role at Netflix. Great investment in my career!",
    company: "netflix",
    rating: 5,
    courseCompleted: "Digital Marketing Advanced"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Manager at Meta",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    content: "The product management certification program gave me the framework and tools I needed to excel in my role. The case studies were particularly helpful.",
    company: "meta",
    rating: 5,
    courseCompleted: "Product Management Pro"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-gray-600">Hear from our graduates who are now working at top companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <FiAward className="text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      Completed: {testimonial.courseCompleted}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiBriefcase className="text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      Now at: {testimonial.company.charAt(0).toUpperCase() + testimonial.company.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Join thousands of successful students who have transformed their careers with LearnHub</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Start Learning Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;