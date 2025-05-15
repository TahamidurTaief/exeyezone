import { SearchIcon } from "@/public/icons/ProductsIcons";
import { CourseLottieAnimation, GmailLottieAnimation } from "@/public/lottie/LottieAnimation";
import Link from "next/link";





const Hero = () => {
  return (


    <div>
      <div className="container ">
        <div className="flex flex-col md:flex-row gap-10 xl:gap-20 text-black font-poppins items-center">
          {/* RIGHT SIDE START HERE */}
          <div className="w-full ">
            <div>
              <h2 className="text-[var(--secondary)] text-4xl font-semibold  xl:text-4xl 2xl:text-6xl">
                <span className="text-[var(--primary)]">Reach Out </span>to Us
                <br />
                for any Inquiries or info
              </h2>

              <p className="text-xs 2xl:text-sm 2xl:leading-6 leading-5 text-gray-700 mt-5 font-lato ">
               You can call the hotline number to know any information related to training. You can also knock on the mentioned mail or Facebook messenger.
              </p>
            </div>

            <div className="flex flex-row mt-5 gap-6 items-center">
                            <div className="bg-[var(--primary)] hover:secondary duration-200 text-white text-sm font-lato px-7 py-3 rounded-md cursor-pointer">
                                <Link href="/products"> <p className='justify-center items-center text-center font-semibold'>Our Products</p></Link>
                            </div>

                            <div className="border-2 p-2 border-[var(--primary)] hover:border-secondary duration-200 rounded-md">
                              <Link href="">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z" fill="red"/>
                              </svg>
                              </Link>
                            </div>


                            <div className='hover:text-[var(--primary)]'>
                              <h2 className='text-base font-semibold'><Link href="/">Hire us now</Link></h2>
                            </div>
                        </div>




            {/* <div className="flex flex-row mt-5 items-center gap-3 border-[1px] border-third rounded-full py-2 px-5 justify-between">
              <input
                type="text"
                className="text-gray-600 focus:ring-0 focus:border-transparent  focus:outline-none active:ring-0 text-[15px] rounded-md px-3 py-2"
                placeholder="Search by category"
              />
              <button className="bg-[var(--third)] p-3 hover:bg-sky-200 rounded-full duration-200">
                <SearchIcon />
              </button>
              
            </div> */}
          </div>

          {/* RIGHT SIDE END HERE */}

          {/* LEFT SIDE END HERE */}
          <div className="w-full md:pl-24 p-5 relative h-full">
            <div className="flex justify-center px-10 pt-5 md:pt-2 2xl:ml-10 py-5 h-full">
 

                <GmailLottieAnimation />
            </div>


          </div>
          {/* LEFT SIDE START HERE */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
