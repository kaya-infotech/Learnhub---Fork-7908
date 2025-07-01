import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiPlayCircle, FiLock } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const CourseContent = ({ course }) => {
  const [expandedSection, setExpandedSection] = useState(0);

  const sections = [
    {
      title: "Getting Started",
      duration: "2 hours",
      lectures: [
        { title: "Welcome to the Course", duration: "5:00", preview: true },
        { title: "Course Overview", duration: "10:00", preview: true },
        { title: "Setting Up Your Development Environment", duration: "15:00", preview: false }
      ]
    },
    {
      title: "HTML Fundamentals",
      duration: "4 hours",
      lectures: [
        { title: "Introduction to HTML", duration: "20:00", preview: true },
        { title: "HTML Elements and Tags", duration: "25:00", preview: false },
        { title: "Forms and Input Elements", duration: "30:00", preview: false }
      ]
    },
    {
      title: "CSS Basics",
      duration: "6 hours",
      lectures: [
        { title: "CSS Selectors", duration: "25:00", preview: true },
        { title: "Box Model", duration: "20:00", preview: false },
        { title: "Flexbox Layout", duration: "35:00", preview: false }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.whatYouWillLearn.map((item, index) => (
            <div key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Requirements</h3>
        <ul className="list-disc list-inside space-y-2">
          {course.requirements.map((req, index) => (
            <li key={index} className="text-gray-600">{req}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Course Content</h3>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border rounded-lg mb-4">
            <button
              className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
              onClick={() => setExpandedSection(expandedSection === sectionIndex ? -1 : sectionIndex)}
            >
              <div className="flex items-center">
                {expandedSection === sectionIndex ? <FiChevronUp /> : <FiChevronDown />}
                <span className="ml-2 font-medium">{section.title}</span>
              </div>
              <span className="text-gray-500">{section.duration}</span>
            </button>

            <AnimatePresence>
              {expandedSection === sectionIndex && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {section.lectures.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      className="px-6 py-4 flex items-center justify-between border-t"
                    >
                      <div className="flex items-center">
                        {lecture.preview ? (
                          <FiPlayCircle className="text-blue-600" />
                        ) : (
                          <FiLock className="text-gray-400" />
                        )}
                        <span className="ml-3">{lecture.title}</span>
                        {lecture.preview && (
                          <span className="ml-2 text-xs text-blue-600">(Preview)</span>
                        )}
                      </div>
                      <span className="text-gray-500">{lecture.duration}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;