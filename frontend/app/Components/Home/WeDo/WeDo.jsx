import Image from "next/image";
import Link from "next/link";


import custom_dev_img from "@/public/img/custom_design.png";
import ecom_solution_img from "@/public/img/ecom-solution.jpg";


const WeDo = () => {
  return (
    <div className='mt-14 xl:mt-20 pb-20'>
        <div className="container relative">
            <h1 className='text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-[var(--secondary)] font-raleway font-bold'>What we do</h1>


            <div className="flex flex-col sm:flex-row flex-wrap mt-10 justify-between gap-7">
                


                {/* GRAPHIC DESIGN */}
                <div className='flex flex-col p-5 rounded-lg border border-gray-300 w-[18.321rem]'>
                    <svg className="bg-[#FFEEEF] p-3 rounded-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="47" height="47 ">
                    <path d="M45.96 50.58c-.83 0-1.5.67-1.5 1.5 0 3.64-2.96 6.6-6.6 6.6h-1.82c-3.64 0-6.6-2.96-6.6-6.6v-7.42c0-8.12-6.61-14.73-14.73-14.73h-3.58c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h3.58c6.47 0 11.73 5.26 11.73 11.73v7.42c0 5.29 4.31 9.6 9.6 9.6h1.82c5.29 0 9.6-4.31 9.6-9.6 0-.83-.67-1.5-1.5-1.5z" fill="black"/>
                    <path d="M92.52 8.55c-1.72-1.72-4.54-1.72-6.28.01l-6.12 6.13H10.98c-4.01 0-7.27 3.26-7.27 7.27v48.56c0 4.01 3.26 7.27 7.27 7.27H39.1c-.03.29-.06.61-.12.97-.39 2.59-1.62 6.72-5.52 9.51-.85.6-1.82 1.15-2.93 1.59-.33.13-.6.38-.76.68s-.23.65-.16 1.01c.14.71.75 1.21 1.47 1.21h32.14c.72 0 1.34-.51 1.47-1.21.07-.35.01-.71-.16-1.01-.16-.3-.42-.54-.76-.68-1.11-.45-2.09-.99-2.93-1.59-3.9-2.79-5.14-6.91-5.52-9.51-.05-.36-.09-.68-.12-.97h28.12c4.01 0 7.27-3.26 7.27-7.27V22.96l5.02-5.02a4.39 4.39 0 0 0 1.3-3.16c0-1.19-.47-2.3-1.3-3.13zm-38.65 38.55l3.21 3.21-3.94.72zm-1.65 30.68c.05.53.13 1.17.26 1.89.52 2.86 1.88 6.95 5.43 10.07H36.4c3.55-3.12 4.91-7.2 5.43-10.07.13-.72.21-1.36.26-1.89zm35.38-7.27a4.28 4.28 0 0 1-4.27 4.27H10.98a4.28 4.28 0 0 1-4.27-4.27V21.95a4.28 4.28 0 0 1 4.27-4.27h66.14L51.87 42.94c-.01.01-.01.01-.02.01-.02.02-.03.06-.06.08-.09.11-.17.22-.23.35-.03.07-.05.14-.07.21-.02.05-.04.1-.05.15l-1.63 8.89c-.09.48.07.98.42 1.33.08.08.17.15.26.21.03.02.06.03.09.05.07.04.14.07.22.1l.1.03c.08.02.15.03.23.04.03 0 .07.01.1.01.02 0 .04.01.06.01.09 0 .18-.01.27-.02l8.89-1.63c.06-.01.11-.04.17-.06s.12-.03.18-.06c.15-.07.29-.16.41-.28.01-.01.02-.01.02-.02L87.6 25.96zm5.9-54.69L60.17 49.15l-5.14-5.14L81.8 17.24c.01-.01.01-.02.02-.03l6.53-6.53c.57-.56 1.48-.57 2.04-.02l3.11 3.11c.27.27.42.63.42 1.01 0 .4-.15.77-.42 1.04z" fill="black"/>
                    </svg>



                    <div className="flex flex-col gap-2 md:gap-4  mt-3">
                        <Link href="/services"><h2 className='font-raleway text-2xl  text-[var(--secondary)] font-semibold hover:text-[var(--primary)] duration-200'>Graphic Design</h2></Link>
                        <p className='text-gray-500 text-sm font-lato font-normal'>We create visually compelling designs that elevate your brand and captivate your audience.</p>
                    </div>
                </div>



                {/* WEB DESIGN */}
                <div className='flex flex-col p-5 rounded-lg border border-gray-300 w-[18.321rem]'>
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.21875" y="0.234375" width="46.0625" height="46.0625" rx="9" fill="#FFEEEF"/>
                    <path d="M23.25 14.8906V15.9375M23.25 30.5938V31.6406M15.997 19.0781L16.9036 19.6016M29.5964 26.9297L30.5029 27.4531M30.5029 19.0781L29.5964 19.6016M16.9036 26.9297L15.997 27.4531M27.4375 23.2656C27.4375 20.9529 25.5626 19.0781 23.25 19.0781C20.9373 19.0781 19.0625 20.9529 19.0625 23.2656C19.0625 25.5783 20.9373 27.4531 23.25 27.4531C25.5626 27.4531 27.4375 25.5783 27.4375 23.2656Z" stroke="#252432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>


                    <div className="flex flex-col gap-2 md:gap-4  mt-3">
                        <Link href="/services"><h2 className='font-raleway text-2xl  text-[var(--secondary)] font-semibold hover:text-[var(--primary)] duration-200'>UI/UX Design</h2></Link>
                        <p className='text-gray-500 text-sm font-lato font-normal'>We craft intuitive UIs and seamless UX designs that combine aesthetics and functionality, enhancing user satisfaction and engagement.</p>
                    </div>
                </div>



                {/* UI/UX DESIGN */}
                <div className='flex flex-col p-5 rounded-lg border border-gray-300 w-[18.321rem]'>
                <svg className="bg-[#FFEEEF] p-3 rounded-lg"  xmlns="http://www.w3.org/2000/svg" width="47"   height="47"  viewBox="0 0 24 24"><g><path d="M20 1.25H4C2.48 1.25 1.25 2.48 1.25 4v16c0 1.52 1.23 2.75 2.75 2.75h16c1.52 0 2.75-1.23 2.75-2.75V4c0-1.52-1.23-2.75-2.75-2.75zM2.75 4c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25v1.25H2.75zm18.5 16c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25V6.75h18.5zM5.3 14.53a.754.754 0 0 1 0-1.06l2.5-2.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06L6.89 14l1.97 1.97c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22zm9.83 1.44L17.1 14l-1.97-1.97c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l2.5 2.5c.29.29.29.77 0 1.06l-2.5 2.5c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06zm-5.08 1.81 2.45-8c.12-.39.54-.62.94-.5s.62.54.5.94l-2.45 8a.76.76 0 0 1-.94.5.75.75 0 0 1-.5-.94z" fill="#000000"/></g></svg>


                    <div className="flex flex-col gap-2 md:gap-4  mt-3">
                        <Link href="/services"><h2 className='font-raleway text-2xl  text-[var(--secondary)] font-semibold hover:text-[var(--primary)] duration-200'>Web Development</h2></Link>
                        <p className='text-gray-500 text-sm font-lato font-normal'>We provide custom web design and development, delivering stunning visuals and robust systems for a seamless online presence.</p>
                    </div>
                </div>



                {/* SOFRWARE DEVELOPMENT */}
                <div className='flex flex-col p-5 rounded-lg border border-gray-300 w-[18.321rem]'>
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.28125" y="0.234375" width="46.0625" height="46.0625" rx="9" fill="#FFEEEF"/>
                    <path d="M21.2188 30.5938H17.0312C15.2967 30.5938 13.8906 29.1877 13.8906 27.4531V18.0312C13.8906 16.2967 15.2967 14.8906 17.0312 14.8906H29.5938C31.3283 14.8906 32.7344 16.2967 32.7344 18.0312V27.4531C32.7344 29.1877 31.3283 30.5938 29.5938 30.5938H25.4062M21.2188 30.5938V33.7344M21.2188 30.5938H25.4062M25.4062 30.5938V33.7344M21.2188 33.7344H25.4062M21.2188 33.7344H20.1719M25.4062 33.7344H26.4531" stroke="#252432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>


                    <div className="flex flex-col gap-2 md:gap-4  mt-3">
                        <Link href="/services"><h2 className='font-raleway text-2xl  text-[var(--secondary)] font-semibold hover:text-[var(--primary)] duration-200'>Software Dev</h2></Link>
                        <p className='text-gray-500 text-sm font-lato font-normal'>We create innovative, user-friendly mobile apps that are engaging and aligned with your business goals.</p>
                    </div>
                </div>




                




                {/* E-COMMERCE SOLUTION */}
                <div className='flex flex-col 2xl:flex-row p-5 rounded-lg border border-gray-300 w-[18.321rem] 2xl:w-[38.5rem]'>
                    <div className='2xl:flex 2xl:flex-col'>
                        <svg className="bg-[#FFEEEF] p-3 rounded-lg" xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 512 512" fill="currentColor"><g><path d="M329.978 290.347H183.259a11.248 11.248 0 0 1-10.666-7.679l-52.806-157.82H87.224a12.772 12.772 0 0 1-12.912-12.265 12.5 12.5 0 0 1 12.5-12.735h35.863a20.992 20.992 0 0 1 19.907 14.331l50.58 151.168h126.652l26.319-85.738H197.962a12.772 12.772 0 0 1-12.913-12.265 12.5 12.5 0 0 1 12.5-12.735h167.192a11.247 11.247 0 0 1 10.752 14.548L340.73 282.4a11.246 11.246 0 0 1-10.752 7.947Z"></path><path d="M395.884 513.093H116.116a12.5 12.5 0 0 1 0-25h279.768a12.5 12.5 0 1 1 0 25Z"></path><path d="M461.967 417.279H50.033A52.092 52.092 0 0 1-2 365.246V73.7a52.092 52.092 0 0 1 52.033-52.03h411.934A52.092 52.092 0 0 1 514 73.7v291.546a52.092 52.092 0 0 1-52.033 52.033ZM50.033 46.67A27.064 27.064 0 0 0 23 73.7v291.546a27.064 27.064 0 0 0 27.033 27.033h411.934A27.064 27.064 0 0 0 489 365.246V73.7a27.064 27.064 0 0 0-27.033-27.03Z"></path><path d="M314.271 510.4a12.5 12.5 0 0 1-12.5-12.5v-91.85a12.5 12.5 0 0 1 25 0v91.85a12.5 12.5 0 0 1-12.5 12.5Z"></path><path d="M197.729 510.4a12.5 12.5 0 0 1-12.5-12.5v-91.85a12.5 12.5 0 0 1 25 0v91.85a12.5 12.5 0 0 1-12.5 12.5Z"></path><path d="M219.668 343.446a17.668 17.668 0 1 1 17.669-17.668 17.688 17.688 0 0 1-17.669 17.668Z"></path><path d="M289.332 343.446A17.668 17.668 0 1 1 307 325.778a17.689 17.689 0 0 1-17.668 17.668Z"></path></g></svg>


                    <div className="flex flex-col gap-2 md:gap-4 mt-3 2xl:w-full 2xl:pr-10">
                        <Link href="/services"><h2 className='font-raleway text-2xl  text-[var(--secondary)] font-semibold hover:text-[var(--primary)] duration-200'>E-commerce Solution</h2></Link>
                        <p className='text-gray-500 text-sm font-lato font-normal'>We deliver tailored e-commerce solutions, offering seamless shopping experiences and robust functionality to drive your online business success.</p>
                    </div>
                </div>
                    <div className='hidden 2xl:block'>
                        <Image src={ecom_solution_img} alt='Exeyezone ecommerce solution' placeholder="blur" className=' rounded-lg' width="550" />
                    </div>
                </div>




                {/* CUSTOM DEVELOPMENT */}
                <div className='flex flex-col 2xl:flex-row p-5 rounded-lg border border-gray-300 w-[18.321rem] 2xl:w-[38.5rem]'>
                    <div className='2xl:flex 2xl:flex-col'>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="46.0625" height="46.0625" rx="9" fill="#FFEEEF"/>
                        <path d="M20.0474 27.9711C19.9377 27.9711 19.8316 27.932 19.7482 27.8607L16.7569 25.3136C16.7059 25.2702 16.6649 25.2163 16.6369 25.1555C16.6088 25.0947 16.5943 25.0286 16.5943 24.9616C16.5943 24.8947 16.6088 24.8285 16.6369 24.7678C16.6649 24.707 16.7059 24.653 16.7569 24.6096L19.7482 22.0626C19.8415 21.9831 19.9625 21.9439 20.0847 21.9537C20.2069 21.9634 20.3202 22.0213 20.3998 22.1146C20.5651 22.3091 20.5419 22.6008 20.3474 22.7662L17.7696 24.9615L20.3474 27.1567C20.4195 27.218 20.471 27.3 20.495 27.3916C20.519 27.4831 20.5144 27.5798 20.4817 27.6686C20.4489 27.7574 20.3897 27.8341 20.3121 27.8881C20.2344 27.9422 20.1421 27.9712 20.0474 27.9711ZM25.9525 27.9711C25.8218 27.9711 25.6918 27.9159 25.6005 27.8083C25.521 27.715 25.4818 27.5939 25.4916 27.4717C25.5014 27.3495 25.5593 27.2362 25.6526 27.1567L28.2304 24.9615L25.6526 22.7662C25.5626 22.6858 25.5076 22.5734 25.4994 22.4529C25.4912 22.3325 25.5304 22.2137 25.6087 22.1218C25.6869 22.0299 25.798 21.9723 25.9182 21.9612C26.0384 21.9501 26.1581 21.9865 26.2518 22.0625L29.2431 24.6096C29.2941 24.653 29.335 24.7069 29.3631 24.7677C29.3912 24.8285 29.4057 24.8946 29.4057 24.9616C29.4057 25.0285 29.3912 25.0946 29.3631 25.1554C29.335 25.2162 29.2941 25.2701 29.2431 25.3135L26.2518 27.8606C26.1684 27.9319 26.0623 27.9711 25.9526 27.9711H25.9525ZM21.9411 29.8816C21.8722 29.8816 21.8042 29.8663 21.742 29.8368C21.6798 29.8072 21.625 29.7642 21.5816 29.7107C21.5382 29.6573 21.5073 29.5948 21.4911 29.5279C21.4749 29.4609 21.4739 29.3913 21.4881 29.3239L23.3523 20.4724C23.3776 20.3525 23.4495 20.2474 23.5522 20.1805C23.6549 20.1135 23.78 20.0901 23.9 20.1154C24.02 20.1407 24.125 20.2126 24.1919 20.3153C24.2589 20.418 24.2823 20.5431 24.257 20.6631L22.3928 29.5145C22.371 29.6181 22.3142 29.7112 22.232 29.778C22.1497 29.8448 22.047 29.8814 21.9411 29.8816Z" fill="black"/>
                        <path d="M33.8962 34.7038H12.1038C10.3925 34.7038 9 33.3116 9 31.6V13.1038C9 11.3925 10.3925 10 12.1038 10H33.8962C35.6075 10 37 11.3925 37 13.1038V31.6C37 33.3116 35.6075 34.7038 33.8962 34.7038ZM12.1038 10.9245C10.9022 10.9245 9.92453 11.9022 9.92453 13.1038V31.6C9.92453 32.8016 10.9022 33.7793 12.1038 33.7793H33.8962C35.0978 33.7793 36.0755 32.8016 36.0755 31.6V13.1038C36.0755 11.9022 35.0978 10.9245 33.8962 10.9245H12.1038Z" fill="black"/>
                        <path d="M36.5377 17.4022H9.46227C9.34102 17.4002 9.22543 17.3506 9.14041 17.2641C9.05539 17.1777 9.00775 17.0612 9.00775 16.94C9.00775 16.8187 9.05539 16.7023 9.14041 16.6158C9.22543 16.5294 9.34102 16.4798 9.46227 16.4777H36.5377C36.659 16.4798 36.7746 16.5294 36.8596 16.6158C36.9446 16.7023 36.9923 16.8187 36.9923 16.94C36.9923 17.0612 36.9446 17.1777 36.8596 17.2641C36.7746 17.3506 36.659 17.4002 36.5377 17.4022ZM16.8982 15.1902C16.0919 15.1902 15.4353 14.5337 15.4353 13.7273C15.4353 12.9207 16.0919 12.2644 16.8982 12.2644C17.7048 12.2644 18.3611 12.9207 18.3611 13.7273C18.3611 14.5337 17.7048 15.1902 16.8982 15.1902ZM16.8982 13.189C16.6015 13.189 16.3598 13.4304 16.3598 13.7273C16.3598 14.0242 16.6015 14.2657 16.8982 14.2657C17.1952 14.2657 17.4366 14.0243 17.4366 13.7273C17.4366 13.4303 17.1952 13.189 16.8982 13.189ZM12.4036 15.176C11.5969 15.176 10.9407 14.5198 10.9407 13.7132C10.9407 12.9065 11.5969 12.2502 12.4035 12.2502C13.2102 12.2502 13.8664 12.9065 13.8664 13.7132C13.8664 14.5198 13.2102 15.176 12.4036 15.176ZM12.4036 13.1748C12.1069 13.1748 11.8652 13.4165 11.8652 13.7132C11.8652 14.0101 12.1069 14.2515 12.4035 14.2515C12.7004 14.2515 12.9419 14.0101 12.9419 13.7132C12.9419 13.4165 12.7005 13.1748 12.4036 13.1748ZM21.3929 15.2042C20.5866 15.2042 19.9303 14.5479 19.9303 13.7412C19.9303 12.9349 20.5865 12.2786 21.3929 12.2786C22.1996 12.2786 22.8558 12.9349 22.8558 13.7412C22.8558 14.5479 22.1996 15.2042 21.3929 15.2042ZM21.3929 13.2029C21.0963 13.2029 20.8548 13.4443 20.8548 13.7412C20.8548 14.0381 21.0963 14.2796 21.3929 14.2796C21.6898 14.2796 21.9313 14.0381 21.9313 13.7412C21.9313 13.4443 21.6898 13.2029 21.3929 13.2029Z" fill="black"/>
                        </svg>
                    

                        <div className="flex flex-col gap-2 md:gap-4 mt-3 w-full 2xl:w-full 2xl:pr-8">
                            <Link href="/services"><h2 className='font-raleway text-2xl  text-[var(--secondary)] font-semibold hover:text-[var(--primary)] duration-200'>Custom Development</h2></Link>
                            <p className='text-gray-500 text-sm font-lato font-normal'>We deliver tailored software solutions to meet your unique business needs, ensuring innovation and scalability.</p>
                        </div>
                    </div>
                        <div className='hidden 2xl:block'>
                            <Image src={custom_dev_img} alt='Exeyezone ecommerce solution' placeholder="blur" width="500" />
                        </div>
                    
                </div>




            </div>
        </div>
    </div>
  )
}

export default WeDo
