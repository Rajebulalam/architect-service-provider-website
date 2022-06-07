import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark py-4'>
            <Container>
                <div className='top-footer pb-4'>
                    <div>
                        <h2 className='text-white fs-3 pb-4'>About Us</h2>
                        <p className='text-white'>I am an Architect. Provide the architect service in available price and providing the best services.</p>
                    </div>
                    <div>
                        <h2 className='text-white fs-3 pb-4'>Information</h2>
                        <p><Link className='text-white bottom' to='/'>Home</Link></p>
                        <p><Link className='text-white bottom' to='/'>Services</Link></p>
                        <p><Link className='text-white bottom' to='/'>Order</Link></p>
                        <p><Link className='text-white bottom' to='/'>Available</Link></p>
                    </div>
                    <div>
                        <h2 className='text-white fs-3 pb-4'>Help</h2>
                        <p><Link className='text-white bottom' to='/'>Help & FAQs</Link></p>
                        <p><Link className='text-white bottom' to='/'>Information</Link></p>
                        <p><Link className='text-white bottom' to='/'>Advice</Link></p>
                        <p><Link className='text-white bottom' to='/'>Details</Link></p>
                    </div>
                    <div>
                        <h2 className='text-white fs-3 pb-4'>Newsletter</h2>
                        <div>
                            <input className='p-2 w-100 mb-2' type="email" name="email" id="email" placeholder='Your Email' />
                            <div>
                                <button className='w-100 bg-white p-2 fw-bold' type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer pt-4 border-top'>
                    <p className='text-white'>Rajebul Alam Khokan</p>
                    <p className='text-white'>&copy; Copy right reserved 2022</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;