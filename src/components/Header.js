import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header-upper-links header-upper mt-1py-3'>
                <div className="container xxl">
                    <div className="row py-3">
                        <div className="col-2 mt-3">
                            <NavLink to={'/'} className='text-dark'>Logo Goes here</NavLink>
                        </div>
                        <div className=" col-6 d-flex align-items-center justify-content-center w-75 ">
                            <NavLink to={'/about'} className="d-flex px-5 text-dark">About Me</NavLink>
                            <NavLink to={'/work'} className="d-flex px-5 text-dark">My Work</NavLink>
                            <NavLink to={'/contact'} className="d-flex px-5 text-dark">Contact</NavLink>
                        </div>
                        <div className="sticky">
                            <p className='top-name d-flex justify-content-center my-3 py-3'>Daniel Enrique Vinay Coyotzi - Fullstack Developer</p>
                        </div>

                    </div>



                </div>


            </header>



        </>
    )
}

export default Header