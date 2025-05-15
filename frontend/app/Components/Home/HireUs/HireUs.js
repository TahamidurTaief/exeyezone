"use client";


import Image from 'next/image';
import Link from 'next/link';


import { RatingIcon } from "@/public/icons/ServicesIcons";
import flutter from "@/public/img/course/flutter.jpg";
import mern from "@/public/img/course/mern.jpg";
import python_django from "@/public/img/course/python_django.jpg";



const HireUs = () => {


    const services = [
            {
              id: 1,
              category: "Web Development",
              title: "I will create a professional POS website for you.",
              image: flutter,
              rating: 5.0,
              reviews: 127,
              deliveryTime: "4-8",
              price: 440,
            },
            {
              id: 2,
              category: "Web Development",
              title: "I will build a responsive e-commerce website.",
              image: mern,
              rating: 4.8,
              reviews: 95,
              deliveryTime: "3-7",
              price: 380,
            },
            {
              id: 6,
              category: "Web Development",
              title: "I will build a responsive Agency website.",
              image: python_django,
              rating: 4.8,
              reviews: 95,
              deliveryTime: "3-7",
              price: 380,
            },
        ]



  return (
    <div>
      <div className="container pb-5 mt-10 md:mt-20">

      <div className='justify-center text-center text-[var(--secondary)] pb-10'>
            <h2 className='text-2xl md:text-4xl text-center font-lato font-bold'><span className='text-[var(--primary)]'>Hire Us</span> with these services.</h2>
        </div>



            {/* <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mx-auto justify-center  gap-6 sm:gap-2 -ml-5 sm:ml-0"> */}
            <div className="flex flex-row flex-wrap mx-auto justify-center  gap-6 sm:gap-2 -ml-5 sm:ml-0">



                       
                    {services.map((service) => (
                        <div className="flex flex-col gap-4 min-w-[300px] max-w-[20rem] border-[1px] rounded-md drop-shadow-sm mx-auto hover:scale-105 duration-300" key={service.id}>
                        <div className="justify-center w-full object-cover">
                            <Image src={service.image} alt={service.title} placeholder="blur" className="rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-3 px-4">
                            <div className="">
                                <Link href=""><h1 className="text-sm md:text-[16px] leading-5 font-lato font-medium hover:text-[var(--primary)] duration-200 justify-start">{service.title}</h1></Link>
                            </div>
    
    
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row gap-1 items-center">
                                    <RatingIcon />
                                    <p className="font-lato text-sm text-yellow-500">{service.rating}</p>
                                    <p className="font-lato text-sm text-gray-800">({service.reviews})</p>
                                </div>
    
                                <div>
                                    <p className="font-lato text-sm"><span className="font-semibold">{service.deliveryTime} Days</span> Delivery</p>
                                </div>
                            </div>
    
                            <hr className="w-full py-1 mt-1" />
    
                            <div className="flex flex-row justify-between pb-5 items-center">
                                <div>
                                    <p className="font-lato">Starting at <span className="font-2xl font-semibold">${service.price}</span></p>
                                </div>
    
                                <Link href="/hireus" className="bg-[var(--secondary)] hover:bg-[var(--primary)] font-lato text-sm uppercase text-white duration-200 px-3 py-2 text-center rounded-md">See Details</Link>
                            </div>
                        </div>
                        
    
                    </div>
                    ))}


            </div>

            <div className='text-center flex mt-10 lg:mt-14 transform hover:scale-105 duration-300 '>
                <Link href="/services" className=' text-center font-lato px-7 py-2 mx-auto border-[var(--secondary)] hover:border-[var(--primary)] border-2 text-[var(--secondary)] hover:text-white duration-200 hover:bg-red-500 font-semibold justify-center rounded-md  items-center'>
                 Explore More services
                </Link>
            </div>
      </div>
    </div>
  )
}

export default HireUs
