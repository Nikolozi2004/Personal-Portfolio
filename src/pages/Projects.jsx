import { motion } from 'framer-motion'
import ProjectSection from '../components/ProjectSection';

export const Projects = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='w-full h-auto relative flex flex-col items-center'>
            
            <div className="container mx-auto py-8 h-full flex flex-col items-center">
                <ProjectSection />
            </div>
        </motion.div>
    )
}
