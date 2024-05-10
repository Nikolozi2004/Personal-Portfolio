import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export const Projects = () => {
    const projects = ['project1', 'project2', 'project3', 'project4', 'project5']


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div>
                {projects.map((project) => (
                    <Link key={project} to={`/projects/${project}`}>
                        {project}
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}
