import { useState } from "react";
import {motion} from 'framer-motion'
import { InlineWidget } from "react-calendly";
const BookACall = ()=>{
    const [showModal,setShowModal] = useState(false)
    return (
        <div className="calldiv mt-40  px-2 sm:px-24 lg:px-52 xl:px-80 flex flex-col justify-center  shadow-md py-8  relative" id="bookacall">
             <h2  className="text-5xl text-center text-primary font-paytone text-shadow">
                CONNECT WITH ME 
            </h2>
            <motion.div initial={{ translateY: -40, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.5 }}  className="mt-8 text-2xl font-semibold text-center text-shadow">
                Hello , I am Shivam , let me focus on your business growth while you focus on the actual business instead ! Book a call with me now and connect with me 
            </motion.div>
            <motion.div   initial={{  rotateX: -90 }}  whileInView={{rotateX: 0 }} transition={{ duration: 0.5 }} className="flex justify-center">
                    <button onClick={()=>{setShowModal(true)}}  className="rounded-full bg-primary mt-16 px-6 py-6 mr-4 font-bold text-lg hover:opacity-80  transition-all duration-500"> Book A Call Now </button>
            </motion.div>

            {/* A top and bottom property felt necessary */}
            {
                (showModal) ? (<motion.div  animate={{opacity:[0,1]}} transition={{ duration: 0.2 }}  className="px-2  sm:px-24 lg:px-52 xl:px-80 flex justify-center   w-f  absolute top-8 left-0.5 w-full" >
                <div className="w-full  bg-white px-8 py-4 rounded-md shadow-2xl">
                      <div className="text-3xl text-secondary  text-center font-black">
                          Book A Call Now
                      </div>
                      <div className="text-xl mt-2">
                         <InlineWidget url="https://calendly.com/saket-aryanr64x"  />
                      </div>
                      <div className="flex justify-end  text-secondary font-bold">
                          <button onClick={()=>{
                              setShowModal(false)
                          }}> Cancel </button>
                      </div>
                </div>
          </motion.div>) : (<div></div>)
            }

        </div>
    );
}

export default BookACall;