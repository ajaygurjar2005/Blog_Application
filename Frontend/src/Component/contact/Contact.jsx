import React from 'react'


const Contact = () => {
    return (
        <div>
            <div className='w-[100%] text-[black] '>
                <h1 className='text-center  font-semibold mt-5 text-[25px]'>Contact Us</h1>
                <hr className='w-full bg-black h-[2px]' />
                <div>
                    <div className="h-[500px] md:w-[80%] w-80% md:ml-[100px] ml-[20px] mr-[20px] mt-10">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56954.75490891287!2d75.77679183705648!3d26.85037708588782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67377871437%3A0x6d191b0b94eae76b!2sMalviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1695977019026!5m2!1sen!2sin" className="left-0 top-0 sm:p-4 md:p-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0"
                            allowfullscreen ></iframe>
                    </div>
                    <div className='w-[80%] ml-[100px] bg-[white] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-3 ronded h-[auto] mb-20'>
                        <div className='w-[100%]   '>

                            <h2 className='ml-[110px]  font-semibold  '>Contant Us</h2>
                            <p className='ml-[110px] text-[18px]'>ajaygurjar7003<br />@gmail.com<br />+91 6378717003
                            </p>
                        </div>
                        <div className='w-[100%]   '>

                            <h2 className='ml-[110px]  font-semibold  '>Address</h2>
                            <p className='ml-[110px] text-[18px]'>21,suntower, Malviya

                                <br />Nagar, Jaipur 302017 , <br />
                            </p>
                        </div>
                        <div className='w-[100%]   '>

                            <h2 className='ml-[110px]  font-semibold  '>Chat Now</h2>
                            <p className='ml-[110px] text-[18px]'>+91 6378717003 <br />on whatsapp
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
