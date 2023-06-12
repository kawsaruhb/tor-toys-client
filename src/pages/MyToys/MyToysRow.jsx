import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysRow = ({ toy, toys, setToys }) => {

    const { _id, name, quantity, seller, email, category, details, price, rating, photo } = toy;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // 

                fetch(`http://localhost:5000/addToy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(t => t._id !== _id);
                            setToys(remaining);
                        }
                    })

            }
        })
    }

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

            <td className='text-cente'>
                <h2 className='text-base font-bold'>{seller}</h2>
                <p className='mt-1'>{email}</p>
            </td>
            <td className='text-base text-center'>${price}</td>
            <td className='text-base text-center'>{quantity}</td>
            <th>
                <Link to={`/updateToy/${_id}`}>
                    <button className="btn btn-sm btn-circle mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" id="edit"><path fill="#b2c2db" d="M13.6568542,2.34314575 C14.4379028,3.12419433 14.4379028,4.39052429 13.6568542,5.17157288 L6.27039414,12.558033 C5.94999708,12.87843 5.54854738,13.105727 5.10896625,13.2156223 L2.81796695,13.7883721 C2.45177672,13.8799197 2.12008033,13.5482233 2.21162789,13.182033 L2.78437771,10.8910338 C2.894273,10.4514526 3.12156995,10.0500029 3.44196701,9.72960586 L10.8284271,2.34314575 C11.6094757,1.56209717 12.8758057,1.56209717 13.6568542,2.34314575 Z M10.1212441,4.46435931 L4.14907379,10.4367126 C3.95683556,10.6289509 3.82045738,10.8698207 3.75452021,11.1335694 L3.38388341,12.6161166 L4.86643062,12.2454798 C5.1301793,12.1795426 5.37104912,12.0431644 5.56328736,11.8509262 L11.5352441,5.87835931 L10.1212441,4.46435931 Z M11.5355339,3.05025253 L10.8282441,3.75735931 L12.2422441,5.17135931 L12.9497475,4.46446609 C13.3402718,4.0739418 13.3402718,3.44077682 12.9497475,3.05025253 C12.5592232,2.65972824 11.9260582,2.65972824 11.5355339,3.05025253 Z"></path></svg>
                    </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr >
    );
};

export default MyToysRow;