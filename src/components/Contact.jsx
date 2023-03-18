import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';

//template_jypcie4
//service_b86i4he
//HFzHTky58_Tlm9gD7

const Contact = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_b86i4he',
        'template_jypcie4',
        {
          from_name: formState.name,
          to_name: 'Etarley',
          from_email: formState.email,
          to_email: 'standecristo@gmail.com',
          message: formState.message,
        },
        'HFzHTky58_Tlm9gD7'
      )
      .then(
        () => {
          setLoading(false);
          alert('Message sent successfully, I will get back to you soon!');

          setFormState({
            name: '',
            email: '',
            message: '',
          });
        },
        (e) => {
          setLoading(false);

          console.log(e);

          alert('something went wrong, please try again later');
        }
      );
  };

  return (
    <div className='flex  flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] rounded-2xl bg-black-100 p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          className='mt-5 flex flex-col gap-5'
          onSubmit={handleSubmit}
        >
          <label htmlFor='name' className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Name</span>
            <input
              type='text'
              className='rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary'
              name='name'
              value={formState.name}
              onChange={handleChange}
              placeholder="What's your name?"
            />
          </label>
          <label htmlFor='email' className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Email</span>
            <input
              type='email'
              className='rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary'
              name='email'
              value={formState.email}
              onChange={handleChange}
              placeholder="What's your email?"
            />
          </label>
          <label htmlFor='message' className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Message</span>
            <textarea
              className='rounded-lg border-none bg-tertiary py-4 px-6 font-medium text-white outline-none placeholder:text-secondary'
              name='message'
              value={formState.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              rows={7}
            />
          </label>
          <button
            type='submit'
            className='w-fit rounded-xl bg-[#915eff] py-3 px-8 font-bold  text-white shadow-md shadow-primary outline-none'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='flex h-[350px] items-center justify-center md:h-[550px] xl:h-auto xl:flex-1'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
