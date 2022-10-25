import Tilt from 'react-parallax-tilt';

const Result = ({result}) => {
    return (
        <div>

            <div className=" px-4  md:px-36 lg:px-48 xl:px-60 mt-64">
                <h2 className="text-6xl text-center text-primary font-paytone text-shadow" id="">
                    PROVEN RESULTS!
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 mt-16">
                    <Tilt>

                        <div className="bg-white bg-opacity-30 shadow-sm rounded hover:shadow-2xl cursor-pointer transition-all duration-300  mt-16 md:mt-0">
                            <img src={ result.result1.image } className="w-full" />
                            <div className="px-8">
                                <div className="mt-4 text-xl font-black">
                                    { result.result1.result_heading }
                                </div>
                                <div className="mt-8 pb-4 text-lg">
                                    { result.result1.info }
                                </div>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="bg-white bg-opacity-30 shadow-sm rounded hover:shadow-2xl cursor-pointer transition-all duration-300 mt-16 md:mt-0">
                            <img src={result.result2.image} className="w-full" />
                            <div className="px-8">
                                <div className="mt-4 text-xl font-black">
                                    { result.result2.result_heading }
                                </div>
                                <div className="mt-8 pb-4 text-lg">
                                    { result.result2.info }
                                </div>
                            </div>
                        </div>
                    </Tilt> 
                </div>
            </div>
        </div>
    )
}

export default Result;