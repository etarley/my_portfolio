import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='w-full text-secondary hover:text-white xs:w-[250px]'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary py-5 px-12'
        >
          <img src={icon} alt={title} className='object h-16 w-16' />
          <h3 className='text-center text-2xl font-bold '>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary'
      >
        I am a highly motivated full-stack web developer with a deep passion for
        creating immersive and dynamic digital experiences. My expertise in
        modern technologies, including React, TypeScript, Express, Node.js,
        PostgreSQL, MongoDB, TailwindCSS, Three.js, and JavaScript, enables me
        to design and develop high-quality, user-centric, and scalable web
        applications.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
