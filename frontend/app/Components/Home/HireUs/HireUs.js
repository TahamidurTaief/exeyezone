"use client"; // <-- ADD THIS LINE

import Image from "next/image";
import Link from "next/link";
import { RatingIcon } from "@/public/icons/ServicesIcons";
import noImage from '@/public/img/no_image.jpg';

// --- New Heart Icon (for the "Favorite" button) ---
// You can place this in its own file or keep it here
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors"
  >
    <path d="m11.645 20.91-1.096-1.041c-5.13-4.868-8.547-8.1-8.547-11.84 0-3.136 2.548-5.684 5.684-5.684 1.79 0 3.492.834 4.634 2.164.122.14.26.273.408.408l.368.368.368-.368c.148-.135.286-.268.408-.408 1.142-1.33 2.844-2.164 4.634-2.164 3.136 0 5.684 2.548 5.684 5.684 0 3.74-3.417 6.972-8.547 11.84l-1.096 1.041Z" />
  </svg>
);
// --- End of Icon ---


const HireUs = ({ services }) => {
  // Limit to 8 services
  const displayedServices = Array.isArray(services) ? services.slice(0, 8) : [];

  return (
    <div>
      <div className="container pb-5 mt-10 md:mt-20">
        <div className="justify-center text-center text-[var(--secondary)] pb-10">
          <p className='text-sm md:text-base text-[var(--primary)] font-semibold tracking-wider uppercase mb-2'>Expert Solutions</p>
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-raleway font-bold">
            <span className="text-[var(--primary)]">Hire Us</span> with these services.
          </h2>
          <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>Transform your business with our professional services tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 w-full">
            {displayedServices.length > 0 ? (
                displayedServices.map(service => (
                  <div
                    className="group  p-2 flex flex-col w-full bg-white border border-gray-200 hover:border-[var(--primary)] rounded-2xl hover:shadow-lg transform hover:scale-105 duration-500 transition-all overflow-hidden"
                    key={service.id}
                  >
                    {/* Image Section */}
                    <div className="relative w-full overflow-hidden">
                      <Link href={`/services/${service.id}/`}>
                        <div className="relative w-full aspect-video"> {/* Changed to aspect-video */}
                          <Image
                            src={service.images.image || noImage}
                            alt={service.title || 'Service Image'}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </Link>

                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-2 flex-1">
                      {/* Title */}
                      <Link href={`/services/${service.id}/`} className="flex-shrink-0">
                        <h1 className="text-base md:text-md font-lato leading-6 font-semibold text-gray-800 hover:text-[var(--primary)] duration-300 line-clamp-2">
                          {service.title || 'Untitled Service'}
                        </h1>
                      </Link>

                      {/* Rating (Simplified) */}
                      <div className="flex flex-row gap-1 items-center mt-1">
                        <RatingIcon className="text-yellow-500 w-4 h-4" /> {/* Assumes RatingIcon accepts className */}
                        <p className="font-lato text-sm font-bold text-yellow-600">{service.rating || '0.0'}</p>
                        <p className="font-lato text-xs text-gray-500">({service.reviews || 0})</p>
                      </div>

                      {/* Spacer to push footer to bottom */}
                      <div className="flex-1"></div>

                      {/* Divider */}
                      <hr className="w-full mt-3 border-gray-200" />

                      {/* Footer: Price & Button */}
                      <div className="flex flex-row justify-between items-center flex-wrap gap-3 mt-2">
                        <div>
                          <p className="font-lato text-xs text-gray-600 mb-0.5 font-medium">Starting at</p>
                          <p className="text-xl font-semibold text-[var(--primary)] font-poppins">${service.packages.price || 'N/A'}</p>
                        </div>

                        <Link
                          href={`/services/${service.id}/`}
                          className="flex flex-row items-center gap-1  bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]/90 hover:from-[var(--primary)] hover:to-[var(--primary)]/90 font-poppins text-xs md:text-sm font-bold uppercase text-white duration-500 px-5 py-2 text-center rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
                        >
                          See Details
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
                ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500 text-lg">No services found</p>
                </div>
                )}

        </div>

        {/* Explore More Button */}
        <div className="text-center flex mt-14 lg:mt-16">
          <Link
            href="/services"
            className="text-center font-raleway font-bold px-10 py-3 mx-auto bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary)]/90 hover:from-[var(--primary)] hover:to-[var(--primary)]/90 text-white duration-500 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Explore More Services →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireUs;