import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header-upper-links py-2'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4">
                        <NavLink to={'/'} className='logo'>Logo Goes here</NavLink>
                    </div>
                    <div className="col-12 col-md-8">
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <NavLink to={'/about'} className="nav-link">About Me</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/work'} className="nav-link">My Work</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'} className="nav-link">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="sticky">
                    <p className='top-name '>Daniel Enrique Vinay Coyotzi - Fullstack Developer</p>
                </div>
            </div>
        </header>
    )
}

export default Header;