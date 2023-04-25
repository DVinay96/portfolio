import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const About = () => {


    return (
        <>
            <section className="about-wrapper p-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="about-me">
                            <h3 className='text-center'>Thanks for taking the time to get to know me</h3>
                            <p className='my-description p-5 text-center'>As you already know, my name is Daniel and I'm a FullStack Developer, but theres more to me. </p>
                            <p>Here are some of my interests and hobbies at the moment, I'll update this from time to time or if i have a new obsession.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='hobbies-wrapper '>
                <div className="contanier-xxl ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-2  d-flex justify-content-center pb-5">
                            <ul className='hobbies-table pb-5'>
                                <li className='p-3 hvr-box-shadow-inset'> <NavLink className='text-dark' to={'/about/gaming'}>Gaming</NavLink></li>
                                <li className='p-3 hvr-box-shadow-inset'> <NavLink className='text-dark' to={'/about/music'}>Music</NavLink></li>
                                <li className='p-3 hvr-box-shadow-inset'> <NavLink className='text-dark' to={'/about/food'}>Food</NavLink></li>
                                <li className='p-3 hvr-box-shadow-inset'> <NavLink className='text-dark' to={'/about/sneakers'}>Sneakers</NavLink></li>
                                <li className='p-3 hvr-box-shadow-inset'> <NavLink className='text-dark' to={'/about/coding'}>Coding</NavLink></li>

                            </ul>

                        </div>
                        <div className="col-6">
                            <div className="p-3"><Outlet /></div>
                        </div>



                    </div>
                </div>

            </section>
        </>

    )
}

export default About