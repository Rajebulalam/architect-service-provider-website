import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container className='py-4 notFound-container mb-5'>
            <h1>Opps!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <p>The page you are looking for might have been removed</p>
            <p>had its name changed or is temporarily unavailable</p>
            <Link to="/">GO TO HOME PAGE</Link>
        </Container>
    );
};

export default NotFound;