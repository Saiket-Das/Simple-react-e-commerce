import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import googleImg from '../../images/google.png'


const SignUp = () => {
    return (
        <div className='signup-container'>
            <div>
                <h2 className='form-title'>SIGN UP</h2>

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

                    {/* CONFIRM PASSWORD FIELD  */}
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="password" id="" />
                    </div>

                    <br />
                    {/* SUBMIT FIELD  */}
                    <div className="input-group ">
                        <input className='form-submit' type="submit" value="SIGN UP" />
                    </div>
                </form>


                {/* CREATE NEW ACCOUNT  */}
                <p className='create-new-account'>Already have an account? <Link to='/login'>Login</Link></p>

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

export default SignUp;