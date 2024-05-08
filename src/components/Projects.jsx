import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Projects = () => {
    const projects = [1, 2, 3, 4, 5]

    
    return (
        <div>
            {projects.map((project) => (
                <Link key={project} to={`/projects/${project}`}>
                    {project}
                </Link>
            ))}
            <Outlet />
        </div>
    )
}
