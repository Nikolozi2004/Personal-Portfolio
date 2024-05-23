/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@material-tailwind/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export const Home = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='relative w-full homeh flex flex-col items-center justify-center h-auto'

    >
      <div className="shadow-2xl relative bgofhome shadow-purple-700 flex flex-col items-center justify-center text-white rounded-t-xl h-full max-w-screen-2xl w-full rounded-br-full rounded-bl-full p-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#35136a_100%)] hmbll">
        <Typography
          variant='h1'
          className="font-bold ani text-center mb-4 bg-gradient-to-r from-blue-300 via-blue-gray-300 to-indigo-600 text-3xl md:text-4xl lg:text-5xl inline-block text-transparent bg-clip-text">I'm Nikolozi, <br className='block md:hidden' /> A Full Stack Web Developer.</Typography>
        <Typography variant='h4' className="text-xl text-gray-300 text-center md:text-center font w-full md:max-w-2xl lg:max-w-2xl px-4 mt-4 h-auto [text-shadow:2px_1px_9px_var(--tw-shadow-color)] shadow-purple-500">
          Explore my <Link className='hover:text-purple-100 rounded-md prjhome underline' to={"/Personal-Portfolio/projects"}>Projects</Link> and <Link className='hover:text-purple-100 rounded-md prjhome underline' to={"/Personal-Portfolio/projects"}>Skills</Link>
        </Typography>
      </div>
      <Link to="/Personal-Portfolio/about">
        <div className='hover:scale-110 homebtn p-1 bottom-1 right-1 md:bottom-10 md:right-8 z-50 absolute cursor-pointer md:p-2 rounded-md w-auto gap-3 bg-purple-900 shadow-2xl transition-all hover:shadow-purple-300 flex justify-between items-center'>
          <Typography className='bottom-10 right-20 cursor-pointer text-white'>
            About Me
          </Typography>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 bottom-10 right-10">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </div>
      </Link>
    <Link to={"/Personal-Portfolio/contact"}>
      <div className='hover:scale-110 homebtn p-1 bottom-1 left-1 md:bottom-10 md:left-8 z-50 absolute cursor-pointer md:p-2 rounded-md w-auto gap-3 bg-purple-900 shadow-2xl transition-all hover:shadow-purple-300 flex justify-between items-center'>
        <Typography className='bottom-10 right-20 cursor-pointer text-white'>
          Contact Me
        </Typography>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>

      </div>
    </Link>


    </motion.div>
  )
}
