import { useState } from "react";
import {motion} from 'framer-motion'
import { InlineWidget } from "react-calendly";
const BookACall = ()=>{
    const [showModal,setShowModal] = useState(false)
    return (
        <div className="calldiv mt-48  px-2 sm:px-24 lg:px-52 xl:px-80 flex flex-col justify-center  shadow-md py-8  relative" id="bookacall">
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
                      <div className="text-3xl flex text-secondary  text-center font-black justify-between">
                         <div>
                         Book A Call Now
                         </div>
                         <div >
                            <svg onClick={()=>{setShowModal(false)}}  className="fill-secondary cursor-pointer h-6 mr-4 hover:opacity-80 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                         </div>
                      </div>
                      <div className="text-xl mt-2">
                         <InlineWidget url="https://calendly.com/neovisionmarketing/call"  />
                      </div>
                      <div className="flex justify-end  text-secondary font-bold mt-2">
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