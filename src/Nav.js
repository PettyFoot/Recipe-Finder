
import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function Navigation(){
    return(
        <nav className='navigation'>
            <ul className='nav-links'>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to="/shop">
                <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}


export default Navigation;