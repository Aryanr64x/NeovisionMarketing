import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const ClientWords = ({ clientword }) => {
    const testimonials = [
        {
            image: clientword.client1.image,
            words: clientword.client1.quote,
            person: clientword.client1.client
        },
        {
            image: clientword.client2.image,
            words: clientword.client2.quote,
            person: clientword.client2.client
        },
        {
            image: clientword.client3.image,
            words: clientword.client3.quote,
            person: clientword.client3.client
        }

    ]


    const template = (item) => {
        return (
            <div className="bg-white bg-opacity-30 shadow-2xl " >
                <div>
                    <img className="w-full h-84" src={(item.image) ? (item.image) : '/'} alt="Client Image" />
                </div>
                <div className="mt-10 px-8">
                    <div className="text-6xl font-paytone text-primary">
                        {' " '}
                    </div>
                    <div className="text-lg font-bold">
                        {item.words}
                    </div>
                    <div className="mt-8 text-lg font-black pb-4">
                        {item.person}
                    </div>


                </div>
            </div>
        )
    }



    return (
        <div className=" px-2 sm:px-12 lg:px-32 mt-48" on>
            <h2 className="text-6xl text-center text-primary font-paytone text-shadow" id="client-words">
                CLIENT WORDS
            </h2>
            <div className="mt-16 md:grid md:grid-cols-2 md:gap-x-20">
                <Carousel value={testimonials} itemTemplate={template} circular={true} showIndicators={false}></Carousel>

                <div className="flex flex-col   justify-center  items-center md:items-start mt-16 md:mt-0">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl  text-center md:text-left font-paytone text-shadow">
                        {clientword.mainheading}
                    </h3>
                    <div className="mt-8 text-xl md:text-xl font-bold">
                        {clientword.subheading}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ClientWords;