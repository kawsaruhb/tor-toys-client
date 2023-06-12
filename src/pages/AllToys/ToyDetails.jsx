import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {

    const toy = useLoaderData();
    const { _id, name, quantity, seller, email, category, details, price, rating, photo } = toy;


    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row lg:gap-24 text-whit">
                    <img src={photo} className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex gap-1'>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            {/* <p className="mt-6">{details}</p> */}
                            <p className="mt-8 badge badge-warning badge-xs font-bold">{category}</p>
                        </div>
                        <div className='ms-1 mt-2'>
                            <p className="mt-1"><span className='text-lg font-bold'>Seller:</span> {seller}</p>
                            <p className="mt-1"><span className='text-lg font-bold'>Seller Email:</span> {email}</p>
                            <p className="mt-1"><span className='text-lg font-bold'>Price:</span> ${price}</p>
                            <p className="mt-1"><span className='text-lg font-bold'>Quantity:</span> {quantity}</p>

                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;