import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useContext } from 'react';
AOS.init();

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const CategoryToys = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    name,
    quantity,
    seller,
    email,
    category,
    details,
    price,
    rating,
    photo,
  } = toy;

  return (
    <div
      data-aos='fade-up'
      data-aos-anchor-placement='top-center'
      className='hero bg-base-300 rounded-lg mt-8 mb-8'
    >
      <div className='hero-content flex-col lg:flex-row lg:gap-6 py-12 text-white'>
        <img src={photo} className='w-80 rounded-lg shadow-2xl' />
        <div>
          <div className='flex gap-1'>
            <h1 className='text-3xl font-bold'>{name}</h1>
          </div>
          <div className='ms-1 mt-2'>
            {/* <p className='mt-1'>
              <span className='text-sm font-bold'>Seller:</span>{' '}
              <span className='text-sm'>{seller}</span>
            </p> */}
            {/* <p className='mt-1'>
              <span className='text-sm font-bold'>Seller Email:</span>{' '}
              <span className='text-sm'>{email}</span>
            </p> */}
            <p className='mt-1'>
              <span className='text-lg font-bold'>Price:</span>{' '}
              <span className='text-lg'>${price}</span>
            </p>
            {/* <p className='mt-1'>
              <span className='text-sm font-bold'>Quantity:</span>{' '}
              <span className='text-sm'>{quantity}</span>
            </p> */}
            <div className='flex gap-1 mt-1'>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              <span>{rating}</span>
            </div>
            {user ? (
              <Link to={`/toyDetails/${_id}`}>
                <button className='btn btn-xs bg-[#fdea00] text-black font-semibold mt-2'>
                  Details
                </button>
              </Link>
            ) : (
              <Link to='/login'>
                <button className='btn btn-xs bg-[#fdea00] text-black font-semibold mt-2'>
                  Details
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryToys;
