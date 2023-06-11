import React from 'react';

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
                <div className="avatar flex items-center space-x-3">
                    <div className="rounded w-40 h-28">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-base font-bold'>{name}</h2>
                        <p className='mt-1'>{details}</p>
                        <h5 className='badge badge-warning badge-sm font-semibold mt-2'>{category}</h5>
                    </div>
                </div>
            </td>
           
            <td>
                {seller} <br />
                {email}
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr >
    );
};

export default MyToysRow;