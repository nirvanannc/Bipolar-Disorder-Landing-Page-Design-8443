import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBrain, FiActivity, FiUsers } = FiIcons;

const AboutSection = () => {
  const stats = [
    { icon: FiUsers, number: '2.8%', label: 'of US adults affected annually' },
    { icon: FiBrain, number: '83%', label: 'experience severe impairment' },
    { icon: FiActivity, number: '18.6', label: 'average age of onset' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What is Bipolar Disorder?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bipolar disorder is a mental health condition characterized by extreme mood swings 
            that include emotional highs (mania or hypomania) and lows (depression).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
              alt="Brain illustration"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Understanding the Condition
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Bipolar disorder affects the brain's ability to regulate mood, energy, and activity levels. 
                These changes can affect day-to-day functioning and relationships.
              </p>
              <p className="text-gray-600 leading-relaxed">
                There are several types of bipolar disorder, including Bipolar I, Bipolar II, 
                and Cyclothymic Disorder, each with different patterns of mood episodes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With proper diagnosis and treatment, people with bipolar disorder can lead 
                healthy, productive lives.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-blue-50 rounded-xl">
              <SafeIcon icon={stat.icon} className="text-4xl text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;