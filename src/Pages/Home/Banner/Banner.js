import React from 'react';
import background from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero h-6/12" style={{
            backgroundImage: `url(${background})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-6/12 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">In an era of digital transformation</h1>
                    <p className="py-6">healthcare is embracing technology to overcome geographical barriers and enhance patient-doctor interactions. "DocNet360" is a groundbreaking concept that leverages virtual consultations to provide timely medical advice and improve healthcare accessibility. This report explores the challenges that "DocNet360" addresses, outlines the project's key features, and discusses its potential impact on healthcare services.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;