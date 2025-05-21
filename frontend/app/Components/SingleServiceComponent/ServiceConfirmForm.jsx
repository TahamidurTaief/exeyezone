import React from 'react'

const ServiceConfirmForm = ({onClose, pkg, service}) => {

    const inputClass = "text-sm bg-gray-100 py-3 px-4 rounded border-0 outline-0 font-lato";




  return (
    <div>
      <div className="fixed inset-0 bg-black/50  z-50 flex items-center justify-center">
                {/* Modal Content */}
                    <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] md:w-full max-w-md">
                        <h2 className="text-xl text-[var(--primary)] flex mb-4 font-lato font-bold leading-6 justify-center font-raleway border-b pb-3 mx-auto">Confirm your Order</h2>
                        <h2 className="text-lg text-gray-800 mb-4 font-lato font-semibold leading-6">Project: <span className="font-medium">{service.title}</span></h2>
                        <h2 className="text-lg text-gray-800 mb-4 font-lato font-semibold leading-6">Package: <span className="font-medium">{pkg}</span></h2>
                        <p className="text-sm text-gray-600">Please provide your information throw this form. Our Team will contact with you as soon as possible.</p>
                    
                    
                        <form action="" method="post" className='flex flex-col gap-3 mt-3 [&>input]:font-poppins'>
                            {/* <h2 className="font-poppins text-md">Form</h2> */}
                            <input type="text" placeholder='Full Name' className={inputClass}/>
                            <input type="email" placeholder='Email' className={inputClass}/>
                            <input type="text" placeholder='Contact Number' className={inputClass}/>
                            <textarea name="message" id="" cols="10" placeholder='Drop your message.' className={inputClass}></textarea>
                            <div className="flex flex-row gap-4">
                                <input type="submit" value="Submit" className='bg-[var(--primary)] hover:bg-[var(--secondary)] cursor-pointer duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded'/>
                                <div onClick={onClose} className='hover:bg-[var(--primary)] bg-[var(--secondary)] cursor-pointer duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded text-center items-center justify-center font-medium'>Close</div>
                            </div>

                        </form>
                    </div>
                </div>
    </div>
  )
}

export default ServiceConfirmForm
