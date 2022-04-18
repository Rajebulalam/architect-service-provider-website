import React, { useEffect, useState } from 'react';
import './Login.css';
import googleIcon from '../../images/google.png';
import githubIcon from '../../images/github.png';
import facebookIcon from '../../images/facebook.png';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    // Set Email, Password and Error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    // Set Email and Password by react firebase hooks
    const [
        signInWithEmailAndPassword,
        error,
        loading,
    ] = useSignInWithEmailAndPassword(auth);

    // Get User
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // Get Email
    const handleEmail = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    // Get Password
    const handlePassword = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    // Submit Form
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&gt;.&lt;;,]).{1,}$/.test(password)) {
            setErr('Password should be contain at lest 1 upper case, 1 lower case, 1 number, 1 special character and minimum 8 digit or more!');
            return;
        } else {
            await signInWithEmailAndPassword(email, password);
        }
    }

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    // Forget Password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const sendPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Reset your password");
        } else {
            toast("Please Set An Email");
        }
    }

    // Sign In With Google
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    // Sign in With Github
    const [signInWithGithub] = useSignInWithGithub(auth);

    return (
        <div className='login py-5'>
            <div className='py-3'>
                <h2 className='text-center'>Login Please!</h2>
                <form onSubmit={handleSubmit} >
                    <div>
                        <input onBlur={handleEmail} required type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <div>
                        <input onBlur={handlePassword} required type="password" name="Password" id="" placeholder='Password' />
                    </div>
                    <div className='p-0'>
                        <p className='text-danger'> {err} </p>
                        <p className='text-danger'> {error?.message} </p>
                        <p> {loading && 'Loading ...'} </p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                        <p onClick={sendPassword} className='text-center text-primary cursor-pointer m-0'>Forget Password?</p>
                        <Link className='text-decoration-none' to='/register'>Create an account</Link>
                    </div>
                    <button className='login-btn text-white w-100 d-block border-0 p-2 fw-bolder' type="submit">Login</button>
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

export default Login;