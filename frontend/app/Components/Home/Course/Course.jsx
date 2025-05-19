// 'use client'

import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"
// import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import api from '@/utils/axios'; // Axios instance
import SkeletonComponent from '@/app/Components/SkeletonComponent/SkeletonComponent';






const Course = ({courses}) => {


    
  return (
    <div>
      <div className="container mt-0 md:mt-0 font-lato">
        <div className='justify-center text-center text-[var(--secondary)] pb-10'>
            <h2 className='text-2xl md:text-4xl text-center font-lato font-bold'>Our Latest <span className="text-[var(--primary)]">Courses</span></h2>
        </div>
        <div className="flex ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-between gap-6 lg:gap-6 xl:gap-6">


        {courses.length === 0 ? (
            <div className="flex flex-row gap-5">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="">
                        <SkeletonComponent />
                    </div>                    
                ))}

            </div>
          
        ) : (
            courses.map((data, index) => (
                <div key={index} className="relative flex flex-col transform hover:scale-105 duration-300 gap-4 min-w-[16rem] w-full border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                    <div className="rounded-md w-full relative">
                        <Link href="/"><Image src={data.img} alt={data.title}  width={320} height={200}  className='w-full rounded-md'/></Link>
                    </div>

                    <div className='flex flex-row flex-wrap gap-2'>
                        {Array.isArray(data.tags) && (
                            data.tags.map((tag) => (
                                <p key={tag.id} className='text-gray-500 font-medium text-xs md:text-sm'>#{tag.name}</p>
                            ))
                        )}
                    </div>
                    <div>
                        <Link href="/"><h2 className='text-[var(--secondary)] text-xl sm:text-lg md:text-md xl:text-md font-semibold md:leading-6'>{data.title}</h2></Link>
                    </div>
                    <div className="">
                        <div className="flex flex-row relative justify-between">
                            <h2 className='text-lg font-bold text-[var(--primary)] transform hover:scale-110 duration-300'>৳ {data.price}</h2>
                            <h2 className='text-lg font-medium text-[var(--secondary)]'>{data.course_type}</h2>
                        </div>
                    </div>
                </div>
            ))
        )}





            </div>
        </div>
            <div className='text-center flex mt-10 lg:mt-14 transform hover:scale-105 duration-300 '>
                <Link href="/courses" className=' text-center font-lato px-7 py-2 mx-auto border-[var(--secondary)] hover:border-[var(--primary)] border-2 text-[var(--secondary)] hover:text-white duration-200 hover:bg-red-500 font-semibold justify-center rounded-md  items-center'>
                 Explore More Courses
                </Link>
            </div>
      </div>
    </div>
  )
}

export default Course
