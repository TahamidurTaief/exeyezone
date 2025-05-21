"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import flutter from "@/public/img/course/flutter.jpg";
import mern from "@/public/img/course/mern.jpg";
import php_laravel from "@/public/img/course/php_laravel.jpg";
import python_django from "@/public/img/course/python_django.jpg";
import Image from "next/image";

const Carousel = ({img}) => {
  return (
    <div className="relative w-full mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg"
      >
        {/* Slide 1 */}


        {img.map ((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex justify-center items-center h-56 md:h-96  object-cover">
              <Image src={image.image} alt="Flutter" fill className="rounded-xl w-full h-full  object-cover" />
            </div>
          </SwiperSlide>
        ))}
        


      </Swiper>
    </div>
  );
};

export default Carousel;
