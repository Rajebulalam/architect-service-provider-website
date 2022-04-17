import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner d-flex text-center justify-content-center align-items-center position-relative p-5 mb-5'>
            <Container className='position-absolute top-50'>
                <h2 className='text-white fw-bold fs-2'>To Get Exceptional Design and Planning!!</h2>
                <p className='m-0 fs-5 fw-normal text-white'>When you need to comport to make an eye catching and an exceptional design</p>
                <p className='text-white fs-5'>Then you come to the right place!!</p>
                <button className='btn border-0 btn-warning py-3 px-5 fw-bolder radius'> <Link className='text-decoration-none text-black ' to = '/login'>Get Started</Link> </button>
            </Container>
        </div>
    );
};

export default Banner;