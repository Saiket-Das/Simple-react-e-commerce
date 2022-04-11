import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    };


    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt="" />

                <div className='navItem'>

                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/order"}>Order</Link>
                    <Link to={"/inventory"}>Inventory</Link>

                    {
                        user
                            ?
                            <button onClick={handleSignOut}> Sign out</button>
                            :
                            <Link to={"/login"}>Login</Link>
                    }

                </div>
            </nav >
        </div >
    );
};

export default Header;