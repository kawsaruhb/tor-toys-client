import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyToys = () => {

    const toy = useLoaderData();
    const { _id, name, quantity, seller, email, category, details, price, rating, photo } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updatedToy = { name, quantity, seller, email, category, details, price, rating, photo };
        console.log(updatedToy);

        fetch(`http://localhost:5000/addToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }


    return (
        <div className="bg-base-300 text-white rounded-lg p-10 mt-4 mb-4">
            <div className='relative mb-8'>
                <img className='w-full h-[300px] rounded-lg' src="https://i.ibb.co/2Pk6468/21133745-2108-w023-n001-967-B-p1-967.jpg" alt="" />
                {/* <h2 className="absolute top-0 px-[527px] text-3xl text-black text-center bg- font-bold">Add A Toy</h2> */}
                {/* <p className='absolute top-20 right-48 px text-5xl text-black'>Only For Kids</p> */}
            </div>

            <form onSubmit={handleUpdateToy}>
                {/* form name and quantity row */}
                <div className="md:flex md:justify-center gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Toy Name" defaultValue={name} name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Available Quantity" defaultValue={quantity} name="quantity" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Seller" defaultValue={seller} name="seller" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Seller Email" defaultValue={email} name="email" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Category" defaultValue={category} name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Details" defaultValue={details} name="details" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Price" defaultValue={price} name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Rating" defaultValue={rating} name="rating" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Enter Photo URL" defaultValue={photo} name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <input type="submit" value="Update Toy" className="btn btn-error text-black font-bold border-none mt-6 bg-[#fdea00] w-full" />
                </div>

            </form>
        </div>
    );
};

export default UpdateMyToys;