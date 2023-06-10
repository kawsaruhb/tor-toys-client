import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ?  "mx-2 p-3 font-bold text-black" : "mx-2 p-3 font-bold text-[#fdea00] "}          
        >
            {children}
            
        </NavLink>
    );
};

export default ActiveLink;