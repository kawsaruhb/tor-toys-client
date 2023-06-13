import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CustomerRatings from '../CustomerRatings/CustomerRatings';
import Gallery from '../Gallery/Gallery';
import PopularToys from '../PopularToys/PopularToys';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularToys></PopularToys>
      <Gallery></Gallery>
      <Category></Category>
      <CustomerRatings></CustomerRatings>
    </div>
  );
};

export default Home;
