import { motion } from 'framer-motion'
import ProjectSection from '../components/ProjectSection';

export const Projects = () => {

    return (
        <motion.div
            initial={{ y: '85%' }}
            animate={{ y: '0%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className='w-full h-auto relative flex flex-col items-center'>
            
            <div className="container mx-auto py-8 h-full flex flex-col items-center">
                <ProjectSection />
            </div>
        </motion.div>
    )
}
