// 'use client'

import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"
// import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import api from '@/utils/axios'; // Axios instance
import SkeletonComponent from '@/app/Components/SkeletonComponent/SkeletonComponent';
import noImage from '@/public/img/no_image.jpg';






const Course = ({courses}) => {
  // Limit to 8 courses (2 rows: 3 on lg, 4 on 2xl)
  const displayedCourses = courses.slice(0, 8);

    
  return (
    <div>
      <div className="container mt-0 md:mt-0 font-lato">
        <div className='justify-center text-center text-[var(--secondary)] pb-10'>
            <p className='text-sm md:text-base text-[var(--primary)] font-semibold tracking-wider uppercase mb-2'>Learn & Grow</p>
            <h2 className='text-3xl md:text-4xl xl:text-5xl text-center font-poppins font-semibold'>Our Latest <span className="text-[var(--primary)]">Courses</span></h2>
            <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>Unlock your potential with our expertly crafted courses designed to help you succeed</p>
        </div>
        <div className="flex ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-2 md:gap-3 w-full">


        {displayedCourses.length === 0 ? (
            <div className="col-span-full flex flex-row flex-wrap gap-5 justify-center">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="">
                        <SkeletonComponent />
                    </div>                    
                ))}

            </div>
          
        ) : (
            displayedCourses.map((data, index) => (
                <div key={index} className="group relative flex flex-col transform hover:scale-100 hover:-translate-y-2 duration-500 gap-4 w-full bg-white border border-gray-200 hover:border-[var(--primary)] rounded-2xl p-3 md:p-4 hover:shadow-lg transition-all overflow-hidden">
                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                    
                    <div className="rounded-xl w-full relative overflow-hidden z-10">
                        <Link href={`/courses/${data.id}`}>
                          <div className="relative w-full h-[200px]">
                            <Image 
                              src={data.img || noImage} 
                              alt={data.title || 'Course Image'}  
                              fill
                              className='object-cover rounded-xl group-hover:scale-110 transition-transform duration-700'
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                          </div>
                        </Link>
                    </div>

                    <div className='flex flex-row flex-wrap gap-1 min-h-[28px] z-10'>
                        {Array.isArray(data.tags) && data.tags.length > 0 && (
                            data.tags.slice(0, 3).map((tag) => (
                                <span key={tag.id} className='text-gray-600 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-[var(--primary)]/10 hover:to-[var(--primary)]/5 hover:text-[var(--primary)] transition-all duration-300 font-medium text-xs px-2 py-1 rounded-full border border-gray-200'>#{tag.name}</span>
                            ))
                        )}
                    </div>
                    <div className="flex-1 z-10">
                        <Link href={`/courses/${data.id}`}>
                          <h2 className='text-[var(--secondary)] text-base md:text-md font-semibold leading-6 line-clamp-2 hover:text-[var(--primary)] duration-300 min-h-[3rem] font-lato'>
                            {data.title || 'Untitled Course'}
                          </h2>
                        </Link>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-200 z-10">
                        <div className="flex flex-row relative justify-between items-center">
                            <div className="">
                              <p className="text-xs text-gray-600 mb-0.5 font-medium">Price</p>
                              <h2 className='text-xl font-semibold text-[var(--primary)] font-poppins'>$ {data.price || 'N/A'}</h2>
                            </div>
                            <div className="flex flex-col items-end">
                              <p className="text-xs text-gray-500 mb-0.5">Type</p>
                              <span className='text-sm font-bold text-[var(--secondary)] '>{data.course_type || 'Course'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}





            </div>
        </div>
            <div className='text-center flex mt-14 lg:mt-16'>
                <Link href="/courses" className='text-center font-raleway font-bold px-10 py-4 mx-auto bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]/90 hover:from-[var(--primary)] hover:to-[var(--primary)]/90 text-white duration-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all'>
                 Explore More Courses →
                </Link>
            </div>
      </div>
    </div>
  )
}

export default Course
