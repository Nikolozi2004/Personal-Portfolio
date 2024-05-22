/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { Typography } from '@material-tailwind/react'
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
export const About = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='h-full relative md:flex max-w-screen-2xl'>
      <div className='h-auto w-full justify-evenly items-center lg:w-1/2 flex flex-col lg:justify-start lg:px-2 lg:py-2 py-6 px-6 border-b-2'>
        <Typography
          variant='h3'
          color='white'
          className='mb-6 mt-8 text-center lg:text-left [text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-red-500'>
          About Me
        </Typography>
        <div className='w-full flex flex-col h-full'>
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
      <div className='md:h-full w-full md:w-1/2 flex flex-col items-center justify-center'>
        <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(1)} className='justify-center px-2'>What project are you currently working on?</AccordionHeader>
          <AccordionBody>
            I am currently developing a full-stack e-commerce web application using the MERN stack with TypeScript. This involves creating a robust and scalable platform for online shopping, integrating front-end and back-end technologies seamlessly.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(2)} className='justify-center px-2'>
            Do you have work experience?
          </AccordionHeader>
          <AccordionBody>
            I currently do not have any formal work experience, but I am eager to apply my skills and knowledge in a professional setting.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(3)} className='justify-center px-2'>
            What are your career goals?
          </AccordionHeader>
          <AccordionBody className="bg-white p-3 rounded-md text-black">
            My career goal is to become a leading full-stack developer, specializing in creating scalable and efficient web applications. I am passionate about continuous learning and staying updated with the latest technologies. In the long term, I aim to take on leadership roles where I can mentor and guide junior developers and contribute to innovative projects that make a positive impact.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(4)} className='justify-center px-2'>
            How do you stay current with new technologies and trends?
          </AccordionHeader>
          <AccordionBody>
            I stay current with new technologies and trends by regularly reading industry blogs, following influential tech leaders on social media, and participating in online communities such as Stack Overflow and GitHub. I also take online courses on platforms like Udemy and Pluralsight to continuously improve my skills. Additionally, I attend webinars, tech meetups, and conferences to network with other professionals and learn about the latest advancements in the field.
          </AccordionBody>
        </Accordion>

      </div>
    </motion.div>
  )
}
