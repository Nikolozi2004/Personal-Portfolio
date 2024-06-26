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
      className='md:h-full h-auto relative bg-gray-900 md:flex max-w-screen-2xl bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
      <div className='h-auto w-full justify-evenly items-center lg:w-1/2 flex flex-col lg:justify-start lg:px-8 lg:py-2 py-6 px-6 border-b-2 border-r-2 overflow-y-auto'>
        <Typography
          variant='h3'
          color='white'
          className='mb-10 mt-8 text-center lg:text-left border-b-2 [text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-purple-500'>
          About Me
        </Typography>
        <div className='w-full flex flex-col h-full'>
          <Typography
            variant='paragraph'
            color='white'
            className='mb-6'>
            I'm Nikoloz Meskhi, a passionate full-stack web developer based in Tbilisi, Georgia.
          </Typography>
          <Typography
            variant='paragraph'
            color='white'
            className='mb-8'>
            I have a diverse skill set that covers various aspects of web development and programming. On the front-end, I excel at creating engaging user interfaces using HTML, CSS, and JavaScript, along with frameworks like React. For back-end development, I'm proficient in Node.js and Express.js, and I'm skilled in working with databases such as MongoDB. Additionally, I have experience in desktop application development with C#. My toolkit also includes essential tools like Git, Docker, and Bruno, which I use to ensure efficient development processes.
          </Typography>
          <Typography
            variant='paragraph'
            color='white'
            className='mb-8'>
            With a strong foundation in both front-end and back-end technologies, I enjoy building dynamic, responsive, and user-friendly web applications. I'm constantly learning and staying up-to-date with the latest trends in web development to ensure that my projects are cutting-edge.
          </Typography>
          <Typography
            variant='paragraph'
            color='white'
            className='mb-4'>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the beautiful landscapes of Georgia. Feel free to explore my projects and get in touch if you have any questions or opportunities for collaboration!
          </Typography>
        </div>
      </div>
      <div className='md:h-auto text-white w-full md:w-1/2 flex flex-col items-center justify-center overflow-y-auto'>
        Q & A
        <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(1)} className='justify-center text-center text-white hover:text-purple-900 px-2'>What project are you currently working on?</AccordionHeader>
          <AccordionBody className="bg-white p-3 rounded-md text-black">
            I am currently developing a full-stack e-commerce web application using the MERN stack with TypeScript. This involves creating a robust and scalable platform for online shopping and integrating front-end and back-end technologies seamlessly.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(2)} className='justify-center text-center text-white hover:text-purple-900 px-2'>
            Do you have work experience?
          </AccordionHeader>
          <AccordionBody className="bg-white p-3 rounded-md text-black">
            I currently do not have any formal work experience, but I am eager to apply my skills and knowledge in a professional setting.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(3)} className='justify-center text-white hover:text-purple-900 px-2 text-center'>
            What are your career goals?
          </AccordionHeader>
          <AccordionBody className="bg-white p-3 rounded-md text-black">
            My career aspiration is to excel as a proficient full-stack developer, specialising in crafting scalable and high-performing web applications. I am deeply committed to ongoing learning and consistently staying abreast of emerging technologies and industry trends. Looking ahead, I aspire to assume leadership positions where I can provide mentorship to emerging talents in the field while also contributing my expertise to pioneering projects that drive positive change.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(4)} className='justify-center text-white hover:text-purple-900 px-2 text-center'>
            How do you stay current with new technologies and trends?
          </AccordionHeader>
          <AccordionBody className="bg-white p-3 rounded-md text-black">
            I stay current with new technologies and trends by regularly reading industry blogs, following influential tech paragraphers on social media, and participating in online communities such as Stack Overflow and GitHub. I also take online courses on platforms like Udemy and Pluralsight to continuously improve my skills. Additionally, I attend webinars, tech meetups, and conferences to network with other professionals and learn about the latest advancements in the field.
          </AccordionBody>
        </Accordion>

      </div>
    </motion.div>
  )
}
