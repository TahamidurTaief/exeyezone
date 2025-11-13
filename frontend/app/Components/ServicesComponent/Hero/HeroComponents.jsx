import { ServicesLottieAnimation } from "@/public/lottie/LottieAnimation";
import Link from "next/link";

const HeroComponents = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 xl:gap-16 text-black font-poppins items-center">
        {/* LEFT SIDE START HERE */}
        <div className="w-full">
          <div>
            <h2 className="text-[var(--secondary)] text-4xl font-semibold xl:text-4xl 2xl:text-6xl">
              <span className="text-[var(--primary)]">25+</span> Professional
              <br />
              Services Available
            </h2>

            <p className="text-xs 2xl:text-sm 2xl:leading-6 leading-5 text-gray-700 mt-5 font-lato">
              Explore our comprehensive range of professional services designed to bring your ideas to life. 
              Our expert team delivers high-quality solutions tailored to your needs.
            </p>
          </div>

          <div className="flex flex-row mt-5 gap-7 items-center">
            <Link href="/contact">
              <div className="bg-[var(--primary)] hover:bg-[var(--secondary)] duration-200 text-white text-sm font-poppins px-7 py-3 rounded-md cursor-pointer">
                <p className="justify-center items-center text-center font-semibold">
                  Contact Now
                </p>
              </div>
            </Link>

            <div className="flex flex-row gap-2 items-center">
              <Link href="/hireus">
                <div className="border-2 p-2 border-[var(--primary)] hover:border-[var(--secondary)] duration-200 rounded-md">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                      fill="#EE2B46"
                    />
                  </svg>
                </div>
              </Link>

              <div className="hover:text-[var(--primary)]">
                <h2 className="text-base font-semibold">
                  <Link href="/hireus">Hire us now</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT SIDE END HERE */}

        {/* RIGHT SIDE START HERE */}
        <div className="w-full md:pl-16 p-5 relative h-full">
          <div className="flex justify-center px-10 pt-5 md:pt-2 2xl:ml-10 py-5 h-full">
            <ServicesLottieAnimation />
          </div>
        </div>
        {/* RIGHT SIDE END HERE */}
      </div>
    </div>
  );
};

export default HeroComponents;
