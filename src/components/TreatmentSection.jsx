import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPill, FiMessageCircle, FiActivity, FiHeart } = FiIcons;

const TreatmentSection = () => {
  const treatments = [
    {
      icon: FiPill,
      title: 'Medication',
      description: 'Mood stabilizers, antipsychotics, and antidepressants can help manage symptoms.',
      details: ['Lithium', 'Anticonvulsants', 'Atypical antipsychotics', 'Antidepressants (with mood stabilizers)']
    },
    {
      icon: FiMessageCircle,
      title: 'Psychotherapy',
      description: 'Talk therapy helps develop coping strategies and understand the condition.',
      details: ['Cognitive Behavioral Therapy (CBT)', 'Interpersonal Therapy', 'Family Therapy', 'Group Therapy']
    },
    {
      icon: FiActivity,
      title: 'Lifestyle Changes',
      description: 'Healthy habits can support overall treatment and mood stability.',
      details: ['Regular sleep schedule', 'Exercise routine', 'Stress management', 'Avoiding alcohol/drugs']
    },
    {
      icon: FiHeart,
      title: 'Support Systems',
      description: 'Building strong support networks is crucial for long-term management.',
      details: ['Family support', 'Support groups', 'Peer counseling', 'Mental health apps']
    }
  ];

  return (
    <section id="treatment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Treatment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bipolar disorder is highly treatable. Most people with bipolar disorder can achieve 
            substantial stabilization of their mood swings with proper treatment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={treatment.icon} className="text-3xl text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">{treatment.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{treatment.description}</p>
              <ul className="space-y-2">
                {treatment.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Recovery is Possible
          </h3>
          <p className="text-green-700 text-lg">
            With the right combination of treatment, support, and self-care, people with bipolar disorder 
            can live full, productive lives. It's important to work closely with healthcare providers 
            to find the treatment plan that works best for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentSection;