import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles/';
import { github } from '../assets/';
import SectionWrapper from '../hoc/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}>
    <Tilt
      className='w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]'
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <div className='relative h-[230px] w-full'>
        <img
          src={image}
          alt={name}
          className='h-full w-full rounded-2xl object-cover'
        />
      </div>
      <div className='card-img_hover absolute inset-0 m-3 flex justify-end'>
        <div
          onClick={() => window.open(source_code_link, '_blank')}
          className='black-gradient flex h-10 w-10 cursor-pointer items-center justify-center  rounded-full'
        >
          <img
            src={github}
            alt='github'
            className='h-1/2 w-1/2 object-contain'
          />
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p className='mt-2 text-sm text-[14px] text-secondary'>{description}</p>
        <div className='mt-3 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <span
              key={`tag-${index}`}
              className={`rounded-full  px-2 py-1 text-xs font-bold ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary'
        >
          Welcome to my Projects Showcase, a curated selection of my most
          impactful and exciting web development projects that demonstrate my
          technical expertise in React, TypeScript, Express, Node.js,
          PostgreSQL, MongoDB, TailwindCSS, Three.js, and JavaScript. As you
          explore this showcase, you'll discover my dedication to creating
          immersive, user-centric, and scalable digital experiences across
          various applications. Each project reflects my development journey and
          capabilities as a full-stack web developer, so feel free to visit the
          live demos and GitHub repositories for a deeper insight into my work.
          Enjoy exploring!
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'work');
