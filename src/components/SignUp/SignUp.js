import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import googleImg from '../../images/google.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import PageTitle from '../Page Title/PageTitle';



const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }


    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Yout password did not match!')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 digits.');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }







    return (
        <div className='signup-container'>

            {/* Page TItle  */}
            <PageTitle title='Sign up'></PageTitle>

            <div>
                <h2 className='form-title'>SIGN UP</h2>

                {/* INPUT FIELD  */}
                <form action="" onSubmit={handleCreateUser}>

                    {/* EMAIL FIELD  */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>

                    {/* PASSWORD FIELD  */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>

                    {/* CONFIRM PASSWORD FIELD  */}
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                        <p className='error-msg' style={{ color: 'red' }}> {error}</p>

                    </div>


                    {/* <p style={{ color: 'red' }}> {hookErro}</p> */}
                    <br />
                    {/* SUBMIT FIELD  */}
                    <div className="input-group ">
                        <input className='form-submit' type="submit" value="SIGN UP" required />
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