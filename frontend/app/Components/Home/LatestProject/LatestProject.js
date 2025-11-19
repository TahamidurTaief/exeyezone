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
        <p className='text-sm md:text-base text-[var(--primary)] font-semibold tracking-wider uppercase mb-2'>Featured Products</p>
        <h2 className='text-3xl md:text-4xl xl:text-5xl font-poppins font-semibold'>
          <span className="text-[var(--primary)]">Our latest</span> products
        </h2>
        <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>Discover our handpicked collection of premium products crafted with excellence</p>
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
            {product.map((data, index) => {
              // Get the product detail URL using slug
              const productUrl = data.slug ? `/products/${data.slug}` : '/products';
              
              return (
              <SwiperSlide key={index}>
                <div className="group flex flex-col gap-1 w-full pb-2">
                  <Link href={productUrl} className="block rounded-2xl w-full overflow-hidden relative">
                    <div className="relative w-full h-[250px] md:h-[280px] lg:h-[300px]">
                      <Image
                        src={typeof data.product_img === 'string' && data.product_img !== '' ? data.product_img : noImage}
                        alt={typeof data.title === 'string' ? data.title : 'Product Image'}
                        fill
                        className="object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    </div>
                  </Link>

                  {Array.isArray(data.tags) && data.tags.length > 0 && (
                    <ul className="flex flex-row flex-wrap gap-2 font-lato text-gray-600 text-xs font-medium">
                      {data.tags.slice(0, 3).map((tag) => (
                        <li key={tag.id} className="bg-gradient-to-r from-gray-100 to-gray-50 hover:from-[var(--primary)]/10 hover:to-[var(--primary)]/5 hover:text-[var(--primary)] transition-all duration-300 px-3 py-1.5 rounded-full border border-gray-200">
                          #{tag.name}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link href={productUrl}>
                    <h2 className="font-raleway font-bold text-base md:text-lg line-clamp-2 hover:text-[var(--primary)] transition-colors duration-300">
                      {typeof data.title === 'string' ? data.title : 'Untitled Product'}
                    </h2>
                  </Link>

                  <div className="flex justify-between items-center mt-auto">
                    {data.price && (
                      <div className="flex flex-row gap-2 items-center">
                        <span className="text-xl font-semibold text-[var(--primary)] font-poppins">$ {data.price}</span>
                        <span className="text-sm text-gray-500 line-through font-poppins">$ {(data.price * 1.2).toFixed(0)}</span>
                      </div>
                    )}
                    <Link href={productUrl} className="group/btn border border-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]/90 hover:from-[var(--primary)] hover:to-[var(--primary)]/90 p-3 rounded-xl  transform hover:scale-110 transition-all duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className='hover:stroke-[var(--primary)] duration-200' width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      <div className='text-center flex mt-14 lg:mt-16'>
        <Link href="/products" className='text-center font-raleway font-bold px-10 py-4 mx-auto bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]/90 hover:from-[var(--primary)] hover:to-[var(--primary)]/90 text-white duration-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all'>
          Explore More Products →
        </Link>
      </div>
    </div>
  );
};

export default LatestProject;
