import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div  className='bg-dark py-4 mt-5'>
            <Container>
                <Row>
                    <Col>
                        <p className='text-white'>Rajebul Alam Khokan</p>
                    </Col>
                    <Col>
                        <p className='text-white text-end'>&copy; Copy right reserved 2022</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;