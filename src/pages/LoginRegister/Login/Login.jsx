import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    // ------------------------------- Google Login ---------------------------- //

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="bg-base-300 rounded-lg mt-8 mb-8 ">
                <div className=" flex justify-center">

                    <div className="card w-full max-w-md shadow-3xl bg-base-100 p-3 mt-10 mb-10">
                        <form onSubmit={handleLogIn} className="card-body">
                            <h2 className='flex justify-center text-2xl font-bold text-white'>Welcome Back</h2>
                            <hr />
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
                                    <p className="text-red-500">{error}</p>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#fdea00] text-black font-bold">Sign In</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} className="btn btn-primary border-none bg-blue-600"><FaGoogle className='text-xl me-3'></FaGoogle> Sign In with Google</button>
                            </div>
                        </form>

                        <h6 className='text-sm text-center mb-2'>Don&apos;t have an account? <Link to='/register'><span className='underline text-[#fdea00]'>SignUp</span></Link></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;