import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
const ClientWords = () => {
    const testimonials = [
        {
            image: '/clientfinal121.png',
            words: 'The great thing about working  Shivam is that he is not only friendly and helpful but also knowledgable and insightful',
            person: 'Chris Steck'
        },
        {
            image: '/clientfinal2.png',
            words: 'It was an absoulute pleasure experience working with Mr Shivam. His expertise in this field really reflects in his work',
            person: 'Tony Long'
        },
        {
            image: '/clientfinal3.png',
            words: 'I have been fully statisfied by the help of Shivam for my small business . ',
            person: 'Spencer White'
        }

    ]
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
           
            setCounter((counter) => counter+1);
            console.log("LOG EVENT")
           
        }, 7000);

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
        <div className=" px-2 sm:px-12 lg:px-32 mt-48">
            <h2 className="text-6xl text-center text-primary font-paytone text-shadow" id="client-words">
                CLIENT WORDS
            </h2>
            <div  className="mt-16 md:grid md:grid-cols-2 md:gap-x-20">
                <motion.div  animate={{opacity: [0,1,1,0]}} transition={{duration: 7, repeat: 100 }} className="bg-white bg-opacity-30 shadow-2xl " >
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
                <div className="flex flex-col   justify-center  items-center md:items-start mt-16 md:mt-0">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl  text-center md:text-left font-paytone text-shadow">
                        Trusted by <span className="text-primary"> numerous </span> business owners and contractors
                    </h3>
                    <div className="mt-8 text-xl md:text-xl font-bold">
                        Because I Like Happy Clients 😊
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ClientWords;