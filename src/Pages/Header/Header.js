import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='py-3' bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold fs-3' as={Link} to = '/' >Architect's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bolder">
                        <Nav.Link className='px-3' as={Link} to = '/'>Home</Nav.Link>
                        <Nav.Link className='px-3 btn mx-2 mb-2 btn-primary  text-white' as={Link} to ='/register'>Register</Nav.Link> 
                        <Nav.Link className='px-3 btn btn-primary  text-white mx-2 mb-2' as={Link} to= '/login'>Login</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;