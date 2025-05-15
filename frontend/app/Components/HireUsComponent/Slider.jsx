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

const Carousel = () => {
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
        <SwiperSlide>
          <div className="flex justify-center items-center h-56 md:h-96">
            <Image src={flutter} alt="Flutter" className="rounded-xl" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-56 md:h-96">
            <Image src={mern} alt="MERN Stack" className="rounded-xl" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-56 md:h-96">
            <Image src={php_laravel} alt="PHP Laravel" className="rounded-xl" />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-56 md:h-96">
            <Image src={python_django} alt="Python Django" className="rounded-xl" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
