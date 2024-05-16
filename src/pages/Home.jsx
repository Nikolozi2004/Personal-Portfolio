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
      <div className="flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold text-center mb-4">Hello! Welcome to My Web Space</h1>
        <p className="text-xl text-gray-300 text-center max-w-md">
          Glad you stopped by! I'm Nikoloz Meskhi, a full-stack web developer. Explore my projects!
        </p>
      </div>
      <Link to="/about">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 absolute bottom-10 right-10 cursor-pointer hover:fill-blue-900">
          <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </Link>
    </motion.div>
  )
}
