import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {

    const navItems = <>
        <li className='text-lg text-[#fdea00]'> <ActiveLink to='/'>Home</ActiveLink> </li>
        <li className='text-lg text-[#fdea00]'> <ActiveLink to='/allToys'>All Toys</ActiveLink> </li>
        <li className='text-lg text-[#fdea00]'> <ActiveLink to='/myToys'>My Toys</ActiveLink> </li>
        <li className='text-lg text-[#fdea00]'> <ActiveLink to='/addToy'>Add A Toy</ActiveLink> </li>
        <li className='text-lg text-[#fdea00]'> <ActiveLink to='/blogs'>Blogs</ActiveLink> </li>

    </>

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 h-24 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-24' src='https://i.ibb.co/3zfTFGw/tor-toys-1-2-1.png' alt="" />
                    {/* <h2>Tor - Toys</h2> */}
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal border-solid border-2 border-[#fdea00] rounded-full px-1 mr-40">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="w-12 relative group">
                        <img className='rounded-full' src="https://i.pravatar.cc/350" />
                        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-11 text-white">{user.displayName}</div>
                    </div>
                }
                {
                    user ? <button onClick={handleLogOut} className="btn btn-active bg-[#fdea00] text-black rounded-lg font-bold mx-3 px-6 py-0 border-none">Sign Out</button> :
                        <Link to='/login'><button className="btn btn-active bg-black text-white  font-bold px-6 py-0 rounded-lg">Sign In</button></Link>
                }
                {!user ?
                    <Link to='/register'><button className="btn btn-active bg-[#fdea00] text-black rounded-lg font-bold mx-3 px-6 py-0 border-none">Sign Up</button></Link> : <h6></h6>
                }
            </div>
        </div>
    );
};

export default Navbar;