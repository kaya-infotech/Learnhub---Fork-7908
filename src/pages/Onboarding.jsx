import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { OnBoarding } from '@questlabs/react-sdk';
import { useAuth } from '../context/AuthContext';
import questConfig from '../config/questConfig';

const Onboarding = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Redirect if not a new user
    const isNewUser = localStorage.getItem('isNewUser') === 'true';
    if (!isNewUser) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const getAnswers = () => {
    // Clear new user flag
    localStorage.removeItem('isNewUser');
    
    // Navigate to main app after completion
    navigate('/');
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="min-h-screen flex">
        {/* Left Section - Welcome Message */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-500 via-blue-600 to-purple-700 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 w-full">
            <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-6xl mb-6">🚀</div>
                <h1 className="text-5xl font-bold text-white mb-6">
                  Let's Get Started!
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  We're setting up your personalized learning experience. This will help us recommend the best courses for you.
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex items-center text-white">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Personalized course recommendations</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Customized learning paths</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Progress tracking and achievements</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Onboarding Component */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md w-full"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome!
                </h2>
                <p className="text-gray-600">
                  Tell us about yourself to get started
                </p>
              </div>

              {/* Quest Onboarding Component */}
              <div className="quest-onboarding-container" style={{ width: '400px', maxWidth: '100%' }}>
                <OnBoarding
                  userId={user.userId}
                  token={user.token}
                  questId={questConfig.QUEST_ONBOARDING_QUESTID}
                  answer={answers}
                  setAnswer={setAnswers}
                  getAnswers={getAnswers}
                  accent={questConfig.PRIMARY_COLOR}
                  singleChoose="modal1"
                  multiChoice="modal2"
                >
                  <OnBoarding.Header />
                  <OnBoarding.Content />
                  <OnBoarding.Footer />
                </OnBoarding>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;