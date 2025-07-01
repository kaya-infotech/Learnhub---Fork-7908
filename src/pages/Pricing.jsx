import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiInfo, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 flex justify-between items-center hover:text-blue-600 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-left">{question}</span>
        {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for getting started",
      features: [
        "Access to free courses",
        "Basic course materials",
        "Community forum access",
        "Mobile app access",
        "Course completion certificates"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: billingPeriod === 'monthly' ? 24 : 19,
      description: "Best for individual learners",
      features: [
        "All Free features",
        "Unlimited access to all courses",
        "Downloadable resources",
        "Premium course materials",
        "Priority support",
        "Ad-free experience",
        "Offline viewing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: billingPeriod === 'monthly' ? 79 : 63,
      description: "For teams and organisations",
      features: [
        "All Pro features",
        "Team management dashboard",
        "Custom learning paths",
        "Analytics and reporting",
        "API access",
        "Dedicated account manager",
        "Custom branding",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes access to selected courses, basic course materials, community forum access, and course completion certificates. It's perfect for beginners who want to explore our platform."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be charged the prorated amount for the remainder of your billing cycle. If you downgrade, your new rate will take effect at the next billing cycle."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, you can request a full refund within the first 30 days of your subscription."
    },
    {
      question: "Do you offer team discounts?",
      answer: "Yes, we offer special discounts for teams of 5 or more members. Contact our sales team for custom pricing and volume discounts for your organisation."
    },
    {
      question: "How does the billing work?",
      answer: "We offer both monthly and annual billing options. With annual billing, you save 20% compared to monthly billing. You can pay using all major credit cards or PayPal."
    },
    {
      question: "What happens to my progress if I cancel?",
      answer: "If you cancel a paid subscription, you'll maintain access to your courses and progress until the end of your current billing period. After that, you'll still have access to your completed courses but won't be able to access premium features."
    },
    {
      question: "Can I share my account with others?",
      answer: "No, our subscriptions are for individual use only. For team or family access, please check our Enterprise plan or contact sales for custom solutions."
    },
    {
      question: "How do I get a certificate?",
      answer: "Certificates are available for all completed courses across all plans. Premium certificates with enhanced features are available for Pro and Enterprise subscribers."
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Choose the plan that's right for you. Get started with our free tier or upgrade for premium features.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Toggle Annual/Monthly */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                billingPeriod === 'monthly' ? 'bg-white shadow-sm' : ''
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                billingPeriod === 'annual' ? 'bg-white shadow-sm' : ''
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">£{plan.price}</span>
                  <span className="text-gray-600">
                    /{billingPeriod === 'monthly' ? 'month' : 'month, billed annually'}
                  </span>
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium mb-8 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.price === 0 ? 'Get Started' : 'Subscribe Now'}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <FiCheck className="text-green-500 mt-1 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our pricing plans and features
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg divide-y">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;