import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <div>
            <div className="bg-base-300 rounded-lg mt-8 mb-8 ">
                <div className=" flex justify-center">

                    <div className="card w-full max-w-md shadow-3xl bg-base-100 p-3 mt-10 mb-10">
                        <form onSubmit className="card-body">
                            <h2 className='flex justify-center text-2xl font-bold text-white'>Create Account</h2>
                            <hr />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="text-red-500">{ }</p>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#fdea00] text-black font-bold">Sign Up</button>
                            </div>
                        </form>

                        <h6 className='text-sm text-center mb-2'>Already have an account? <Link to='/login'><span className='underline text-[#fdea00]'>LogIn</span></Link></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;