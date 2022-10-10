const Hero = () => {
    return (
        <div className="min-h-screen hero flex flex-col justify-between items-stretch">
            <div className="pt-8  px-2 sm:px-12 lg:px-32">
                <span className="ml-1  text-primary text-2xl font-paytone text-shadow ">
                    NEOVISION MARKETING
                </span>
            </div>
            <div className="lg:grid lg:grid-cols-3  px-2 sm:px-12 lg:px-32">
                <div className="col-span-2">
                    <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-paytone text-shadow ">
                        Its Time To Boost Your Remodelling Business With
                        <span className="ml-1 text-primary">
                            FACEBOOK ADS
                        </span>
                    </h1>
                    <div className="mt-4 text-2xl">
                        Whether you are an individual contractor or a full blown business , unleash the power of Facebook Ads to double your sales
                    </div>
                    <div className="mt-16">
                        <a href="#client-words" className="rounded-full bg-primary px-4 py-4 mr-4 font-bold text-lg"> Book A Call </a>
                        <a href="#client-words" className="rounded-full  border-primary border-2 px-4 py-4 mr-2 font-bold text-lg hover:bg-primary transition-all duration-500"> Client Words </a>
                    </div>
                </div>
                <div className="col-span-1">
                
                </div>
            </div>
            <div className="trans-div">

            </div>

           
        </div>
    );
}

export default Hero;