import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiUser, FiClock } from 'react-icons/fi';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = {
    "Learning Tips": [
      {
        id: 1,
        title: "10 Effective Learning Strategies for Online Education",
        excerpt: "Discover proven techniques to maximize your online learning experience and achieve better results.",
        author: "Dr. Sarah Miller",
        date: "March 15, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3",
        featured: true
      },
      {
        id: 2,
        title: "How to Stay Motivated During Long Courses",
        excerpt: "Learn practical tips to maintain motivation and consistency in your learning journey.",
        author: "Michael Brown",
        date: "March 14, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3"
      },
      {
        id: 3,
        title: "The Power of Active Recall in Learning",
        excerpt: "Understanding how active recall can improve your learning retention and efficiency.",
        author: "Emma Wilson",
        date: "March 13, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3"
      },
      {
        id: 4,
        title: "Time Management Tips for Online Students",
        excerpt: "Master the art of balancing work, life, and online learning with these strategies.",
        author: "David Lee",
        date: "March 12, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3"
      },
      {
        id: 5,
        title: "Creating the Perfect Study Environment",
        excerpt: "Set up an optimal learning space that enhances focus and productivity.",
        author: "Lisa Chen",
        date: "March 11, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1598495837142-f48326f26c4d?ixlib=rb-4.0.3"
      }
    ],
    "Industry Trends": [
      {
        id: 6,
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt: "Stay ahead of the curve with these emerging web development technologies and practices.",
        author: "John Doe",
        date: "March 12, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
      },
      {
        id: 7,
        title: "AI Revolution in Education Technology",
        excerpt: "How artificial intelligence is transforming the way we learn and teach.",
        author: "Rachel Green",
        date: "March 11, 2024",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3"
      },
      {
        id: 8,
        title: "The Rise of Microlearning Platforms",
        excerpt: "Understanding the growing trend of bite-sized learning modules.",
        author: "Alex Turner",
        date: "March 10, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"
      },
      {
        id: 9,
        title: "Blockchain in Education: Beyond Cryptocurrencies",
        excerpt: "Exploring how blockchain technology is revolutionizing educational credentials.",
        author: "Mark Johnson",
        date: "March 9, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3"
      },
      {
        id: 10,
        title: "Virtual Reality in Professional Training",
        excerpt: "How VR is changing the landscape of practical skills development.",
        author: "Sarah Wilson",
        date: "March 8, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3"
      }
    ],
    "Career Advice": [
      {
        id: 11,
        title: "From Beginner to Data Scientist: A Complete Roadmap",
        excerpt: "A comprehensive guide to starting your journey in data science and machine learning.",
        author: "Emily Chen",
        date: "March 10, 2024",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
      },
      {
        id: 12,
        title: "Building a Strong Tech Portfolio",
        excerpt: "Tips for creating an impressive portfolio that stands out to employers.",
        author: "James Wilson",
        date: "March 9, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3"
      },
      {
        id: 13,
        title: "Networking in the Digital Age",
        excerpt: "How to build professional relationships in an online-first world.",
        author: "Sophie Martinez",
        date: "March 8, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3"
      },
      {
        id: 14,
        title: "Mastering Technical Interviews",
        excerpt: "Prepare effectively for technical interviews with these proven strategies.",
        author: "Robert Kim",
        date: "March 7, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3"
      },
      {
        id: 15,
        title: "Transitioning to Tech from Other Industries",
        excerpt: "Guide for career changers looking to break into the tech industry.",
        author: "Linda Thompson",
        date: "March 6, 2024",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3"
      }
    ],
    "Tutorials": [
      {
        id: 16,
        title: "Building a REST API with Node.js",
        excerpt: "Step-by-step guide to creating a robust REST API using Node.js and Express.",
        author: "Mike Johnson",
        date: "March 7, 2024",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3"
      },
      {
        id: 17,
        title: "Mastering CSS Grid Layout",
        excerpt: "Comprehensive tutorial on modern CSS Grid techniques and best practices.",
        author: "Anna Lee",
        date: "March 6, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3"
      },
      {
        id: 18,
        title: "Introduction to React Hooks",
        excerpt: "Learn how to use React Hooks to manage state and side effects.",
        author: "Chris Anderson",
        date: "March 5, 2024",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3"
      },
      {
        id: 19,
        title: "Getting Started with Python Data Analysis",
        excerpt: "Basic guide to data analysis using Python's pandas library.",
        author: "Diana Wu",
        date: "March 4, 2024",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"
      },
      {
        id: 20,
        title: "Mobile App Testing Best Practices",
        excerpt: "Essential testing strategies for mobile application development.",
        author: "Tom Harris",
        date: "March 3, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3"
      }
    ],
    "Student Success Stories": [
      {
        id: 21,
        title: "From Retail to Software Engineer in 12 Months",
        excerpt: "How Sarah transformed her career through online learning.",
        author: "Sarah Jenkins",
        date: "March 4, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3"
      },
      {
        id: 22,
        title: "Landing a Dream Job at Google",
        excerpt: "A student's journey from LearnHub courses to Google.",
        author: "Michael Chang",
        date: "March 3, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3"
      },
      {
        id: 23,
        title: "Building a Successful Freelance Career",
        excerpt: "How online courses helped me become a successful freelancer.",
        author: "Emma Rodriguez",
        date: "March 2, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
      },
      {
        id: 24,
        title: "From Teacher to Tech Lead",
        excerpt: "A career transition story powered by continuous learning.",
        author: "Daniel Kim",
        date: "March 1, 2024",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3"
      },
      {
        id: 25,
        title: "Achieving AWS Certification Success",
        excerpt: "How I became a certified AWS solutions architect.",
        author: "Lisa Morrison",
        date: "February 29, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"
      }
    ]
  };

  const categories = ["All", ...Object.keys(articles)];

  const filteredArticles = activeCategory === "All"
    ? Object.values(articles).flat()
    : articles[activeCategory] || [];

  const searchedArticles = filteredArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">LearnHub Blog</h1>
          <p className="text-gray-200 mb-6">
            Insights, tutorials, and career advice from industry experts
          </p>
          <div className="flex items-center bg-white rounded-lg p-2 max-w-2xl">
            <FiSearch className="text-gray-400 ml-2" size={24} />
            <input
              type="text"
              placeholder="Search articles..."
              className="flex-1 p-2 outline-none text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === "All" && searchedArticles.find(article => article.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={searchedArticles[0].image}
                alt={searchedArticles[0].title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">{searchedArticles[0].title}</h2>
                <p className="text-gray-200 mb-4">{searchedArticles[0].excerpt}</p>
                <div className="flex items-center text-gray-200 text-sm">
                  <FiUser className="mr-2" />
                  <span className="mr-4">{searchedArticles[0].author}</span>
                  <FiCalendar className="mr-2" />
                  <span className="mr-4">{searchedArticles[0].date}</span>
                  <FiClock className="mr-2" />
                  <span>{searchedArticles[0].readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchedArticles.filter(article => !article.featured).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <FiUser className="mr-2" />
                  <span className="mr-4">{article.author}</span>
                  <FiCalendar className="mr-2" />
                  <span className="mr-4">{article.date}</span>
                  <FiClock className="mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;