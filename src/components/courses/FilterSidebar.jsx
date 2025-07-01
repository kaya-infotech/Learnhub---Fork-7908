import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const FilterSidebar = ({ filters, onFilterChange, showFilters, setShowFilters }) => {
  const categories = [
    'Web Development',
    'Graphic Design',
    'Digital Marketing',
    'AI & Machine Learning',
    'Business',
    'Data Science',
    'Mobile Development',
    'IT & Software'
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];

  const sidebarClass = `
    fixed md:relative top-0 left-0 h-full w-64 bg-white shadow-lg md:shadow-none
    transform ${showFilters ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    transition-transform duration-300 ease-in-out z-30 overflow-y-auto
    md:block md:w-72
  `;

  return (
    <>
      {/* Overlay */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}

      <div className={sidebarClass}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h3 className="text-lg font-semibold">Filters</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Categories</h3>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.category}
              onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Level</h3>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.level}
              onChange={(e) => onFilterChange({ ...filters, level: e.target.value })}
            >
              <option value="all">All Levels</option>
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Price</h3>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.price}
              onChange={(e) => onFilterChange({ ...filters, price: e.target.value })}
            >
              <option value="all">All Prices</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Rating</h3>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.rating}
              onChange={(e) => onFilterChange({ ...filters, rating: e.target.value })}
            >
              <option value="all">All Ratings</option>
              <option value="4.5">4.5 & up</option>
              <option value="4.0">4.0 & up</option>
              <option value="3.5">3.5 & up</option>
            </select>
          </div>

          {/* Language */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Language</h3>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.language}
              onChange={(e) => onFilterChange({ ...filters, language: e.target.value })}
            >
              <option value="all">All Languages</option>
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;