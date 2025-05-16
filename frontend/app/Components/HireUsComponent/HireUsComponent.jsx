import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




const HireUsComponent = () => {

  const inputStyle = "text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0";




  return (
    <div>
      <div className="container h-full my-auto">
                <div className="my-5 grid grid-cols-1 md:grid-cols-2 font-lato bg-white drop-shadow-2xl gap-10 px-6 py-10 rounded-xl">
                  
                  <div className="flex flex-col gap-4">
                    <h2 className="font-raleway text-2xl text-gray-800 font-bold">Let’s Build Something Great Together <br /><span className="text-[var(--primary)]">— Hire Our Expert Team </span></h2>
              
                    <p className='font-lato text-gray-700 font-normal text-sm text-justify leading-[170%]'>At ExeyeZone, we believe that every great project starts with a conversation. Whether you're launching a new brand, developing a custom website, or seeking a unique digital solution, our team is here to bring your vision to life — with precision, creativity, and care.

Use the form below to share the details of your project or service request. The more information you provide — your goals, challenges, budget range, and deadlines — the more effectively we can tailor our response to your exact needs.

Once submitted, our experts will review your message and reach out within 24–48 hours to discuss possibilities, timelines, and next steps. You won’t receive a generic response — you’ll hear directly from professionals ready to collaborate and deliver real results.

Whether it's a one-time service or a long-term partnership, ExeyeZone is committed to helping you succeed through thoughtful strategy and excellent execution.

Tell us what you need. We’re listening. Let’s make it happen.</p>
                
                  </div>


                  <div className="">
                  <h2 className="font-raleway text-2xl text-gray-800 font-bold uppercase"><span className="text-[var(--primary)]">Hire</span> Us!</h2>
                    <form action="" method="post" className="flex flex-col gap-3 mt-3">
                    {/* Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger className={`${inputStyle} text-gray-700 font-poppins font-normal  cursor-pointer w-full text-left`}>Select Service</DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuLabel className={`font-poppins font-medium`}>Services</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>I will build a responsive e-commerce website.</DropdownMenuItem>
                        <DropdownMenuItem>I will create a professional POS website for you.</DropdownMenuItem>
                        <DropdownMenuItem>I will create an inventory management system.</DropdownMenuItem>
                        <DropdownMenuItem>I will create an Hospital management system.</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>



                    {/* Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger className={`${inputStyle} text-gray-700 font-poppins font-normal  cursor-pointer w-full text-left`}>Select Package</DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuLabel className={`font-poppins font-medium`}>Services Packages</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Basic</DropdownMenuItem>
                        <DropdownMenuItem>Standard</DropdownMenuItem>
                        <DropdownMenuItem>Premium</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>



  {/* Inputs */}
  <input type="text" placeholder="Name" className={inputStyle} />
  <input type="email" placeholder="Email" className={inputStyle} />
  <input type="text" placeholder="Contact Number" className={inputStyle} />
  <textarea placeholder="Description of the custom service or custom project." className={inputStyle} rows={4}></textarea>

  {/* Submit button */}
  <input type="submit" value="Submit" className="bg-[var(--primary)] hover:bg-[var(--secondary)] duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded cursor-pointer" />
</form>

                  </div>
      

      
                </div>
              </div>
    </div>
  )
}

export default HireUsComponent
