import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative mx-auto h-screen w-full'>
      <div
        className={`${styles.paddingX} insert-0 absolute top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]'></div>
          <div className='violet-gradient h-40 w-1 sm:h-80'></div>
        </div>
      </div>
      <div>
        <h1>
          Hi, I'm <span className='text-[#915eff]'>Etarley</span>{' '}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
