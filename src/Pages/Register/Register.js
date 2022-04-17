import React from 'react';
import googleIcon from '../../images/google.png';
import githubIcon from '../../images/github.png';
import facebookIcon from '../../images/facebook.png';

const Register = () => {
    return (
        <div className='login py-5'>
            <div>
                <h2 className='text-center'>Register Please!</h2>
                <div>
                    <input type="name" name="name" id="" placeholder='Name' />
                </div>
                <div>
                    <input type="email" name="email" id="" placeholder='Email' />
                </div>
                <div>
                    <input type="password" name="Password" id="" placeholder='Password' />
                </div>
                <div>
                    <input className='mb-4' type="password" name="Password" id="" placeholder='Confirm Password' />
                </div>
                <button className='login-btn text-white w-100 d-block border-0 p-2 fw-bolder' type="submit">Register</button>
                <div>
                    <p className='text-center mt-2'>or sign in with</p>
                    <div className='icon-btn text-center'>
                        <button className=' border-0'> <img src={googleIcon} alt="google-icon" /> </button>
                        <button className=' border-0 mx-2'> <img src={githubIcon} alt="github-icon" /> </button>
                        <button className=' border-0'> <img src={facebookIcon} alt="facebook-icon" /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;