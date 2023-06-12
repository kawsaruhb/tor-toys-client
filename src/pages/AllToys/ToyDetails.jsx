import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const toy = useLoaderData();
    const { _id, name, quantity, seller, email, category, details, price, rating, photo } = toy;


    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row lg:gap-24 text-white">
                    <img src={photo} className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex gap-1'>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            {/* <p className="mt-6">{details}</p> */}
                            <p className="mt-8 badge badge-warning badge-xs font-bold">{category}</p>
                        </div>
                        <p className="">Seller: {seller}</p>
                        <p className="">Seller Email: {email}</p>
                        <p className="">Price: ${price}</p>
                        <p className="">Quantity: {quantity}</p>
                        <div className="rating mt-1">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;