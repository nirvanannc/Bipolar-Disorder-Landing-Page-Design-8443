import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiTrendingDown, FiAlertCircle } = FiIcons;

const SymptomsSection = () => {
  const maniaSymptoms = [
    'Elevated or irritable mood',
    'Increased energy and activity',
    'Decreased need for sleep',
    'Racing thoughts',
    'Rapid speech',
    'Poor judgment',
    'Risky behavior'
  ];

  const depressionSymptoms = [
    'Persistent sadness',
    'Loss of interest in activities',
    'Fatigue or low energy',
    'Sleep disturbances',
    'Appetite changes',
    'Difficulty concentrating',
    'Feelings of worthlessness'
  ];

  return (
    <section id="symptoms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recognizing the Symptoms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bipolar disorder involves distinct mood episodes that differ significantly 
            from a person's usual mood and behavior.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiTrendingUp} className="text-3xl text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Manic Episodes</h3>
            </div>
            <p className="text-gray-600 mb-6">
              During manic episodes, individuals experience an abnormally elevated, 
              expansive, or irritable mood lasting at least one week.
            </p>
            <ul className="space-y-3">
              {maniaSymptoms.map((symptom, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiTrendingDown} className="text-3xl text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Depressive Episodes</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Depressive episodes involve a period of at least two weeks during which 
              there is a depressed mood or loss of interest in activities.
            </p>
            <ul className="space-y-3">
              {depressionSymptoms.map((symptom, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-red-50 border border-red-200 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-start">
            <SafeIcon icon={FiAlertCircle} className="text-2xl text-red-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-2">When to Seek Help</h3>
              <p className="text-red-700 mb-4">
                If you or someone you know is experiencing thoughts of self-harm or suicide, 
                seek immediate professional help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:988" 
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 text-center"
                >
                  Call 988 (Crisis Lifeline)
                </a>
                <a 
                  href="tel:911" 
                  className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 text-center"
                >
                  Call 911 (Emergency)
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SymptomsSection;