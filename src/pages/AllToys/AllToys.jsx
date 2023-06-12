import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const toys = useLoaderData();

    return (
        <div className='mt-12 mb-8'>
            <h2 className="text-5xl text-center text-white font-bold mt-4 mb-8">All Toys</h2>

            <div className="overflow-x-auto bg-base-300 text-white rounded-lg p-8">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-100 text-lg'>
                        <tr>
                            <th></th>
                            <th>Toy</th>
                            {/* <th>Category</th> */}
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            toys.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;