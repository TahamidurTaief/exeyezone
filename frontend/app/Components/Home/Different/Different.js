import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



import atul_taief from "@/public/img/me_and_taief.png"
import blur_bar from "@/public/img/blue-bar.png"




const Different = () => {
  return (
    <div className='pb-20'>
        <div className="container z-10 mt-10">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col">
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </div>

        <div className='xl:-mt-5 z-20'>
            <Image src={blur_bar} alt="exeyezone" />
        </div>
    </div>
  )
}

export default Different
