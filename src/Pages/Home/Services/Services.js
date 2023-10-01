import React from 'react';
import flowrite from '../../../assets/images/emergency.png';
import cavity from '../../../assets/images/language.png';
import white from '../../../assets/images/monitor.jpg';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Emergency Consultations',
            description: 'In emergencies, our team is available 24/7 for immediate medical consultation and care, prioritizing your well-being.',
            img: flowrite
        },
        {
            id: 2,
            name: 'Multiple language support',
            description: 'Our platform offers robust multiple language support, ensuring seamless communication ',
            img: cavity
        },
        {
            id: 3,
            name: 'Health Monitor',
            description: 'Health monitoring allows individuals to track and manage their well-being by regularly',
            img: white
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h1 className='text-primary text-xl uppercase font-bold'>Our Services</h1>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;