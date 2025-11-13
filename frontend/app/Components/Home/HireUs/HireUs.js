import Image from "next/image";
import Link from "next/link";
import { RatingIcon } from "@/public/icons/ServicesIcons";
import noImage from '@/public/img/no_image.jpg';

const HireUs = ({ services }) => {
  // Limit to 8 services (2 rows: 3 on lg, 4 on 2xl)
  const displayedServices = Array.isArray(services) ? services.slice(0, 8) : [];

  return (
    <div>
      <div className="container pb-5 mt-10 md:mt-20">
        <div className="justify-center text-center text-[var(--secondary)] pb-10">
          <h2 className="text-2xl md:text-4xl text-center font-lato font-bold">
            <span className="text-[var(--primary)]">Hire Us</span> with these services.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 w-full">
            {displayedServices.length > 0 ? (
                displayedServices.map(service => (
                    <div
              className="flex flex-col w-full bg-white border border-gray-200 hover:border-[var(--primary)] rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 duration-300 transition-all overflow-hidden"
              key={service.id}
            >
              <div className="relative w-full overflow-hidden group">
                <Link href={`/services/${service.id}/`}>
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={service.images.image || noImage}
                      alt={service.title || 'Service Image'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-3 p-4 flex-1">
                <div className="min-h-[3rem]">
                  <Link href={`/services/${service.id}/`} className="flex flex-row gap-2 items-start">
                    <h1 className="text-sm md:text-base leading-5 font-lato font-semibold hover:text-[var(--primary)] duration-200 line-clamp-2">
                      {service.title || 'Untitled Service'}
                    </h1>
                  </Link>
                </div>

                <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                  <div className="flex flex-row gap-1 items-center bg-yellow-50 px-2 py-1 rounded-full">
                    <RatingIcon />
                    <p className="font-lato text-sm font-semibold text-yellow-600">{service.rating || '0.0'}</p>
                    <p className="font-lato text-xs text-gray-600">({service.reviews || 0})</p>
                  </div>

                  <div className="bg-blue-50 px-3 py-1 rounded-full">
                    <p className="font-lato text-xs text-blue-700">
                      <span className="font-semibold">{service.packages.delivery_time || 'N/A'}</span> Days
                    </p>
                  </div>
                </div>

                <hr className="w-full mt-2" />

                <div className="flex flex-row justify-between items-center flex-wrap gap-3 mt-auto">
                  <div>
                    <p className="font-lato text-xs text-gray-500 mb-1">Starting at</p>
                    <p className="text-xl font-bold text-[var(--primary)]">${service.packages.price || 'N/A'}</p>
                  </div>

                  <Link
                    href={`/services/${service.id}/`}
                    className="bg-[var(--secondary)] hover:bg-[var(--primary)] font-lato text-xs md:text-sm uppercase text-white duration-300 px-4 py-2 text-center rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    See Details
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

        <div className="text-center flex mt-10 lg:mt-14">
          <Link
            href="/services"
            className="text-center font-lato px-8 py-3 mx-auto border-2 border-[var(--secondary)] hover:border-[var(--primary)] text-[var(--secondary)] hover:text-white duration-300 hover:bg-[var(--primary)] font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
