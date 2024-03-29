import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import logo from '../../../assets/images/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const menuItems = <>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/appointment' >Appointment</Link></li>
        {/* <li><Link to='#' >About</Link></li> */}
        <a href="https://arefinreza.github.io/DocNet360/">Prescription  </a>
        <li><Link to='/' >   </Link></li>
        <a href="https://658c740cc5a8f91ef05c5bdb--jade-tiramisu-b233cd.netlify.app/">   Bmi </a>
        {
            user?.email ?
                <>
                    <li><Link to='/dashboard' >Dashboard</Link></li>
                    <li><Link to='#' >{user.displayName}</Link></li>
                    <li><button onClick={logOut} >Sign-Out</button></li></>
                :
                <>
                    <li><Link to='/login' >Login</Link></li>
                    <li><Link to='/signup' >Sign-Up</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}

                    </ul>
                </div>
                <img src={logo} className="lg:w-10 w-full rounded-lg shadow-2xl" />
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Docnet 360</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;