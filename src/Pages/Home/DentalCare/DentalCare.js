import React from 'react';
import treatment from '../../../assets/images/Vedio call.png'

const DentalCare = () => {
    return (
        <div className="hero mt-8">
            <div className="hero-content flex-col justify-center lg:flex-row-reverse">
                <div className='lg:w-4/12 lg:ml-10'>
                    <h1 className="text-4xl font-bold">Exceptional Medical Care, on Your Terms</h1>
                    <p className="py-4 text-base">Exceptional medical care is characterized by a commitment to excellence, where highly trained healthcare professionals prioritize accurate diagnosis and cutting-edge treatment methods to ensure the best possible outcomes for patients. It extends beyond medical procedures, emphasizing personalized care, clear communication, and emotional support to create a holistic healing experience.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
                <img src={treatment} className="lg:w-4/12 w-full rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default DentalCare;