import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import googleImg from '../../images/google.png'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LOGIN</h2>

                {/* INPUT FIELD  */}
                <form action="">

                    {/* EMAIL FIELD  */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" />
                    </div>

                    {/* PASSWORD FIELD  */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>

                    <br />
                    {/* SUBMIT FIELD  */}
                    <div className="input-group ">
                        <input className='form-submit' type="submit" value="LOGIN" />
                    </div>
                </form>


                {/* CREATE NEW ACCOUNT  */}
                <p className='create-new-account'>New to Ema-jhon? <Link to='/signup'>Create New Account</Link></p>

                <div className='or-hr'>
                    <hr />
                    or
                    <hr />
                </div>

                {/* GOOGLE LOGIN BUTTON  */}
                <button className="button">
                    <img className='google-img' src={googleImg} alt="" />
                    <p className='contiune-google'>Contiune with Google</p>
                </button>
            </div>

        </div >
    );
};

export default Login;