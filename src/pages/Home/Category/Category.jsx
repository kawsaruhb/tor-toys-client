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
    // console.log(filterSportsCar);
  };

  return (
    <div>
      <button
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
      </button>
      {toys.map((toy) => (
        <>
          <CategoryToys key={toy._id} toy={toy}></CategoryToys>
        </>
      ))}
    </div>
  );
};

export default Category;
