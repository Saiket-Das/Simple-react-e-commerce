import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import googleImg from '../../images/google.png'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import PageTitle from '../Page Title/PageTitle';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        erroMsg
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            {/* Page TItle  */}
            <PageTitle title='Login'></PageTitle>

            <div>
                <h2 className='form-title'>LOGIN</h2>

                {/* INPUT FIELD  */}
                <form action="" onSubmit={handleUserSignIn}>

                    {/* EMAIL FIELD  */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" />
                    </div>

                    {/* PASSWORD FIELD  */}
                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>


                    <p className='error-msg'>{erroMsg?.message.slice(22, -2)}</p>
                    {
                        loading && <p className='loading-msg'>Loading...</p>
                    }


                    <br />
                    {/* SUBMIT FIELD  */}
                    <div className="input-group ">
                        <input className='form-submit' type="submit" value="LOGIN" required />
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