import React from 'react';

const AddToy = () => {
    return (
        <div className="bg-base-300 text-white rounded-lg p-10 mt-4 mb-4">
            <div className='relative mb-8'>
                <img className='w-full h-[300px] rounded-lg' src="https://i.ibb.co/2Pk6468/21133745-2108-w023-n001-967-B-p1-967.jpg" alt="" />
                {/* <h2 className="absolute top-0 px-[527px] text-3xl text-black text-center bg- font-bold">Add A Toy</h2> */}
                {/* <p className='absolute top-20 right-48 px text-5xl text-black'>Only For Kids</p> */}
            </div>

            <form onSubmit>
                {/* form name and quantity row */}
                <div className="md:flex md:justify-center gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Toy Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form seller row */}
                <div className="md:flex md:justify-center gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Seller" name="seller" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Seller Email" name="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form category and details row */}
                <div className="md:flex md:justify-center gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form price and rating row */}
                <div className="md:flex md:justify-center gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form photo url row */}
                <div className="md:flex md:justify-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <input type="submit" value="Add Toy" className="btn btn-error text-black font-bold border-none mt-6 bg-[#fdea00] w-full" />
                </div>

            </form>
        </div>
    );
};

export default AddToy;