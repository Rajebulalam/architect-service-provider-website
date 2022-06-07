import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    // To get user
    const [user] = useAuthState(auth);

    // log out after clicking Log out button
    const logOut = async () => {
        await signOut(auth);
        toast('Log out success fully!!');
    }

    return (
        <Navbar className='py-3' bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className='fw-bold fs-3' as={Link} to='/' >Architect's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bolder">
                        <Nav.Link className='px-3 text-white' as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link className='px-3 text-white' as={Link} to='/checkout'>Checkout</Nav.Link>
                        <Nav.Link className='px-3 text-white' as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link className='px-3 text-white' as={Link} to='/about'>About Me</Nav.Link>
                        <Nav.Link className='px-3 text-white' as={Link} to='/about'>About Me</Nav.Link>
                        <Nav.Link className='px-3 bg-white btn mx-2 mb-2 btn-primary  text-dark' as={Link} to='/register'>Register</Nav.Link>
                        {
                            user ? <Nav.Link onClick={logOut} className='px-3 bg-white btn btn-primary  text-dark mx-2 mb-2' as={Link} to='/login'>Log out</Nav.Link> : <Nav.Link className='px-3 bg-white btn btn-primary  text-dark mx-2 mb-2' as={Link} to='/login'>Login</Nav.Link>
                        }
                        <ToastContainer />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;