import React from 'react';
import qute from '../../../assets/icons/quote.svg';
import pic1 from '../../../assets/images/arefin.jpg';
import pic2 from '../../../assets/images/masud.jpg';
import pic3 from '../../../assets/images/sifat.jpg';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Arefin Reza Saim',
            review_text: 'I had a wonderful experience with Dr. X. She is a compassionate and knowledgeable physician who took the time to listen to my concerns and explain things clearly. Thanks to her care, my health has improved significantly. I highly recommend her!',
            location: 'Chapai Rajshahi',
            img: pic1

        },
        {
            _id: 2,
            name: 'Abdullah Al Masud',
            review_text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Gazipur',
            img: pic2

        },
        {
            _id: 3,
            name: 'Sifat Khan cr',
            review_text: 'I cant express how grateful I am for Dr.S care.Their expertise and genuine concern for my well- being made a significant difference in my recovery.Highly recommended!',
            location: 'Gazipur sadar',
            img: pic3

        },
    ]

    return (
        <section className='mt-8'>
            <div className='flex justify-between'>
                <div >
                    <h1 className='text-xl text-primary font-bold uppercase'>Testimonial</h1>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={qute} alt="quete" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;