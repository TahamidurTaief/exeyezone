import React from 'react'
import { IoCall, IoLocation } from "react-icons/io5";
import { SiGmail } from "react-icons/si";



const ContactFormComponents = () => {
  return (
    <div>
        <div className="container w-full overflow-hidden">
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 font-lato bg-white drop-shadow-2xl gap-10 px-6 py-10 rounded-xl">
            
            <div className="">
            <h2 className="font-raleway text-3xl text-gray-800 font-bold">Get in <span className="text-[var(--primary)]">touch</span></h2>
              <form action="" method="post" className='flex flex-col gap-3 mt-3'>
                <input type="text" placeholder='Full Name' className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'/>
                <input type="email" placeholder='Email' className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'/>
                <input type="text" placeholder='Contact Number' className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'/>
                <textarea name="message" id="" cols="10" placeholder='Drop your message.' className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'></textarea>
                <input type="submit" value="Submit" className='bg-[var(--primary)] hover:bg-[var(--secondary)] duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded'/>
              </form>
            </div>


            <div className="flex flex-col gap-5">
              <h2 className="font-raleway text-3xl text-gray-800 font-bold">Our <span className="text-[var(--primary)]">Information</span></h2>
              
              <div className="flex flex-col gap-10">
              <div className="flex flex-row items-center gap-3">
                <div className="p-2 border-2 border-[var(--secondary)] rounded-full"><IoCall className='text-2xl text-[var(--secondary)]'/></div>
                
                <div className="flex flex-col">
                  <h2 className="text-sm font-poppins font-medium text-[var(--primary)]">Phone Number</h2>
                  <p className="text-md font-poppins text-[var(--secondary)] font-medium">+8801766454576</p>
                </div>
              </div>


              <div className="flex flex-row items-center gap-3">
                <div className="p-2 border-2 border-[var(--secondary)] rounded-full"><SiGmail  className='text-2xl text-[var(--secondary)]'/></div>
                
                <div className="flex flex-col">
                  <h2 className="text-sm font-poppins font-medium text-[var(--primary)]">Email Address</h2>
                  <p className="text-md font-poppins text-[var(--secondary)] font-medium">exeyezoneltd@gmail.com</p>
                </div>
              </div>


              <div className="flex flex-row items-center gap-3">
                <div className="p-2 border-2 border-[var(--secondary)] rounded-full"><IoLocation  className='text-2xl text-[var(--secondary)]'/></div>
                
                <div className="flex flex-col">
                  <h2 className="text-sm font-poppins font-medium text-[var(--primary)]">Address</h2>
                  <p className="text-md font-poppins text-[var(--secondary)] font-medium">MS Club Field Len, Maltinagar, Bogura.</p>
                </div>
              </div>
            </div>
</div>

          </div>
        </div>
    </div>
  )
}

export default ContactFormComponents
