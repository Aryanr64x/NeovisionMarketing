import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
const ClientWords = () => {
    const testimonials = [
        {
            image: '/clientfinal121.png',
            words: 'The great thing about working  Shivam is that he is not only friendly and helpful but also knowledgable and insightful',
            person: 'Tony Stark, CEO of Stark Industries'
        },
        {
            image: '/clientfinal2.png',
            words: 'The great thing about working  Shivam is that he is not only friendly and helpful but also knowledgable and insightful',
            person: 'Tony Stark, CEO of Stark Industries'
        },
        {
            image: '/clientfinal3.png',
            words: 'The great thing about working  Shivam is that he is not only friendly and helpful but also knowledgable and insightful',
            person: 'Tony Stark, CEO of Stark Industries'
        }

    ]
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
           
            setCounter((counter) => counter+1);
            console.log("LOG EVENT")
           
        }, 4000);

        return ()=>{
            clearInterval(interval)
        }
    }, [])


    useEffect(()=>{
        if (counter > 2) {
            console.log("THIS CODE HAS BEEN CALLED")
            setCounter(0);
        }
    })



    return (
        <div className="px-32 mt-40">
            <h2 className="text-6xl text-center text-primary font-paytone text-shadow" id="client-words">
                CLIENT WORDS
            </h2>
            <div className="mt-16 grid grid-cols-2 gap-x-20">
                <motion.div  animate={{opacity: [0,1,0]}} transition={{duration: 4, repeat: 100 }} className="bg-white bg-opacity-30 ">
                    <div>
                        <img  className="w-full h-84" src={ (testimonials[counter]) ? (testimonials[counter].image) : 'baba' } alt="" />

                    </div>
                    <div className="mt-10 px-8">
                        <div className="text-6xl font-paytone text-primary">
                            {' " '}
                        </div>
                        <div className="text-lg font-bold">
                            { (testimonials[counter]) ? (testimonials[counter].words) : 'baba'}
                        </div>
                        <div className="mt-8 text-lg font-black pb-4">
                            {(testimonials[counter]) ? (testimonials[counter].person) : 'baba'}
                        </div>


                    </div>
                </motion.div>
                <div className="flex flex-col   justify-center items-start">
                    <h3 className="text-5xl   font-paytone text-shadow">
                        Trusted by <span className="text-primary"> numerous </span> business owners and contractors
                    </h3>
                    <div className="mt-8 text-2xl font-bold">
                        Because I Like Happy Clients 😊
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ClientWords;