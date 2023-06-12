import React from 'react';
import Banner from '../Banner/Banner';
import CustomerRatings from '../CustomerRatings/CustomerRatings';
import PopularToys from '../PopularToys/PopularToys';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularToys></PopularToys>
            <Gallery></Gallery>
            <CustomerRatings></CustomerRatings>
        </div>
    );
};

export default Home;