import React from 'react';
import './Login.css';
import googleIcon from '../../images/google.png';
import githubIcon from '../../images/github.png';
import facebookIcon from '../../images/facebook.png';

const Login = () => {
    return (
        <div className='login py-5'>
            <div>
                <h2 className='text-center'>Login Please!</h2>
                <div>
                    <input required type="email" name="email" id="" placeholder='Email' />
                </div>
                <div>
                    <input required type="password" name="Password" id="" placeholder='Password' />
                </div>
                <p className='text-center p-3 text-primary cursor-pointer'>Forget Password</p>
                <button className='login-btn text-white w-100 d-block border-0 p-2 fw-bolder' type="submit">Login</button>
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

export default Login;