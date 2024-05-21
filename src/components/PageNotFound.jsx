import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
export const PageNotFound = () => {
  return (
    <motion.div
      className='w-full h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
        
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="text-center">
          <p className="text-base font-semibold text-red-400">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={'/Personal-Portfolio'}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </motion.div>
    
  );
}
