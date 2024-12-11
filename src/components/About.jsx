import React from 'react';
import aboutImg from '../assets/Aboutme.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <img
            className="rounded-2xl w-full max-w-sm lg:max-w-md"
            src={aboutImg}
            alt="About"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="lg:flex-1"
        >
          <p className="text-center lg:text-left">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;