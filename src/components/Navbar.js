import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='NavLink'>
        <h2>Youtube vers .mp4</h2>
        <ul>
            <NavLink to="/download">
            <li>Télécharger</li>
            </NavLink>
            <NavLink to="/help">
            <li>Aide</li>
            </NavLink>
        </ul>
    </nav>
    );
};

export default Navbar;