import Image from "next/image";
import Link from "next/link";
import api from "@/utils/axios";

import { RatingIcon } from "@/public/icons/ServicesIcons";

const ServicesData = async () => {
  try {
    const res = await api.get("/services/");
    return res.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
};

const ServiceCard = async () => {
  const services = await ServicesData();

  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div className="mt-20">
      <h1 className="font-raleway text-xl md:text-2xl xl:text-4xl text-[var(--secondary)] font-bold text-center">
        Our <span className="text-[var(--primary)]">Services</span>
      </h1>

      {Object.keys(groupedServices).map((category) => (
        <div className="flex flex-col mt-10 gap-5 pb-16" key={category}>
          <h1 className="font-raleway text-2xl md:text-2xl xl:text-3xl text-[var(--secondary)] font-bold text-center justify-center">
            {category}
          </h1>

          <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-center mx-auto">
            {groupedServices[category].map((service) => (
              <div
                className="flex flex-col gap-4 min-w-[300px] max-w-[20rem] border-[1px] rounded-md drop-shadow-sm"
                key={service.id}
              >
                {/* Image Container */}
                <div className="relative w-full h-[200px] rounded-md overflow-hidden">
                  <Image
                    src={service.service_images[0].image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 px-4">
                  <div>
                    <Link href={`/services/${service.id}/`}>
                      <h1 className="text-sm md:text-[16px] leading-5 font-lato font-medium hover:text-[var(--primary)] duration-200 justify-start">
                        {service.title}
                      </h1>
                    </Link>
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-1 items-center">
                      <RatingIcon />
                      <p className="font-lato text-sm text-yellow-500">
                        {service.rating}
                      </p>
                      <p className="font-lato text-sm text-gray-800">
                        ({service.purchase_number})
                      </p>
                    </div>
                    <div>
                      <p className="font-lato text-sm">
                        <span className="font-semibold">
                          {service.delivery_title} Days
                        </span>{" "}
                        Delivery
                      </p>
                    </div>
                  </div>

                  <hr className="w-full py-1 mt-1" />

                  <div className="flex flex-row justify-between pb-5 items-center">
                    <div>
                      <p className="font-lato">
                        Starting at{" "}
                        <span className="text-xl font-semibold">
                          ${service.service_packages[0].price}
                        </span>
                      </p>
                    </div>

                    <Link
                      href={`/services/${service.id}/`}
                      className="bg-[var(--secondary)] hover:bg-[var(--primary)] font-lato text-sm uppercase text-white duration-200 px-3 py-2 text-center rounded-md"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
