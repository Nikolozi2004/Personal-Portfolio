/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { Typography } from '@material-tailwind/react'

export const About = () => {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='h-full relative flex max-w-screen-2xl'>
      <div className='h-full w-full justify-center lg:w-1/2 flex flex-col lg:justify-start lg:px-2 lg:py-2 py-6 px-6'>
        <Typography
          variant='h3'
          color='white'
          className='mb-6 mt-8 text-center lg:text-left'>
          About Me
        </Typography>
        <div className='w-full'>
          <Typography
            variant='h6'
            color='white'
            className='mb-6'>
            Hello! Welcome to my web space. I'm Nikoloz Meskhi, a passionate full-stack web developer based in Tbilisi, Georgia.
          </Typography>
          <Typography
            variant='h6'
            color='white'
            className='mb-6'>
            I have a diverse set of skills, ranging from front-end development with HTML, CSS, and JavaScript to back-end development with Node.js and databases like MongoDB. My toolkit includes popular frameworks and libraries such as React and Tailwind CSS, and I'm proficient in using development tools like Git, Docker, and various IDEs.
          </Typography>
          <Typography
            variant='h6'
            color='white'
            className='mb-6'>
            With a strong foundation in both front-end and back-end technologies, I enjoy building dynamic, responsive, and user-friendly web applications. I'm constantly learning and staying up-to-date with the latest trends in web development to ensure that my projects are cutting-edge.
          </Typography>
          <Typography
            variant='h6'
            color='white'
            className='mb-4'>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the beautiful landscapes of Georgia. Feel free to explore my projects and get in touch if you have any questions or opportunities for collaboration!
          </Typography>
        </div>
      </div>
      <div className='h-full'></div>
    </motion.div>
  )
}
