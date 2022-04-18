import React from 'react';
import './checkout.css';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {


    // Submit Information
    const handleSubmit = event => {
        event.preventDefault();
        toast("Thank you for the booking.");
    }

    return (
        <Container className='py-5'>
            <h2 className='text-center pb-3'>Welcome to Checkout</h2>
            <form onSubmit={handleSubmit} className='bg-dark width py-5 px-3'>
                <input className='mb-3 w-100 border-0 rounded p-2' required type="text" name="name" id="name" placeholder='Your Name' />
                <input className='mb-3 w-100 border-0 rounded p-2' required type="email" name="email" id="email" placeholder='Your Email' />
                <input className='mb-3 w-100 border-0 rounded p-2' required type="text" name="phone" id="phone" placeholder='Phone Number' />
                <input className='mb-3 w-100 border-0 rounded p-2' required type="text" name="country" id="country" placeholder='Country' />
                <input className='mb-3 w-100 border-0 rounded p-2' required type="text" name="District" id="District" placeholder='District' />
                <input className='mb-3 w-100 border-0 rounded p-2' required type="text" placeholder='Zip Code' />
                <div className='text-center'>
                    <button className='border-0 btn bg-white px-4 py-2 mt-2 fw-bolder' type="submit">Submit</button>
                </div>
            </form>
        </Container>
    );
};

export default Checkout;