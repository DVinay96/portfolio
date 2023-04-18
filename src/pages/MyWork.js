import React from 'react'
import ProjectCard from '../components/ProjectCard'

const MyWork = () => {
    return (
        <div className="work-wrapper">
            <div className="container-xxl p-5">
                <h3 className='text-center'>Here you can find the projects I've worked in. Thanks to everyone who has trusted me. If you see something you like, hit me up.</h3>

                <div className="card-wrapper p-4">

                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />


                </div>

            </div>
        </div>
    )
}

export default MyWork