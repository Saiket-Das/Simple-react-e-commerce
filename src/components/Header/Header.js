import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt="" />

                <div className='navItem'>

                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/order"}>Order</Link>
                    <Link to={"/review"}>Order Review</Link>
                    <Link to={"/inventory"}>Inventory</Link>



                    {/* <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory"> Inventory</a> */}
                </div>
            </nav>
        </div>
    );
};

export default Header;