import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiHeart} className="text-2xl text-blue-400" />
              <span className="text-xl font-bold">MindCare</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing comprehensive information and support for those affected by bipolar disorder. 
              Together, we can break the stigma and build understanding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Symptoms', 'Treatment', 'FAQ', 'Resources'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Crisis Support</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="text-blue-400 mr-2" />
                <a href="tel:988" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  988 - Crisis Lifeline
                </a>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="text-blue-400 mr-2" />
                <a href="tel:911" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  911 - Emergency
                </a>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="text-blue-400 mr-2" />
                <span className="text-gray-300">Text HOME to 741741</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              This website provides educational information only and is not a substitute for 
              professional medical advice. Always consult with qualified healthcare providers 
              for diagnosis and treatment.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-400">
            © {currentYear} MindCare. This educational resource is dedicated to mental health awareness.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            If you're in crisis, please reach out for help immediately. You are not alone.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;