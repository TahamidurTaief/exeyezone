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
            <h2 className='text-2xl md:text-4xl text-center font-lato font-bold'>Our Latest <span className="text-[var(--primary)]">Courses</span></h2>
        </div>
        <div className="flex ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-between gap-4 md:gap-6 w-full">


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
                <div key={index} className="relative flex flex-col transform hover:scale-105 duration-300 gap-4 w-full bg-white border-2 border-gray-100 hover:border-[var(--primary)] rounded-lg p-3 md:p-4 shadow-md hover:shadow-xl transition-all">
                    <div className="rounded-lg w-full relative overflow-hidden group">
                        <Link href={`/courses/${data.id}`}>
                          <div className="relative w-full h-[200px]">
                            <Image 
                              src={data.img || noImage} 
                              alt={data.title || 'Course Image'}  
                              fill
                              className='object-cover rounded-lg group-hover:scale-110 transition-transform duration-500'
                            />
                          </div>
                        </Link>
                    </div>

                    <div className='flex flex-row flex-wrap gap-2 min-h-[24px]'>
                        {Array.isArray(data.tags) && data.tags.length > 0 && (
                            data.tags.slice(0, 3).map((tag) => (
                                <span key={tag.id} className='text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 font-medium text-xs px-3 py-1 rounded-full'>#{tag.name}</span>
                            ))
                        )}
                    </div>
                    <div className="flex-1">
                        <Link href={`/courses/${data.id}`}>
                          <h2 className='text-[var(--secondary)] text-base md:text-lg font-semibold leading-6 line-clamp-2 hover:text-[var(--primary)] duration-200 min-h-[3rem]'>
                            {data.title || 'Untitled Course'}
                          </h2>
                        </Link>
                    </div>
                    <div className="mt-auto pt-3 border-t border-gray-200">
                        <div className="flex flex-row relative justify-between items-center">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Price</p>
                              <h2 className='text-xl font-bold text-[var(--primary)]'>৳ {data.price || 'N/A'}</h2>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500 mb-1">Type</p>
                              <span className='text-sm font-semibold text-[var(--secondary)] bg-gray-100 px-3 py-1 rounded-full'>{data.course_type || 'Course'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}





            </div>
        </div>
            <div className='text-center flex mt-10 lg:mt-14'>
                <Link href="/courses" className='text-center font-lato px-8 py-3 mx-auto border-2 border-[var(--secondary)] hover:border-[var(--primary)] text-[var(--secondary)] hover:text-white duration-300 hover:bg-[var(--primary)] font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all'>
                 Explore More Courses
                </Link>
            </div>
      </div>
    </div>
  )
}

export default Course
