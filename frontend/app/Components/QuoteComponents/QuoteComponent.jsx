import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoCall, IoLocation } from "react-icons/io5";
import { SiGmail } from "react-icons/si";



const QuoteComponent = () => {
  return (
    <div>
      <div className="container h-full my-auto">
                <div className="my-24 grid grid-cols-1 md:grid-cols-2 font-lato bg-white drop-shadow-2xl gap-10 px-6 py-10 rounded-xl">
                  
                  <div className="flex flex-col gap-4">
                    <h2 className="font-raleway text-2xl text-gray-800 font-bold"><span className="text-[var(--primary)]">Request a Quote </span>for Your Custom Services or Custom Project</h2>
              
                    <p className='font-lato text-gray-700 font-normal text-sm text-justify leading-[170%]'>Looking for a custom solution tailored to your unique needs? Whether it's a personalized website, application, or feature development, we're here to help. Tell us a bit about your project or the service you need. Our team will review your request and get back to you as soon as possible with a detailed quote and timeline. We offer flexible, scalable solutions to match your goals and budget. No matter the complexity, our experts are ready to turn your ideas into reality. Let’s build something great together — customized just for you.</p>
                
                  </div>


                  <div className="">
                  <h2 className="font-raleway text-2xl text-gray-800 font-bold uppercase">Get a <span className="text-[var(--primary)]">Quote!</span></h2>
                    <form action="" method="post" className='flex flex-col gap-3 mt-3'>
                      <input type="text" placeholder='Name' className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'/>
                      <input type="email" placeholder='Email' className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'/>
                      <input type="text" placeholder='Contact Number' className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'/>
                      <textarea name="message" id="" cols="10" placeholder='Description of the custom service or custom project.' className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'></textarea>
                      <input type="submit" value="Submit" className='bg-[var(--primary)] hover:bg-[var(--secondary)] duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded'/>
                    </form>
                  </div>
      

      
                </div>
              </div>
    </div>
  )
}

export default QuoteComponent
