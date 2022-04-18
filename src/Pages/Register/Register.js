import React, { useState } from 'react';
import googleIcon from '../../images/google.png';
import githubIcon from '../../images/github.png';
import facebookIcon from '../../images/facebook.png';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    // Set Email, Password, Confirm Password, Error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('');

    // Create user by react firebase hooks
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // Get User
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // Take email from user
    const handleEmail = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    // Take password from user
    const handlePassword = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    // Take confirm password from user
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
        console.log(event.target.value);
    }

    // Submit form
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&gt;.&lt;;,]).{1,}$/.test(password)) {
            setErr('Password should be contain at lest 1 upper case, 1 lower case, 1 number, 1 special character and minimum 8 digit or more!')
            return;
        } else {
            if (password === confirmPassword) {
                await createUserWithEmailAndPassword(email, password)
                toast('Sent A Verification Email');
            } else {
                setErr('Your password does not match!')
            }
        }
    }

    // If user after register take him into home page
    if (user) {
        navigate('/home');
    }

    // Sign In With Google
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    // Sign in With Github
    const [signInWithGithub] = useSignInWithGithub(auth);

    return (
        <div className='login py-5'>
            <div>
                <h2 className='text-center'>Register Please!</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input required type="name" name="name" id="" placeholder='Name' />
                    </div>
                    <div>
                        <input onBlur={handleEmail} required type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <div>
                        <input onBlur={handlePassword} required type="password" name="Password" id="" placeholder='Password' />
                    </div>
                    <div>
                        <input onBlur={handleConfirmPassword} required type="password" name="Password" id="" placeholder='Confirm Password' />
                        <p className='text-danger'> {err} </p>
                        <p className='text-danger'> {error?.message} </p>
                        <p> {loading && 'Loading ...'} </p>
                    </div>
                    <button className='login-btn text-white w-100 d-block border-0 p-2 fw-bolder' type="submit">Register</button>
                    <div>
                        <p className='text-center mt-2'>or sign in with</p>
                        <div className='icon-btn text-center'>
                            <button onClick={() => signInWithGoogle()} className=' border-0'> <img src={googleIcon} alt="google-icon" /> </button>
                            <button onClick={() => signInWithGithub()} className=' border-0 mx-2'> <img src={githubIcon} alt="github-icon" /> </button>
                            <button className=' border-0'> <img src={facebookIcon} alt="facebook-icon" /> </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;