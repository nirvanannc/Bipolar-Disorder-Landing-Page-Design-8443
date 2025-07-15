import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiGlobe, FiBook, FiUsers, FiExternalLink } = FiIcons;

const ResourcesSection = () => {
  const resources = [
    {
      icon: FiPhone,
      title: 'Crisis Support',
      items: [
        { name: 'National Suicide Prevention Lifeline', contact: '988', description: '24/7 crisis support' },
        { name: 'Crisis Text Line', contact: 'Text HOME to 741741', description: 'Free 24/7 text support' },
        { name: 'SAMHSA National Helpline', contact: '1-800-662-4357', description: 'Treatment referral service' }
      ]
    },
    {
      icon: FiGlobe,
      title: 'Organizations',
      items: [
        { name: 'National Alliance on Mental Illness (NAMI)', contact: 'nami.org', description: 'Education and support' },
        { name: 'Depression and Bipolar Support Alliance', contact: 'dbsalliance.org', description: 'Peer support network' },
        { name: 'International Bipolar Foundation', contact: 'ibpf.org', description: 'Research and advocacy' }
      ]
    },
    {
      icon: FiBook,
      title: 'Educational Resources',
      items: [
        { name: 'NIMH Bipolar Disorder Guide', contact: 'nimh.nih.gov', description: 'Comprehensive information' },
        { name: 'Mayo Clinic Bipolar Disorder', contact: 'mayoclinic.org', description: 'Medical information' },
        { name: 'WebMD Bipolar Center', contact: 'webmd.com', description: 'Symptoms and treatment info' }
      ]
    },
    {
      icon: FiUsers,
      title: 'Support Groups',
      items: [
        { name: 'DBSA Support Groups', contact: 'Local chapters nationwide', description: 'In-person and online groups' },
        { name: 'NAMI Support Groups', contact: 'Local NAMI affiliates', description: 'Peer and family support' },
        { name: 'Online Communities', contact: 'Various platforms', description: 'Digital peer support' }
      ]
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access helpful resources, support networks, and crisis intervention services 
            for bipolar disorder.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={category.icon} className="text-3xl text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <p className="text-blue-600 font-medium">{item.contact}</p>
                      </div>
                      <SafeIcon icon={FiExternalLink} className="text-gray-400 ml-2 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Remember: Help is Available</h3>
          <p className="text-blue-100 text-lg mb-6">
            If you're in crisis or having thoughts of self-harm, reach out immediately. 
            You don't have to face this alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:988" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <SafeIcon icon={FiPhone} className="text-lg" />
              Call 988 Now
            </a>
            <a 
              href="sms:741741" 
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-200"
            >
              Text HOME to 741741
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;