import React from 'react';
import { Link } from 'react-router-dom';
import logo from './NITKlogo.jpg';

export const Sitelogo = ({
    onClick
}) => {
    return(
        <Link to='/sign-up' className='navbar-logo' onClick={onClick}>
            <img src={logo} className="navbar-logo-img" alt='Logo' />
            NITK Connect
        </Link>
    )
};

export default Sitelogo;