import { AppDevIcon, PlayButtonIcon, UserIcon } from '@/public/icons/CourseIcons'
import Image from 'next/image'
import Link from 'next/link'




import flutter from "@/public/img/course/flutter.jpg"
import mern from "@/public/img/course/mern.jpg"
import php_laravel from "@/public/img/course/php_laravel.jpg"
import python_django from "@/public/img/course/python_django.jpg"
import wordpress from "@/public/img/course/wordpress.jpg"
import Hero from '../Components/Course/Hero'




const page = () => {



const course_category=[
    {
        title: "App Development",
        sold: 122,
        video: 129
    },
    {
        title: "Web Development",
        sold: 122,
        video: 129
    },
    {
        title: "UI/UX Development",
        sold: 122,
        video: 129
    },
    {
        title: "Competitive Programming",
        sold: 122,
        video: 129
    },
    {
        title: "Cyber Security",
        sold: 122,
        video: 129
    },
    {
        title: "Graphic Design",
        sold: 122,
        video: 129
    },
]



  return (
    <div className='pt-32 pb-20'>
      <div className="container">
        <Hero />
                <div className="justify-center text-center mt-10">
                    <h1 className="font-raleway text-xl md:text-2xl xl:text-4xl text-[var(--primary)] font-bold">Our Courses</h1>
                    <p className="mt-4 font-mont text-gray-600 text-sm">We offer all the trendy courses that are in demand in the global market. In addition, you are getting lab facilities where high-end computers with the required configuration are ready to facilitate your learning. After class, you can practice the topic in our labs to grow your skills. The courses are designed to make you confident throughout the learning journey with exeyezone</p>
                </div>


                <div className="mt-20">
                    <h1 className="font-raleway text-center text-xl md:text-2xl xl:text-3xl text-[var(--primary)] font-bold">Our Course <span className="text-[var(--secondary)]">Categories</span></h1>
                
                
                    <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 gap-y-14 mt-20">


                    {course_category.map((data, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-2 md:p-5  my-5 smin-w-44 max-w-72  border-[1px] hover:scale-105 duration-200">
                            <div className="-mt-12 ">
                                <AppDevIcon />                                
                            </div>
                            <h2 className="font-raleway text-lg md:text-xl font-semibold my-3"><a href="">{data.title}</a></h2>
                            <div className="flex text-gray-600 items-center gap-4">
                                <div><PlayButtonIcon/></div>
                                <p className="font-mont text-gray-600">{data.video} Courses</p>
                            </div>
                            <div className="flex text-gray-600 items-center gap-4 mt-3">
                                <div><UserIcon/></div>
                                <p className="font-mont text-gray-600">{data.sold} Sold</p>
                            </div>

                            <div className="justify-center text-center bg-[var(--secondary)] py-2 rounded-lg mt-5">
                                <Link href="" className="font-poppins font-normal w-full text-white">View Details</Link>
                            </div>
                        </div>
                    ))}
                        


                        


                        

                    </div>
                
                </div>





                {/* <!-- COURSE SECTION START HERE --> */}
      <div>
        <div className=" mt-20 md:mt-20 pb-10 font-lato">
          <div className='justify-strt text-center text-[var(--secondary)] pb-5'>
              <h2 className='text-2xl md:text-4xl text-start font-raleway font-bold'>Application <span className="text-[var(--primary)]">Development</span></h2>
          </div>
          <div className="flex ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 justify-around gap-6 lg:gap-6 xl:gap-6">
  
  
                  {/* <!-- CARDS CODE START FROM HERE --> */}
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
                          <h2 className='text-lg font-normal text-[var(--secondary)]'>Live</h2>
                      </div>
                  </div>
                  {/* <!-- CARDS CODE START END HERE --> */}
  
                  {/* <!-- CARDS CODE START FROM HERE --> */}
                  <div className="flex flex-col gap-4 transform hover:scale-105 duration-300  min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                      <div className="rounded-md w-full">
                          <Image src={wordpress} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
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
                  {/* <!-- CARDS CODE START END HERE --> */}
  
                  {/* <!-- CARDS CODE START FROM HERE --> */}
                  <div className="flex flex-col gap-4 transform hover:scale-105 duration-300  min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                      <div className="rounded-md w-full">
                          <Image src={flutter} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
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
                  {/* <!-- CARDS CODE START END HERE --> */}
  
                  {/* <!-- CARDS CODE START FROM HERE --> */}
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
                  {/* <!-- CARDS CODE START END HERE --> */}
  
                  {/* <!-- CARDS CODE START FROM HERE --> */}
                  <div className="hidden  2xl:flex flex-col gap-4 transform hover:scale-105 duration-300 min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                      <div className="rounded-md w-full">
                          <Image src={mern} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
                      </div>
  
                      <div>
                          <p className='text-gray-500 font-medium text-xs md:text-sm'>Mongodb, Rect, Node, Express</p>
                      </div>
                      <div>
                          <h2 className='text-[var(--secondary)] text-xl sm:text-lg md:text-md xl:text-md font-semibold md:leading-6'>Full Stack web development with Js(MERN).</h2>
                      </div>
                      <div className="flex flex-row justify-between">
                          <h2 className='text-lg font-bold text-[var(--primary)]'>500$</h2>
                          <h2 className='text-lg font-bold text-[var(--secondary)]'>Live</h2>
                      </div>
                  </div>
                  {/* <!-- CARDS CODE START END HERE --> */}
  
  
              </div>
          </div>
        </div>




        <div className=" mt-20 md:mt-20 pb-10 font-lato">
            <div className='justify-strt text-center text-[var(--secondary)] pb-5'>
                <h2 className='text-2xl md:text-4xl text-start font-raleway font-bold'>Web <span className="text-[var(--primary)]">Development</span></h2>
            </div>
            <div className="flex ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5 justify-around gap-6 lg:gap-6 xl:gap-6">
    
    
                    {/* <!-- CARDS CODE START FROM HERE --> */}
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
                            <h2 className='text-lg font-normal text-[var(--secondary)]'>Live</h2>
                        </div>
                    </div>
                    {/* <!-- CARDS CODE START END HERE --> */}
    
                    {/* <!-- CARDS CODE START FROM HERE --> */}
                    <div className="flex flex-col gap-4 transform hover:scale-105 duration-300  min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                        <div className="rounded-md w-full">
                            <Image src={wordpress} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
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
                    {/* <!-- CARDS CODE START END HERE --> */}
    
                    {/* <!-- CARDS CODE START FROM HERE --> */}
                    <div className="flex flex-col gap-4 transform hover:scale-105 duration-300  min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                        <div className="rounded-md w-full">
                            <Image src={flutter} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
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
                    {/* <!-- CARDS CODE START END HERE --> */}
    
                    {/* <!-- CARDS CODE START FROM HERE --> */}
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
                    {/* <!-- CARDS CODE START END HERE --> */}
    
                    {/* <!-- CARDS CODE START FROM HERE --> */}
                    <div className="hidden  2xl:flex flex-col gap-4 transform hover:scale-105 duration-300 min-w-[16rem] w-full max-w-[23.125rem] border-2 border-gray-100 rounded-md p-3 md:p-4 shadow-md md:shadow-lg">
                        <div className="rounded-md w-full">
                            <Image src={mern} alt='Web development course exeyezone' placeholder='blur' className='w-full rounded-md'/>
                        </div>
    
                        <div>
                            <p className='text-gray-500 font-medium text-xs md:text-sm'>Mongodb, Rect, Node, Express</p>
                        </div>
                        <div>
                            <h2 className='text-[var(--secondary)] text-xl sm:text-lg md:text-md xl:text-md font-semibold md:leading-6'>Full Stack web development with Js(MERN).</h2>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h2 className='text-lg font-bold text-[var(--primary)]'>500$</h2>
                            <h2 className='text-lg font-bold text-[var(--secondary)]'>Live</h2>
                        </div>
                    </div>
                    {/* <!-- CARDS CODE START END HERE --> */}
    
    
                </div>
            </div>
          </div>
      </div>
      {/* <!-- COURSE SECTION END HERE --> */}
            </div>
    </div>
  )
}


export default page
