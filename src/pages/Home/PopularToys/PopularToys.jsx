import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const PopularToys = () => {
    return (
        <div className='mt-8 mb-8'>
            <div className='text-center'>
                <h2 className='text-5xl mb-3 font-bold text-white'>Customer Loves</h2>
                <p className='text-base mb-10 font-semibold text-[#fdea00]'>POPULAR PRODUCTS</p>
            </div>
            <div className='flex justify-center gap-4'>
                <div data-aos="flip-left" className="card card-compact w-80 bg-base-300 rounded-xl shadow-xl">
                    <figure><img src="https://i.ibb.co/LZgFPP1/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Rosso Corsa</h2>
                    </div>
                </div>
                <div data-aos="flip-left" className="card card-compact w-80 bg-base-300 rounded-xl shadow-xl">
                    <figure><img src="https://i.ibb.co/zQr6Ph6/gabriel-vasiliu-q-Hv-Yb5xl-QVY-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Thermo King</h2>
                    </div>
                </div>
                <div data-aos="flip-left" className="card card-compact w-80 bg-base-300 rounded-xl shadow-xl">
                    <figure><img src="https://i.ibb.co/wJ1qwsH/josue-montoya-1obz8-Kvpj-MM-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Suicide Squad</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularToys;