import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaMicrosoft } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { TbBrandXamarin } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { PiFileSql } from 'react-icons/pi';
import Aspnet from '../assets/Aspnet.png'; // Ensure this path points to your ASP.NET image
import { motion } from 'motion/react';

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repearType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
       whileInView={{opacity: 1, y: 0}} 
       initial={{ opacity: 0, y: -100}}
       transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity: 1, x: 0}} 
      initial={{ opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNode className="text-7xl text-cyan-400" />
        </motion.div>
       
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandXamarin className="text-7xl text-cyan-400" />
          </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandJavascript className="text-7xl text-cyan-400" />
          </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <PiFileSql className="text-7xl text-cyan-400" />
          </motion.div>
        {/* ASP.NET Image */}
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img
            src={Aspnet}
            alt="ASP.NET"
            className="h-16 w-16 object-contain" // Adjust size as needed
          />
        </motion.div>
        </motion.div>
      </div>
    
  );
};

export default Technologies;
