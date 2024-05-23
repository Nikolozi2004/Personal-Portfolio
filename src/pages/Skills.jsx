import { Progress, Typography } from '@material-tailwind/react';
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
  VscodeOriginal,
  VitejsOriginal,
  PostmanOriginal,
} from 'devicons-react';

export const Skills = () => {


  return (

    <motion.div
      className='w-full relative flex flex-col lg:flex-row justify-evenly pt-6 max-w-screen-2xl'
      initial={{ y: '-100%', Blur: '4px' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: 'easeOut' }}>

      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Front-End</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <TypescriptOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
                {"<TypeScript/>"}
              </Typography>
              <Typography color="white" variant="h6">
                30%
              </Typography>
            </div>
            <Progress color='blue' value={30} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <JavascriptOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<JavaScript/>"}
              </Typography>
              <Typography color="white" variant="h6">
                60%
              </Typography>
            </div>
            <Progress color='yellow' value={60} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <ReactOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<React/>"}
              </Typography>
              <Typography color="white" variant="h6">
                60%
              </Typography>
            </div>
            <Progress color='blue' value={60} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <TailwindcssOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Tailwind CSS/>"}
              </Typography>
              <Typography color="white" variant="h6">
                80%
              </Typography>
            </div>
            <Progress color='blue' value={80} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <Css3Original size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<CSS/>"}
              </Typography>
              <Typography color="white" variant="h6">
                80%
              </Typography>
            </div>
            <Progress color='blue' value={80} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <Html5Original size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<HTML5/>"}
              </Typography>
              <Typography color="white" variant="h6">
                95%
              </Typography>
            </div>
            <Progress color='orange' value={95} size="md" />
          </div>
        </motion.div>
      </div>



      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Back-End</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <CsharpOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<C#/>"}
              </Typography>
              <Typography color="white" variant="h6">
                20%
              </Typography>
            </div>
            <Progress color='purple' value={25} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <NodejsOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Node JS/>"}
              </Typography>
              <Typography color="white" variant="h6">
                60%
              </Typography>
            </div>
            <Progress color='green' value={60} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <MongodbOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<MongoDB/>"}
              </Typography>
              <Typography color="white" variant="h6">
                45%
              </Typography>
            </div>
            <Progress color='green' value={45} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <ExpressOriginal size="80" radius='3px' className='w-20 h-20 fill-white' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Express JS/>"}
              </Typography>
              <Typography color="white" variant="h6">
                40%
              </Typography>
            </div>
            <Progress color='green' value={40} size="md" />
          </div>
        </motion.div>
      </div>
      <div className='h-full w-full lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0'>
        <h1 className='mb-4 font-sans text-xl text-white'>Tools</h1>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <GitOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Git/>"}
              </Typography>
              <Typography color="white" variant="h6">
                65%
              </Typography>
            </div>
            <Progress color='orange' value={65} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <DockerOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Docker/>"}
              </Typography>
              <Typography color="white" variant="h6">
                10%
              </Typography>
            </div>
            <Progress color='blue' value={10} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <VisualstudioOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Visual Studio/>"}
              </Typography>
              <Typography color="white" variant="h6">
                70%
              </Typography>
            </div>
            <Progress color='purple' value={70} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <VscodeOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Visual Studio Code/>"}
              </Typography>
              <Typography color="white" variant="h6">
                70%
              </Typography>
            </div>
            <Progress color='blue' value={70} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <PostmanOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Postman/>"}
              </Typography>
              <Typography color="white" variant="h6">
                70%
              </Typography>
            </div>
            <Progress color='blue' value={70} size="md" />
          </div>
        </motion.div>
        <motion.div
          className='flex justify-between items-center w-full lg:w-2/3 mb-6 h-16 lg-max:w-11/12'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}>
          <VitejsOriginal size="80" radius='3px' className='w-20 h-20' />
          <div className='w-full ml-3'>
            <div className='mb-2 flex items-center justify-between gap-4'>
              <Typography color="white" variant="h6">
              {"<Vite/>"}
              </Typography>
              <Typography color="white" variant="h6">
                75%
              </Typography>
            </div>
            <Progress color='yellow' value={75} size="md" />
          </div>
        </motion.div>

      </div>

    </motion.div>

  );
}
