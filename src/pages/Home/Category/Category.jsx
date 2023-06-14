import React, { useEffect, useState } from 'react';
import CategoryToys from './CategoryToys';

const Category = () => {
  const [toys, setToys] = useState([]);
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch('http://localhost:5000/addToy');
      const data = await res.json();
      setAllToys(data);
      console.log(data);
    };
    fetchAPI();
  }, []);

  const handlerOnClick = (toy) => {
    const filterToys = allToys.filter((toys) => toys.category === toy);
    setToys(filterToys);
  };

  return (
    <div className='mt-16 mb-20'>
      <div className='text-center'>
        <h2 className='text-5xl mb-3 font-bold text-white'>Shop by Category</h2>
        <p className='text-base mb-8 font-semibold text-[#fdea00]'>
          EXPLORE OUR RIDE
        </p>
      </div>
      <div className='tabs tabs-boxed flex justify-center gap-8'>
        <a
          onClick={() => handlerOnClick('Sports Car')}
          className='tab btn btn-outline btn-warning'
        >
          Sports Car
        </a>
        <a
          onClick={() => handlerOnClick('Mini Van')}
          className='tab btn btn-outline btn-warning'
        >
          Mini Van
        </a>
        <a
          onClick={() => handlerOnClick('Truck')}
          className='tab btn btn-outline btn-warning'
        >
          Road Truck
        </a>
      </div>
      {/* <button
        className='btn btn-active btn-primary'
        onClick={() => handlerOnClick('Sports Car')}
      >
        Button{' '}
      </button>
      <button
        className='btn btn-active btn-primary'
        onClick={() => handlerOnClick('Mini Van')}
      >
        Button
      </button>
      <button
        className='btn btn-active btn-primary'
        onClick={() => handlerOnClick('Truck')}
      >
        Button
      </button> */}
      <div className='flex justify-center gap-8 mt-'>
        {toys.slice(0, 2).map((toy) => (
          <>
            <CategoryToys key={toy._id} toy={toy}></CategoryToys>
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;
