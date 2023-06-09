import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Gallery = () => {
    return (
        <div className='bg-base-300 rounded-xl mt-14 mb-8'>
            <div className='text-center p-3'>
                <h2 className='text-5xl mb-3 font-bold text-white'>Tor Toys Gallery</h2>
                <p className='text-base mb-0 font-semibold text-[#fdea00]'>We Make Your Children Happier <br />
                    With The Best Toys</p>
            </div>
            <div className='flex flex-wrap justify-center gap-4 py-8'>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/QP0ydWp/pexels-pixabay-35964.jpg" alt="Shoes" className="rounded-xl" />
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/F78FWj1/pexels-revac-film-s-photography-54278.jpg" alt="Shoes" className="rounded-xl" />
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/Jd2thS9/alex-zabavsky-WCQKa-C2ffjs-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/gzFH61H/pexels-nubia-navarro-nubikini-386009.jpg" alt="Shoes" className="rounded-xl" />
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/nmbCWWV/gabriel-vasiliu-O2-Kqx-JFa0c-Y-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/LpgjQ3n/amr-taha-Waf-VOq-Be-Wc8-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/1mjcrJQ/greg-roberts-YKLMd-Kka-YM-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/7bL7kST/mh-mehedi-F8is77x-Oj-Y-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                </div>
                <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
                    <img src="https://i.ibb.co/RQc8pdY/gabriel-vasiliu-Niu-BAomdr-T4-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;