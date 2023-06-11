import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyToysRow from './MyToysRow';

const MyToys = () => {

    const toys = useLoaderData();

    return (
        <div>
            <h2 className="text-2xl text-center mt-4 mb-8">My Toys</h2>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-300 text-base'>
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
                            toys.map(toy => <MyToysRow
                                key={toy._id}
                                toy={toy}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;