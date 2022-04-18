import React from 'react';
import Bonus from '../../Bonus/Bonus';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            <Services></Services>
            <Bonus></Bonus>
        </div>
    );
};

export default Home;