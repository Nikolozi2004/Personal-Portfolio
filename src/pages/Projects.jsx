import React from 'react'
import { Link } from 'react-router-dom'
export const Projects = () => {
    const projects = ['project1', 'project2', 'project3', 'project4', 'project5']

    
    return (
        <div>
            {projects.map((project) => (
                <Link key={project} to={`/projects/${project}`}>
                    {project}
                </Link>
            ))}
        </div>
    )
}
