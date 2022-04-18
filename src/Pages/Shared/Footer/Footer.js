import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark py-4'>
            <Container>
                <div className='footer'>
                    <p className='text-white'>Rajebul Alam Khokan</p>
                    <p className='text-white'>&copy; Copy right reserved 2022</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;