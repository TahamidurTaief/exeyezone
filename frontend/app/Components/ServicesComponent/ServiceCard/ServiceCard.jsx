"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import api from "@/utils/axios";
import { RatingIcon } from "@/public/icons/ServicesIcons";

const ServiceCard = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState([]);
  const [groupedServices, setGroupedServices] = useState({});
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const carouselRefs = useRef({});

  // Fetch services and categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, categoriesRes] = await Promise.all([
          api.get("/services/"),
          api.get("/servicecategories/"),
        ]);

        const servicesData = servicesRes.data;
        setServices(servicesData);
        setCategories([{ id: 0, name: "All" }, ...categoriesRes.data]);
        setFilteredServices(servicesData);

        // Group services by category
        const grouped = servicesData.reduce((acc, service) => {
          const categoryName = service.category;
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          acc[categoryName].push(service);
          return acc;
        }, {});
        setGroupedServices(grouped);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter services by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(
        (service) => service.category === selectedCategory
      );
      setFilteredServices(filtered);
    }
  }, [selectedCategory, services]);

  // Scroll functions for filter carousel
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Scroll functions for service carousels
  const scrollCarousel = (categoryName, direction) => {
    const container = carouselRefs.current[categoryName];
    if (container) {
      const cardWidth = 320; // Approximate card width + gap
      const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <div className="mt-20">
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
        </div>
      </div>
    );
  }

  // Service Card Component (reusable)
  const ServiceCardItem = ({ service }) => (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[var(--primary)] transition-all duration-300 hover:shadow-xl min-w-[280px] max-w-[320px] flex-shrink-0">
      {/* Image Container */}
      <Link href={`/services/${service.id}/`}>
        <div className="relative w-full h-52 overflow-hidden bg-gray-100">
          <Image
            src={
              service.service_images && service.service_images.length > 0
                ? service.service_images[0].image
                : "/img/no_image.jpg"
            }
            alt={service.title || "Service"}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-[var(--primary)] text-white px-3 py-1 rounded-full text-xs font-semibold">
            {service.category}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-grow">
        {/* Title */}
        <Link href={`/services/${service.id}/`}>
          <h2 className="text-base font-lato font-semibold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-200 line-clamp-2 min-h-[3rem]">
            {service.title}
          </h2>
        </Link>

        {/* Rating & Purchase Info */}
        <div className="flex flex-row justify-between items-center text-sm">
          <div className="flex flex-row gap-1 items-center">
            <RatingIcon />
            <span className="font-lato text-yellow-500 font-medium">
              {service.rating}
            </span>
            <span className="font-lato text-gray-500">
              ({service.purchase_number})
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                fill="currentColor"
              />
            </svg>
            <span className="font-lato text-xs">
              {service.delivery_title} Days
            </span>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Price & Button */}
        <div className="flex flex-row justify-between items-center mt-auto">
          <div>
            <p className="font-lato text-xs text-gray-500">Starting at</p>
            <p className="font-lato text-xl font-bold text-[var(--secondary)]">
              $
              {service.service_packages && service.service_packages.length > 0
                ? service.service_packages[0].price
                : "N/A"}
            </p>
          </div>

          <Link
            href={`/services/${service.id}/`}
            className="bg-[var(--primary)] hover:bg-[var(--secondary)] font-lato text-xs font-semibold text-white duration-200 px-4 py-2.5 text-center rounded-lg transition-all hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-20">
      {/* Title Section */}
      <div className="flex flex-col items-start mb-12">
        <h1 className="font-raleway text-3xl md:text-4xl xl:text-5xl text-[var(--secondary)] font-bold">
          Our <span className="text-[var(--primary)]">Services</span>
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mt-3 rounded-full"></div>
      </div>

      {/* Filter Carousel Section */}
      <div className="relative mb-16">
        <h2 className="font-raleway text-xl md:text-2xl text-[var(--secondary)] font-semibold mb-6">
          Filter by Category
        </h2>
        <div className="flex items-center gap-3">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200 shadow-md flex-shrink-0"
            aria-label="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2.5 rounded-full font-poppins text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  selectedCategory === category.name
                    ? "bg-[var(--primary)] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200 shadow-md flex-shrink-0"
            aria-label="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Filtered Services Grid */}
      <div className="mb-20">
        <h2 className="font-raleway text-xl md:text-2xl text-[var(--secondary)] font-semibold mb-6">
          {selectedCategory === "All" ? "All Services" : `${selectedCategory} Services`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceCardItem key={service.id} service={service} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg font-lato">
                No services found in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Category-Based Carousel Sections */}
      <div className="mt-20">
        <div className="flex flex-col items-start mb-12">
          <h2 className="font-raleway text-2xl md:text-3xl xl:text-4xl text-[var(--secondary)] font-bold">
            Browse by <span className="text-[var(--primary)]">Category</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mt-3 rounded-full"></div>
        </div>

        {Object.keys(groupedServices).map((categoryName) => (
          <div key={categoryName} className="mb-16">
            {/* Category Title */}
            <div className="flex flex-col items-start mb-6">
              <h3 className="font-raleway text-xl md:text-2xl text-[var(--secondary)] font-semibold">
                {categoryName}
              </h3>
              <div className="h-0.5 w-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mt-2 rounded-full"></div>
            </div>

            {/* Carousel Container */}
            <div className="relative group/carousel">
              {/* Left Arrow */}
              <button
                onClick={() => scrollCarousel(categoryName, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200 shadow-lg opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0"
                aria-label={`Scroll ${categoryName} left`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Scrollable Cards Container */}
              <div
                ref={(el) => (carouselRefs.current[categoryName] = el)}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {groupedServices[categoryName].map((service) => (
                  <ServiceCardItem key={service.id} service={service} />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scrollCarousel(categoryName, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200 shadow-lg opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0"
                aria-label={`Scroll ${categoryName} right`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
