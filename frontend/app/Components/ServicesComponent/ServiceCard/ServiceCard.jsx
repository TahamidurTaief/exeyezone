import Image from "next/image";
import Link from "next/link";


import { RatingIcon } from "@/public/icons/ServicesIcons";
import flutter from "@/public/img/course/flutter.jpg";
import mern from "@/public/img/course/mern.jpg";
import php_laravel from "@/public/img/course/php_laravel.jpg";
import python_django from "@/public/img/course/python_django.jpg";


const ServiceCard = () => {

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
        {
          id: 3,
          category: "Software Development",
          title: "I will develop a custom CRM software.",
          image: php_laravel,
          rating: 4.9,
          reviews: 88,
          deliveryTime: "7-14",
          price: 900,
        },
        {
          id: 4,
          category: "Software Development",
          title: "I will create an inventory management system.",
          image: python_django,
          rating: 4.7,
          reviews: 105,
          deliveryTime: "5-10",
          price: 750,
        },
        {
          id: 5,
          category: "Software Development",
          title: "I will create an Hospital management system.",
          image: mern,
          rating: 4.7,
          reviews: 105,
          deliveryTime: "5-10",
          price: 750,
        },
      ];


      


      const groupedServices = services.reduce((acc, service) => {
        if (!acc[service.category]) {
          acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
      }, {});





  return (
    <div>
        <div className="mt-20">
            <h1 className="font-raleway text-xl md:text-2xl xl:text-4xl text-[var(--secondary)] font-bold text-center">Our <span className='text-[var(--primary)]'>Services</span></h1>
        

    {Object.keys(groupedServices).map((category) => (
        <div className="flex flex-col mt-10 gap-5 pb-16" key={category}>
            <h1 className="font-raleway text-2xl md:text-2xl xl:text-3xl text-[var(--secondary)] font-bold text-center justify-center">{category}</h1>
            <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-center mx-auto">

            {groupedServices[category].map((service) => (
                <div className="flex flex-col gap-4 min-w-[300px] max-w-[20rem] border-[1px] rounded-md drop-shadow-sm" key={service.id}>
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
        </div>
    ))}



        </div>
    </div>
  )
}

export default ServiceCard
