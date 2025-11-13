'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import noImage from '@/public/img/no_image.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const LatestProject = ({ product }) => {
  return (
    <div className='container pb-24'>
      <div className='justify-center text-center text-[var(--secondary)] pb-10'>
        <h2 className='text-2xl md:text-4xl font-lato font-bold'>
          <span className="text-[var(--primary)]">Our latest</span> products
        </h2>
      </div>

      <div className="w-full">
        {product.length === 0 ? (
            <p className="text-center text-gray-500">No Product Found</p>
          
        ) : (
          <Swiper
            centeredSlides={false}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper w-full"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={product.length > 4}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              480: { 
                slidesPerView: 1.5, 
                spaceBetween: 15 
              },
              640: { 
                slidesPerView: 2, 
                spaceBetween: 15 
              },
              768: { 
                slidesPerView: 2.5, 
                spaceBetween: 20 
              },
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 25 
              },
              1280: { 
                slidesPerView: 3.5, 
                spaceBetween: 30 
              },
              1536: { 
                slidesPerView: 4, 
                spaceBetween: 30 
              },
            }}
          >
            {product.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4 w-full pb-2">
                  <Link href="/products" className="block rounded-lg w-full overflow-hidden group">
                    <div className="relative w-full h-[250px] md:h-[280px] lg:h-[300px]">
                      <Image
                        src={typeof data.product_img === 'string' && data.product_img !== '' ? data.product_img : noImage}
                        alt={typeof data.title === 'string' ? data.title : 'Product Image'}
                        fill
                        className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Link>

                  {Array.isArray(data.tags) && data.tags.length > 0 && (
                    <ul className="flex flex-row flex-wrap gap-2 font-lato text-gray-600 text-xs font-medium">
                      {data.tags.slice(0, 3).map((tag) => (
                        <li key={tag.id} className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200 px-3 py-1 rounded-full">
                          #{tag.name}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link href="/products">
                    <h2 className="font-lato font-semibold text-base md:text-lg line-clamp-2 hover:text-[var(--primary)] transition-colors duration-200 min-h-[3rem]">
                      {typeof data.title === 'string' ? data.title : 'Untitled Product'}
                    </h2>
                  </Link>

                  <div className="flex justify-between items-center mt-auto">
                    {data.price && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 line-through">৳ {(data.price * 1.2).toFixed(0)}</span>
                        <span className="text-lg font-bold text-[var(--primary)]">৳ {data.price}</span>
                      </div>
                    )}
                    <Link href="/products" className="group">
                      <svg
                        width="38"
                        height="40"
                        viewBox="0 0 48 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:scale-110 transition-transform duration-300"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="47"
                          height="49"
                          rx="4.5"
                          stroke="#FAE0E1"
                          className="group-hover:stroke-[var(--primary)] transition-colors duration-300"
                        />
                        <path
                          d="M19.9697 32.5305C19.7034 32.2642 19.6792 31.8475 19.8971 31.5539L19.9697 31.4698L26.439 25.0001L19.9697 18.5305C19.7034 18.2642 19.6792 17.8475 19.8971 17.5539L19.9697 17.4698C20.2359 17.2035 20.6526 17.1793 20.9462 17.3972L21.0303 17.4698L28.0303 24.4698C28.2966 24.7361 28.3208 25.1527 28.1029 25.4463L28.0303 25.5305L21.0303 32.5305C20.7374 32.8233 20.2626 32.8233 19.9697 32.5305Z"
                          fill="#3C3679"
                          className="group-hover:fill-[var(--primary)] transition-colors duration-300"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className='text-center flex mt-10 lg:mt-14'>
        <Link href="/products" className='text-center font-lato px-8 py-3 mx-auto border-2 border-[var(--secondary)] hover:border-[var(--primary)] text-[var(--secondary)] hover:text-white duration-300 hover:bg-[var(--primary)] font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all'>
          Explore More Products
        </Link>
      </div>
    </div>
  );
};

export default LatestProject;
