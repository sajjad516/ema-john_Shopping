import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Order</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/about">About</a>
            </div>
            </nav>
        </div>
    );
};

export default Header;