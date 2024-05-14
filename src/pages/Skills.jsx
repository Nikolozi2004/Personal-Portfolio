import { Progress } from '@material-tailwind/react';
import { motion } from 'framer-motion'
import { 
  JavascriptPlain,
  TypescriptPlain,
  ReactOriginal,
  JavascriptOriginal,
  TailwindcssPlainWordmark,
  Html5Plain,
  Css3Plain,
  CsharpPlain,
  MongodbPlain,
  ExpressOriginal,
  NodejsPlain,
  GitPlain,
 } from 'devicons-react';

export const Skills = () => {


  return (

    <motion.div
      className='w-full relative flex flex-col lg:flex-row justify-evenly pt-6 h-full'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>

      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Front-End</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <TypescriptPlain size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <JavascriptPlain size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <ReactOriginal size="80" color='darkgreen' fill='darkgreen' radius='3px' className='w-20 h-20 [&_*]:fill-green-700'/>
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <TailwindcssPlainWordmark size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <Css3Plain size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <Html5Plain size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
      </div>



      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Back-End</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <CsharpPlain size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <NodejsPlain size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <MongodbPlain size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <ExpressOriginal size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
      </div>
      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Tools</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <GitPlain size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <JavascriptOriginal size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <JavascriptOriginal size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <JavascriptOriginal size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 bg-gray-100 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <JavascriptOriginal size="80" color='darkgreen' radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="lg" label="Proficient" className='mx-1' />
        </motion.div>
      </div>
         
    </motion.div>

  );
}
