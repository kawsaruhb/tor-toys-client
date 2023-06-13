import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  // console.log(user);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch('http://localhost:5000/addToy');
      const data = await res.json();

      const filterMyToys = data.filter(
        (myToys) => myToys?.email === user?.email
      );
      setToys(filterMyToys);
    };
    fetchAPI();
  }, [user?.email]);

  return (
    <div className='mt-12 mb-8'>
      <h2 className='text-5xl text-center text-white font-bold mt-4 mb-8'>
        My Toys
      </h2>

      <div className='overflow-x-auto bg-base-300 text-white rounded-lg p-8'>
        <table className='table'>
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
            {toys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                toys={toys}
                setToys={setToys}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
