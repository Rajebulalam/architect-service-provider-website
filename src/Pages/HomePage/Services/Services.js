import React from 'react';
import './Services.css';
import { Container } from 'react-bootstrap';
import UseService from '../../../Hooks/UseService';
import Service from '../Service/Service';

const Services = () => {

    const [service, setService] = UseService();

    return (
        <Container className='services-container'>
            {
                service.map(service => <Service
                    service={service}
                    key={service.id}
                ></Service>)
            }
        </Container>
    );
};

export default Services;