import React from 'react';
import Banner from '../Banner/Banner';
import CustomerRatings from '../CustomerRatings/CustomerRatings';
import PopularToys from '../PopularToys/PopularToys';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import CategoryToys from '../Category/CategoryToys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularToys></PopularToys>
            <Gallery></Gallery>
            <Category></Category>
            <CategoryToys></CategoryToys>
            <CustomerRatings></CustomerRatings>
            <h2 className='text-2xl'>This is Home page</h2>
        </div>
    );
};

export default Home;