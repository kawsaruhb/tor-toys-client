import React from 'react';

const CustomerRatings = () => {
  return (
    <div className='mt-14 mb-32'>
      <div className='text-center'>
        <h2 className='text-5xl mb-3 font-bold text-white'>What They Say</h2>
        <p className='text-base mb-10 font-semibold text-[#fdea00]'>
          CUSTOMER TESTIMONIALS
        </p>
      </div>
      <div className='flex justify-center gap-8'>
        <div className='card w-[550px] bg-base-300 shadow-xl p-8 px-10'>
          <div className='flex'>
            <div className='avatar'>
              <div className='w-24 rounded-full'>
                <img src='https://i.pravatar.cc/350' />
              </div>
            </div>
            <div className='ms-3 mt-4'>
              <h2 className='card-title text-white'>John Doe</h2>
              <div className='rating mt-1'>
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                  checked
                />
              </div>
            </div>
          </div>
          <p className='mt-2 text-white'>
            I am always impressed by the wide range of toys this store has to
            offer. It is my go-to for all things playtime! The customer service
            at this toy shop is exceptional. They went above and beyond to help
            me find the perfect toy.
          </p>
        </div>
        <div className='card w-[550px] bg-base-300 shadow-xl p-8 px-10'>
          <div className='flex'>
            <div className='avatar'>
              <div className='w-24 rounded-full'>
                <img src='https://i.pravatar.cc/350' />
              </div>
            </div>
            <div className='ms-3 mt-4'>
              <h2 className='card-title text-white'>John Doe</h2>
              <div className='rating mt-1'>
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                  checked
                />
              </div>
            </div>
          </div>
          <p className='mt-2 text-white'>
            The customer service at this toy shop is exceptional. They went
            above and beyond to help me find the perfect toy. appreciate the
            focus on sustainable and eco-friendly toys at this shop. It is so
            important for our kids
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRatings;
