import { Progress } from '@material-tailwind/react';
import { motion } from 'framer-motion'
import {
  JavascriptOriginal,
  CsharpOriginal,
  Html5OriginalWordmark,
  TailwindcssOriginal,
  Css3Plain,
  ReactOriginal,
} from 'devicons-react';



export const Skills = () => {


  return (

    <motion.div
      className='w-full relative flex justify-evenly pt-6 bg-gray-900 h-full'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>

      <div className='h-full w-1/3 flex flex-col items-center'>
        <h1 className='mb-4 font-sans text-xl text-white'>Front-End</h1>
        <motion.div
          className='flex justify-between items-center w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <JavascriptOriginal size="84" color='blue' radius='3px' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className=' mx-1' />
        </motion.div>
        
       
      </div>

      <div className='h-full w-1/3 flex flex-col items-center'>
        <h1>Back-End</h1>
        <div className='flex justify-center items-center w-1/2'>
          <CsharpOriginal size="80" color='blue' />
          <Progress value={50} size="lg" label="Medium" className='ml-4' />

        </div>
      </div>
      <div className='h-full w-1/3 flex flex-col items-center'>
        <h1>Tools</h1>
        <div className='flex justify-center items-center w-1/2'>
          <JavascriptOriginal size="80" color='blue' />
          <Progress value={50} size="md" label="Medium" className='ml-4' />
        </div>
      </div>


    </motion.div>

  );
}
