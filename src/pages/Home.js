import React from 'react'
import Marquee from 'react-fast-marquee'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 pb-5">
                <div className="container-xxl intro">
                    <div className="row d-flex justify-content-center align-items-center py-5 ps-5">
                        <div className=" image-wrapper col-4 d-flex justify-content-center px-5"><img src={require('../images/main.JPG')} alt="self" className='self-picture border border-dark' /></div>
                        <div className="col-6 ps-5">
                            <p className='text-start'>Hello! <br />
                                My name is Daniel Vinay. I'm a FullStack software developer & freelance web developer located in Puebla, México. <br />
                                Currently freelancing and creating a restaurant I'm always down for new projects, new experiences and pushing myself to learn new things. <br />
                                My freelance web development roots are in MERN Stack which I started at UTEL in 2022. Since then, I fell in love with & have been primarily using React in web applications.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5 d-flex flex-column justify-content-between">
                            <p className='d-flex justify-content-center'>If you want to know a little more about me:</p>
                            <NavLink to={'/about'} className='d-flex justify-content-center text-dark'>   <button type="button" class="btn btn-outline-dark"> Click this button</button> </NavLink>
                        </div>
                        <div className="col-5 d-flex flex-column justify-content-center">
                            <p className='d-flex justify-content-center'>If you want to check out my awesome sneaker blog:</p>
                            <NavLink className='d-flex justify-content-center text-dark'>   <button type="button" class="btn btn-outline-dark"> Click this other button</button> </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <h4 className='m-5'>My most recent project:</h4>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 project-image w-25">Project image goes here:</div>
                        <div className="col-6 project-description w-74">This project is an e-commerce web application built with the MERN (MongoDB, Express, React, Node.js) stack and Bootstrap 5. It allows users to browse products, add items to a cart, checkout, and make payments securely. The backend is built with Node.js and Express, and it uses MongoDB as the database. The frontend is built with React and Bootstrap 5, and it features responsive design, authentication, and integration with payment gateways. This app demonstrates my ability to build a full-stack web application using modern technologies.</div>
                    </div>
                </div>
            </section>
            <section className='marque-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../images/javascript.jpg')} alt='javascript' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../images/react.png')} alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../images/node.png')} alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../images/mongo.png')} alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../images/express.png')} alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../images/bootstrap.png')} alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home