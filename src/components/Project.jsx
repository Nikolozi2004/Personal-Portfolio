import React from 'react'
import { useParams } from 'react-router-dom'

export const Project = () => {
    const params = useParams();
    return (
        <div>Project {params.projectId}
        
        hello?
        
        
        
        </div>
    )
}
