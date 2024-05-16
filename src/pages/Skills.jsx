import { Progress } from '@material-tailwind/react';
import { motion } from 'framer-motion'
import {
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  Html5Original,
  Css3Original,
  CsharpOriginal,
  MongodbOriginal,
  ExpressOriginal,
  NodejsOriginal,
  GitOriginal,
  DockerOriginal,
  VisualstudioOriginal,
  EslintOriginal,
  VscodeOriginal
} from 'devicons-react';

export const Skills = () => {


  return (

    <motion.div
      className='w-full relative flex flex-col lg:flex-row justify-evenly pt-6 max-w-screen-2xl'
      initial={{ y: '-100%', Blur: '4px'}}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: 'easeOut'}}>

      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Front-End</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <TypescriptOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <JavascriptOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <ReactOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <TailwindcssOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <Css3Original size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <Html5Original size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
      </div>



      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Back-End</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <CsharpOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <NodejsOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <MongodbOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <ExpressOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
      </div>
      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Tools</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <GitOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <DockerOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <VisualstudioOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <VscodeOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <EslintOriginal size="80" radius='3px' className='w-20 h-20' />
          <Progress color='pink' value={85} size="md" label="Proficient" className='mx-1' />
        </motion.div>
      </div>

    </motion.div>

  );
}
