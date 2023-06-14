import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className='bg-white dark:bg-gray-900 flex justify-center g'>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div>
          <p className='text-sm font-medium text-blue-500 dark:text-blue-400'>
            404 error
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            We can’t find that page
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            <Link to='/'>
              <button className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'>
                Take me home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=' '>
        <img
          className='rounded-lg p-8'
          src='https://i.ibb.co/CPZS6g3/13315300-5203299.jpg'
        />
      </div>
    </section>
  );
};

export default NotFoundPage;
