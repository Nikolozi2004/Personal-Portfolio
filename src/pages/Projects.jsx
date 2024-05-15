import React from 'react'
import { motion } from 'framer-motion'
import ProjectSection from '../components/ProjectSection';

export const Projects = () => {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='w-full h-full relative'>
            
            <div className="container mx-auto py-8">
                <ProjectSection />
            </div>
        </motion.div>
    )
}
