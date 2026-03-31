import React from 'react';
import { NavLink } from 'react-router';
import { FaGithubAlt } from "react-icons/fa";
import logo from '../../assets/logo.png'; 

const Navbar = () => {
    const navItems = (
        <div className='flex flex-col font-bold lg:flex-row gap-4'>
        
        <NavLink className='hover:underline'>Home</NavLink>
        <NavLink className='hover:underline'>Apps</NavLink>
        <NavLink className='hover:underline'>Installation</NavLink>
        </div>
        
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {/*  */}
                            {navItems}
                        </ul>
                    </div>
                    <NavLink to={"/"} className="btn btn-ghost text-xl">
                        <img className='w-8' src={logo} alt="" />
                        <span className='font-bold text-blue-900'>MAS.IO</span>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {/*  */}
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-blue-900 text-white flex justify-between"> <FaGithubAlt /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;