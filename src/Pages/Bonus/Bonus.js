import React from 'react';
import { Container } from 'react-bootstrap';
import './Bonus.css';
import bonusImage from '../../images/banner.jpg';

const Bonus = () => {
    return (
        <Container className='py-5 bonus'>
            <div>
                <img src={bonusImage} alt="bonus-img" />
            </div>
            <div>
                <p> <strong className='fs-2'>K</strong>eep away from people who try to belittle your ambitions Small people always do that but the really great. Friendly neighbour there that power. Architecture Theme Keep away from people who try to belittle your ambitions Small people always do that but the really great.</p>

                <p>who try to belittle your ambitions Small people always do that but the really great. Architecture Theme Friendly neighbour there that power.</p>
                <button className='btn btn-warning border-0 rounded-4 text-black fw-bolder px-3 py-2' type="submit">Read More</button>
            </div>
        </Container>
    );
};

export default Bonus;