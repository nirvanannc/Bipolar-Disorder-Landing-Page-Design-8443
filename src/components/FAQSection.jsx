import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiChevronUp } = FiIcons;

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What causes bipolar disorder?",
      answer: "The exact cause of bipolar disorder is unknown, but research suggests it's likely due to a combination of genetic, biological, and environmental factors. Family history, brain structure and function, and stressful life events may all play a role."
    },
    {
      question: "How is bipolar disorder diagnosed?",
      answer: "Bipolar disorder is diagnosed through a comprehensive psychiatric evaluation by a mental health professional. This includes discussing symptoms, family history, and ruling out other conditions. There's no single test for bipolar disorder."
    },
    {
      question: "Can bipolar disorder be cured?",
      answer: "While there's no cure for bipolar disorder, it's highly treatable. With proper medication, therapy, and lifestyle management, most people with bipolar disorder can achieve mood stability and lead fulfilling lives."
    },
    {
      question: "What's the difference between Bipolar I and Bipolar II?",
      answer: "Bipolar I involves at least one manic episode that lasts 7+ days or requires hospitalization. Bipolar II involves hypomanic episodes (less severe than mania) and major depressive episodes, but no full manic episodes."
    },
    {
      question: "Can people with bipolar disorder work and have relationships?",
      answer: "Absolutely. With proper treatment and support, people with bipolar disorder can maintain successful careers, relationships, and family lives. Many successful individuals have bipolar disorder and lead productive lives."
    },
    {
      question: "How long do mood episodes typically last?",
      answer: "Without treatment, manic episodes typically last 3-6 months, while depressive episodes can last 6-12 months. With proper treatment, episodes are usually shorter and less severe."
    },
    {
      question: "Is bipolar disorder hereditary?",
      answer: "Bipolar disorder does have a genetic component. Having a parent or sibling with bipolar disorder increases your risk, but genetics alone don't determine whether someone will develop the condition."
    },
    {
      question: "What should I do if I think I have bipolar disorder?",
      answer: "If you're experiencing symptoms of bipolar disorder, it's important to seek professional help. Start by talking to your primary care doctor or a mental health professional. Early diagnosis and treatment lead to better outcomes."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about bipolar disorder answered by mental health professionals.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <SafeIcon 
                  icon={openFAQ === index ? FiChevronUp : FiChevronDown} 
                  className="text-xl text-blue-600 flex-shrink-0" 
                />
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">
            Have more questions? Don't hesitate to reach out to a mental health professional.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Find a Provider
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;