'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import ecom_img from "@/public/img/e-com_product.png";
import img1 from "@/public/img/Products/product-img1.png";
import img2 from "@/public/img/Products/product-img2.png";
import img3 from "@/public/img/Products/product-img3.png";



const LatestProject = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
          '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
      };
    
      const append = () => {
        swiperRef.appendSlide(
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
      };
    
      const append2 = () => {
        swiperRef.appendSlide([
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
          '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
      };

      




    //   PRODUCT JSON
      const product = [
        {
            img: ecom_img,
            title: "Ecommerce Today",
            tags: ["Js", "React", "Node"]
        },
        {
            img: img1,
            title: "Ecommerce Today",
            tags: ["ASP", "Sql"]
        },
        {
            img: img2,
            title: "Ecommerce Today",
            tags: ["Java", "Dart", "Flatter"]
        },
        {
            img: img3,
            title: "Ecommerce Today",
            tags: ["python", "django", "mysql"]
        },
        {
            img: img3,
            title: "Ecommerce Today",
            tags: ["python", "django", "mysql"]
        },
        {
            img: img3,
            title: "Ecommerce Today",
            tags: ["python", "django", "mysql"]
        },
        {
            img: img3,
            title: "Ecommerce Today",
            tags: ["python", "django", "mysql"]
        },
        {
            img: img3,
            title: "Ecommerce Today",
            tags: ["python", "django", "mysql"]
        },
        {
            img: img3,
            title: "Ecommerce Today",
            tags: ["python", "django", "mysql"]
        },
        {
            img: img3,
            title: "Ecommerce Today",
            tags: ["python", "django", "mysql"]
        },
        {
            img: img3,
            title: "Ecommerce Today",
            tags: ["python", "django", "mysql"]
        },
      ]


  return (

    <>
    
    <div className='container pb-24'>
        <div className='justify-center text-center text-[var(--secondary)] pb-10'>
            <h2 className='text-2xl md:text-4xl text-center font-lato font-bold'> <span className="text-[var(--primary)]">Our latest</span> products</h2>
            {/* <p className="font-lato text-xs md:text-sm text-center">Whats happening around the world.</p> */}
        </div>


        {/* <div className="flex flex-wrap  mt-14"> */}

<div className="mx-auto justify-center items-center">
<Swiper
  onSwiper={setSwiperRef}
  centeredSlides={true}
  navigation={true}
  modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
  className="mySwiper w-full" // Ensure full width
  autoplay={{
    delay: 2000, // 2 seconds
    disableOnInteraction: false,
  }}
  loop={true}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 2 },
    640: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1470: { slidesPerView: 4, spaceBetween: 50 },
  }}
  style={{ width: "100%" }} // Ensure swiper takes up 100% of the width
>
  {/* Your slides go here */}




        {product.map((data, index) => (
        <SwiperSlide key={index}>
            <div className="flex flex-col gap-5 min-w-[20rem] max-w-[22rem]">
            <div className='rounded-lg'>
                <Image src={data.img} alt="exeyezone product" className='w-[20rem] h-[12rem] object-cover rounded-md' />
            </div>
            <div>
                <ul className='flex flex-row gap-3 font-lato text-gray-500 text-xs font-medium'>
                {Array.isArray(data.tags) &&
                    data.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className='border-gray-500 p-1 rounded-md border-[0.1px]'>
                        #{tag}
                    </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className='font-lato font-semibold text-lg'>{data.title}</h2>
            </div>
            <div className='cursor-pointer'>
                <Link href="/" className='cursor-pointer'>
                <svg width="38" height="40" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="49" rx="4.5" stroke="#FAE0E1" />
                    <path d="M19.9697 32.5305C19.7034 32.2642 19.6792 31.8475 19.8971 31.5539L19.9697 31.4698L26.439 25.0001L19.9697 18.5305C19.7034 18.2642 19.6792 17.8475 19.8971 17.5539L19.9697 17.4698C20.2359 17.2035 20.6526 17.1793 20.9462 17.3972L21.0303 17.4698L28.0303 24.4698C28.2966 24.7361 28.3208 25.1527 28.1029 25.4463L28.0303 25.5305L21.0303 32.5305C20.7374 32.8233 20.2626 32.8233 19.9697 32.5305Z" fill="#3C3679" />
                </svg>
                </Link>
            </div>
            </div>
        </SwiperSlide>
        ))}

        




            </Swiper>
            </div>
            <div className='text-center flex mt-10 lg:mt-14 transform hover:scale-105 duration-300 '>
                <Link href="/products" className=' text-center font-lato px-7 py-2 mx-auto border-[var(--secondary)] hover:border-[var(--primary)] border-2 text-[var(--secondary)] hover:text-white duration-200 hover:bg-red-500 font-semibold justify-center rounded-md  items-center'>
                 Explore More Products
                </Link>
            </div>
        </div>
        
        
    </>
  )
}

export default LatestProject
