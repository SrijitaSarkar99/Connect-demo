import React from 'react';
import { Link } from 'react-router-dom';

export const Sitelogo = ({
    onClick
}) => {
    return(
        <Link to='/sign-up' className='navbar-logo' onClick={onClick}>
            TYRO
            <div style={{padding: '5px'}}>
            </div><i className="far fa-map"></i>
        </Link>
    )
};

export default Sitelogo;