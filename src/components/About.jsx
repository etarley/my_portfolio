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
        Welcome to my portfolio! As a fullstack web developer with experience in
        React, Typescript, express, node, postgresql, mongodb, tailwindcss,
        Three.js and javascript, I have a strong foundation in the technologies
        and frameworks required to build robust and dynamic web applications. My
        portfolio showcases my ability to build custom web applications tailored
        to meet the unique needs of clients across various industries. With my
        expertise in these technologies, I can deliver exceptional user
        experiences that engage and
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
