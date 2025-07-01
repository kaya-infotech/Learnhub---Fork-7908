import { motion } from 'framer-motion';

const instructors = [
  {
    id: 1,
    name: 'Dr. Sarah Miller',
    expertise: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    students: '15,000+',
    rating: 4.9,
    courses: 12
  },
  {
    id: 2,
    name: 'Prof. David Chen',
    expertise: 'Data Science',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
    students: '25,000+',
    rating: 4.8,
    courses: 8
  },
  {
    id: 3,
    name: 'Lisa Thompson',
    expertise: 'Web Development',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
    students: '18,000+',
    rating: 4.9,
    courses: 15
  },
  {
    id: 4,
    name: 'Michael Roberts',
    expertise: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3',
    students: '20,000+',
    rating: 4.7,
    courses: 10
  }
];

const Instructors = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Instructors</h2>
          <p className="text-gray-600">Learn from industry experts and professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative pb-[100%]">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{instructor.name}</h3>
                <p className="text-blue-600 text-sm mb-4">{instructor.expertise}</p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className="font-semibold">{instructor.students}</p>
                    <p className="text-gray-600">Students</p>
                  </div>
                  <div>
                    <p className="font-semibold">{instructor.courses}</p>
                    <p className="text-gray-600">Courses</p>
                  </div>
                  <div>
                    <p className="font-semibold">{instructor.rating}</p>
                    <p className="text-gray-600">Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;