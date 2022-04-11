import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');



    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleYourAddress = event => {
        setAddress(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, address, email, phone }
    }







    return (
        <div className='signup-container'>
            <div>
                <h2 className='form-title'>SIGN UP</h2>

                {/* INPUT FIELD  */}
                <form action="" onSubmit={handleCreateUser}>

                    {/* NAME FIELD  */}
                    <div className="input-group">
                        <label htmlFor="name">Your name</label>
                        <input onBlur={handleNameBlur} type="text" name="" id="" required />
                    </div>

                    {/* EMAIL FIELD  */}
                    <div className="input-group">
                        <label htmlFor="name">Your Email</label>
                        <input value={user?.email} readOnly type="text" name="" id="" required />
                    </div>

                    {/* ADDRESS FIELD  */}
                    <div className="input-group">
                        <label htmlFor="Address">Your address</label>
                        <input onBlur={handleYourAddress
                        } type="text" name="adress" id="" required />
                    </div>

                    {/* NUMBER FIELD  */}
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handleConfirmPasswordBlur} type="text" name="phone" id="" required />
                    </div>


                    {/* <p style={{ color: 'red' }}> {hookErro}</p> */}
                    <br />
                    {/* SUBMIT FIELD  */}
                    <div className="input-group ">
                        <input className='form-submit' type="submit" value="Add Shipping" required />
                    </div>
                </form>


                {/* CREATE NEW ACCOUNT  */}
                {/* <p className='create-new-account'>Already have an account? <Link to='/login'>Login</Link></p> */}




            </div>

        </div >
    );
};
export default Shipment;