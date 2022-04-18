import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { img, name, text, price } = service;

    return (
        <div className='service mb-2'>
            <img src={img} alt="service-img" />
            <h2 className='mt-3'> {name} </h2>
            <p> {text} </p>
            <h4 className='mb-3'>Price : $ {price} </h4>
            <button type='btn' className='btn btn-warning text-black fw-bolder px-4 py-2'> <Link className='text-decoration-none text-black' to='/checkout'>Check Out</Link> </button>
        </div>
    );
};

export default Service;