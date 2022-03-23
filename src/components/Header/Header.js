import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt="" />

                <div className='navItem'>
                    <a href="/order">Order</a>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory"> Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;