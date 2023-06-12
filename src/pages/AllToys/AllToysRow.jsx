import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ toy }) => {

    const { _id, name, quantity, seller, email, category, details, price, rating, photo } = toy;

    return (
        < tr className=''>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar flex items-center space-x-3 ">
                    <div className="rounded w-40 h-28">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-lg font-bold'>{name}</h2>
                        <p className='mt-1'>{details}</p>
                        <h5 className='badge badge-warning badge-sm font-semibold mt-2'>{category}</h5>
                    </div>
                </div>
            </td>

            <td className=''>
                <h2 className='text-base font-bold'>{seller}</h2>
                <p className='mt-1'>{email}</p>
            </td>
            <td className='text-base text-center'>${price}</td>
            <td className='text-base text-center'>{quantity}</td>
            <th>
                <Link to={`/toyDetails/${_id}`}>
                    <button className="btn btn-xs">Details</button>
                </Link>
            </th>
        </tr >
    );
};

export default MyToysRow;