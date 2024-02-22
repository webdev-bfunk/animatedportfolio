import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Projects } from '@/lib/constants'

const MyProjectsPage = () => {
  return (
    <div style={{ backgroundImage: "url(/mountains.jpg)"}} className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
        <div className='grid grid-cols-1  md:grid-cols-2 gap-4 mb-5'>
            {Projects.map(((project, index) => (
              <ProjectCard key={index} title={project.title} text={project.text} image={project.src} />
            )))}
        </div>
    </div>
  )
}

export default MyProjectsPage