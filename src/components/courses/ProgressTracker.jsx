import { motion } from 'framer-motion';

const ProgressTracker = ({ progress }) => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Course Progress</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-blue-600"
        />
      </div>
      {progress > 0 && (
        <button className="mt-2 text-blue-600 text-sm hover:text-blue-700">
          Resume Learning
        </button>
      )}
    </div>
  );
};

export default ProgressTracker;