
import Image from 'next/image';
import { MobilePackageComponent, PackageComponent } from './PackageComponent';
import Carousel from './Slider';

import logo from "@/public/img/Logo/logo.png";




const HireUsComponent = () => {





  return (

            <div className="container">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* <!-- LEFT SIDE SECTION START HERE --> */}
                     <div className=" w-full lg:w-[60%] 2xl:w-[65%]">
                        <h1 className="text-lg md:text-xl font-semibold font-lato leading-[150%]" >I will design or develop a responsive wordpress blog website</h1>
                        <div className="flex flex-col md:flex-row gap-3 md:justify-between justify-start text-start md:items-center mt-3">
                            <p className="text-[14px] md:text-16px font-poppins"><span className="font-semibold leading-[150%]">Rating: </span>5.00 (343) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 1 Order in Queue</p>
                            <Image src={logo} alt="exeyezone" placeholder="blur" className="h-7 w-24" />
                        </div>

                        
                            <Carousel />



                        <MobilePackageComponent />




                        {/* <!-- DESCRIPTION SECTION START HERE --> */}
                         <div className="mt-10">
                            <h1 className="text-xl justify-start text-gray-700 font-semibold font-poppins">Abour this Service</h1>

                            <div className="mt-5 font-raleway">
                                ** PLEASE CONTACT ME BEFORE PLACING AN ORDER **

Hi There,

If you need help with ANY kind of project, feel free to contact me. I can help you but am not limited to the following kinds of projects

Simple python programming scripts.
Object Oriented Programming (OOP) tasks in python.
GUI based desktop 
Web Scraping.
Django Web Applications.


Following are the reasons for choosing me to do your work

I do work with 100% Customer Satisfaction.
I am highly punctual and will keep you updated of the work done.
I am a very good communicator and will cater to all your needs.
Ill make sure that the code is written following the best practices.
The code will be easy to understand and will be well documented so that you are satisfied with the work.
Thank you for your time.
Hi There,

If you need help with ANY kind of project, feel free to contact me. I can help you but am not limited to the following kinds of projects

Simple python programming scripts.
Object Oriented Programming (OOP) tasks in python.
GUI based desktop 
Web Scraping.
Django Web Applications.


                            </div>
                            
                         </div>
                        {/* <!-- DESCRIPTION SECTION END HERE --> */}
                    </div>
                    {/* <!-- LEFT SIDE SECTION END HERE --> */}


                    {/* <!-- RIGHT SIDE SECTION START HERE --> */}
                        <PackageComponent />
                    {/* <!-- RIGHT SIDE SECTION END HERE --> */}
                </div>
    //     </div>
    // </div>

  )
}

export default HireUsComponent
