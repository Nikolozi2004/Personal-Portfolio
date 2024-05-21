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
      className='relative w-full h-full flex flex-col items-center justify-center'

    >
      <div className="flex flex-col items-center justify-center text-white">
        <Typography
          variant='h1'
          className="font-bold ani text-center mb-4 bg-gradient-to-r from-blue-300 via-blue-gray-300 to-indigo-600 text-3xl md:text-4xl lg:text-5xl inline-block text-transparent bg-clip-text">I'm Nikolozi, a full stack web developer.</Typography>
        <Typography variant='h4' className="text-xl text-gray-300 text-left font w-full md:max-w-2xl lg:max-w-2xl px-4 mt-4 h-auto">
          Hello there! I'm Nikolozi, a seasoned full-stack web developer. Explore my portfolio to discover the seamless web solutions I've crafted
        </Typography>
      </div>
      <Link to="/Personal-Portfolio/about">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 absolute bottom-10 right-10 cursor-pointer hover:fill-blue-900">
          <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </Link>
    </motion.div>
  )
}
