import Image from 'next/image';
import Link from 'next/link';


import flutter_course from "@/public/img/course/flutter.jpg";
import php_laravel from "@/public/img/course/php_laravel.jpg";
import python_django from "@/public/img/course/python_django.jpg";
import wordpress_img from "@/public/img/course/wordpress.jpg";



const Course = () => {

    
  return (
    <div>
      <div className="container mt-0 md:mt-0 font-lato">
        <div className='justify-center text-center text-[var(--secondary)] pb-10'>
            <h2 className='text-2xl md:text-4xl text-center font-lato font-bold'>Our Latest <span className="text-[var(--primary)]">Courses</span></h2>
        </div>
        <div className="flex ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 justify-around gap-6 lg:gap-6 xl:gap-6">


                {/* CARDS CODE START FROM HERE */}
                <div className="flex flex-col transform hover:scale-105 duration-300 gap-4 min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                    <div className="rounded-md w-full">
                    <Link href="/"><Image src={python_django} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/></Link>
                    </div>

                    <div>
                        <p className='text-gray-500 font-medium text-xs md:text-sm'>Python, Django, Next</p>
                    </div>
                    <div>
                        <Link href="/"><h2 className='text-[var(--secondary)] text-xl sm:text-lg md:text-md xl:text-md font-semibold md:leading-6'>Full Stack Development with Python, Django and Next</h2></Link>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h2 className='text-lg font-bold text-[var(--primary)] transform hover:scale-125 duration-300'>520$</h2>
                        <h2 className='text-lg font-medium text-[var(--secondary)]'>Live</h2>
                    </div>
                </div>
                {/* CARDS CODE START END HERE */}

                {/* CARDS CODE START FROM HERE */}
                <div className="flex flex-col gap-4 transform hover:scale-105 duration-300  min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                    <div className="rounded-md w-full">
                        <Image src={wordpress_img} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
                    </div>

                    <div>
                        <p className='text-gray-500 font-medium text-xs md:text-sm'>Design, Illustrations, UI/UX</p>
                    </div>
                    <div>
                        <h2 className='text-[var(--secondary)] text-xl sm:text-lg md:text-md xl:text-md font-semibold md:leading-6'>Full Stack web development course 2025.</h2>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h2 className='text-lg font-bold text-[var(--primary)]'>150$</h2>
                        <h2 className='text-lg font-bold text-[var(--secondary)]'>Live</h2>
                    </div>
                </div>
                {/* CARDS CODE START END HERE */}

                {/* CARDS CODE START FROM HERE */}
                <div className="flex flex-col gap-4 transform hover:scale-105 duration-300  min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                    <div className="rounded-md w-full">
                        <Image src={flutter_course} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
                    </div>

                    <div>
                        <p className='text-gray-500 font-medium text-xs md:text-sm'>Design, Illustrations, UI/UX</p>
                    </div>
                    <div>
                        <h2 className='text-[var(--secondary)] text-xl sm:text-lg md:text-md xl:text-md font-semibold md:leading-6'>Full Stack web development course 2025.</h2>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h2 className='text-lg font-bold text-[var(--primary)]'>280$</h2>
                        <h2 className='text-lg font-bold text-[var(--secondary)]'>Recorded</h2>
                    </div>
                </div>
                {/* CARDS CODE START END HERE */}

                {/* CARDS CODE START FROM HERE */}
                <div className="hidden  2xl:flex flex-col gap-4 transform hover:scale-105 duration-300 min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                    <div className="rounded-md w-full">
                        <Image src={php_laravel} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
                    </div>

                    <div>
                        <p className='text-gray-500 font-medium text-xs md:text-sm'>PHP, Laravel, Vue</p>
                    </div>
                    <div>
                        <h2 className='text-[var(--secondary)] text-xl sm:text-lg md:text-md xl:text-md font-semibold md:leading-6'>Full Stack web development course 2025.</h2>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h2 className='text-lg font-bold text-[var(--primary)]'>120$</h2>
                        <h2 className='text-lg font-bold text-[var(--secondary)]'>Recorded</h2>
                    </div>
                </div>
                {/* CARDS CODE START END HERE */}




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
