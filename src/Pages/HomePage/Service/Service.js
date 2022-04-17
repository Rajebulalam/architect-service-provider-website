import React from 'react';
import './Service.css';

const Service = ({ service }) => {

    const { img, name, text, price } = service;

    return (
        <div className='service'>
            <img src={img} alt="service-img" />
            <h2 className='mt-3'> {name} </h2>
            <p> {text} </p>
            <h4 className='mb-3'>Price : $ {price} </h4>
            <button type='btn' className='btn btn-warning text-black fw-bolder px-5 py-3'>Check Out</button>
        </div>
    );
};

export default Service;