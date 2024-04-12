import React from 'react'


const About = () => {
    return (
        <div>

            <div className='md:w-[100%] w-full text-[black] '>
                <div className='md:w-fullw-full ml-[20px] mr-[20px] justify-center items-center'>
                    <h1 className='text-center  font-semibold mt-5 text-[25px]'>About</h1>
                    <hr className=' bg-[black] h-[2px]' />

                    <div className='md:w-[100%] w-full h-[auto] mt-10 grid grid-cols-1 md:grid-cols-2'>
                        <img src="images/About 1.avif" className='ml-[100px] w-[65%] mt-10' alt="" />
                        <div className='w-30% '>
                            <p className=' text-[25px]'>Blog Create Your Space</p>
                            <hr className=' h-[2px] bg-[black]' />
                            <p className=' text-[#777]'>A blog or weblog is an online platform publishing so-called blog content. A blog may be the work of a single person or jointly operated by a group of people, and bloggers tend to use content managament systems or blog software such as WordPress, Blogger, or Joomla. The blog environment is known as the blogosphere.</p>
                            <br />
                            <p className=' text-[#777]'>There are different forms of blogs – the spectrum ranges from online diaries to blogs on particular subjects and corporate blogs. Most blogs have a thematic focus, such as travel, fashion or recipes, and many professional discussions blogs have become established as a recognized online media resource. As well as private users, many companies have discovered blogging and employ corporate blogs as a tool to communicate with their readers.</p>
                        </div>
                    </div>
                    <div className='md:w-[100%] w-full h-[auto] mt-10 grid grid-cols-1 md:grid-cols-2'>
                        <div className='w-30%  '>
                            <p className=' text-[25px]'>A Weblog : Detailed summary </p>
                            <hr className='h-[2px] bg-[black]' />
                            <p className=' text-[#777]'>Blogs first emerged in the ‘90s when they resembled online diaries. Since then, the number and type has continued to increase worldwide.
                                According to NM Incite, there were 173 million indexed blogs in October 2011, and in April 2014 alone, the blogging platform Tumblr claimed to have 182.5 million listed blogs.
                                The motives for blogging range from the joy of writing to the provision of information and the identification of emerging trends.</p>
                            <br />
                            <p className=' text-[#777]'>Blog topics vary from travel to cooking. Fashion blogs like The Sartorialist also enjoy great popularity.

                            Corporate blogs are strategic tools in a company’s marketing mix, and their aim is to purposefully represent and communicate the interests of the company. Such e-commerce companies develop a blog to enhance their online store beyond basic Product Description content, often including tips and advice. In addition, there is a trend to build so-called corporate Magazines such as Coca Cola’s ‘Journey’.</p>
                        </div>
                        <img src="images/About 2.avif" className='ml-20 w-[60%] mt-10' alt="" />
                    </div>



                </div>


            </div>
        </div>
    )
}

export default About
