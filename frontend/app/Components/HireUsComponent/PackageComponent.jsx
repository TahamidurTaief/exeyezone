"use client";

import { ClockIcon, RevisionIcon } from "@/public/icons/HireUsIcons";
import { useState } from "react";
import Link from "next/link";



export const PackageComponent = () => {


  
  const [selectedPackage, setSelectedPackage] = useState("Basic");


  const packages = {
    Basic: {
      title: "Basic Package",
      price: "$66",
      description:
        "Includes Complex Python project with source code, project workflow, and detailed description.",
      delivery: "7 Days Delivery",
      revision: "5 Times Revision",
    },
    Standard: {
      title: "Standard Package",
      price: "$99",
      description:
        "Includes Advanced Python project with documentation and additional support.",
      delivery: "5 Days Delivery",
      revision: "8 Times Revision",
    },
    Premium: {
      title: "Premium Package",
      price: "$149",
      description:
        "Includes Full Python project, documentation, priority support, and extra features.",
      delivery: "3 Days Delivery",
      revision: "Unlimited Revisions",
    },
  };
  

  return (
    <div className="w-full h-auto lg:w-[40%] 2xl:w-[35%] hidden lg:block">
      <div className="h-auto border-[1px] border-gray-400 p-5 rounded-lg">
        {/* Package Selection Buttons */}
        <div className="flex flex-row gap-5">
          {Object.keys(packages).map((pkg) => (
            <button
              key={pkg}
              className={`w-1/3 py-3 rounded-sm text-center border-[1px] font-poppins font-normal transition duration-300 
                ${
                  selectedPackage === pkg
                    ? "border-[var(--primary)] shadow-md scale-105 text-[var(--primary)]"
                    : "border-gray-500 bg-white"
                }
                hover:border-[var(--primary)] hover:shadow-md hover:scale-105`}
              onClick={() => setSelectedPackage(pkg)}
            >
              {pkg}
            </button>
          ))}
        </div>

        <hr className="mt-7" />

        {/* Package Content (Changes Based on Selection) */}
        <div className="mt-7">
          <div className="flex flex-row justify-between">
            <h5 className="font-lato font-semibold">
              {packages[selectedPackage].title}
            </h5>
            <h5 className="text-xl font-semibold font-raleway">
              {packages[selectedPackage].price}
            </h5>
          </div>

          <p className="font-lato mt-3">{packages[selectedPackage].description}</p>

          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-row items-center gap-1">
              <ClockIcon />
              <span className="font-semibold text-gray-800">
                {packages[selectedPackage].delivery}
              </span>
            </div>

            <div className="flex flex-row items-center gap-1">
              <RevisionIcon />
              <span className="font-semibold text-gray-800">
                {packages[selectedPackage].revision}
              </span>
            </div>
          </div>

          <div className="bg-[var(--secondary)] text-center py-3 rounded-md text-white mt-7 font-medium font-lato text-md cursor-pointer hover:bg-opacity-80">
            Continue
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="h-auto border-[0px] border-gray-400 p-5 rounded-lg mt-7 bg-gray-100">
        <h1 className="text-md font-lato font-medium text-center justify-center text-gray-700">
          Do you have any special requirements?
        </h1>

        <div className="justify-center mx-auto mt-3 flex">
          <Link href="/getquote" className="uppercase font-raleway font-medium text-center justify-center mx-auto rounded-md bg-white hover:bg-[var(--primary)] hover:shadow-md hover:text-white duration-200 border-[1px] py-2 px-4 cursor-pointer">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};











// MOBILE SECTION





export const MobilePackageComponent = () => {



    const packages = {
        Basic: {
          title: "Basic Package",
          price: "$66",
          description:
            "Includes Complex Python project with source code, project workflow, and detailed description.",
          delivery: "7 Days Delivery",
          revision: "5 Times Revision",
        },
        Standard: {
          title: "Standard Package",
          price: "$99",
          description:
            "Includes Advanced Python project with documentation and additional support.",
          delivery: "5 Days Delivery",
          revision: "8 Times Revision",
        },
        Premium: {
          title: "Premium Package",
          price: "$149",
          description:
            "Includes Full Python project, documentation, priority support, and extra features.",
          delivery: "3 Days Delivery",
          revision: "Unlimited Revisions",
        },
      };



  const [selectedPackage, setSelectedPackage] = useState("Basic");

  return (
    <div className="lg:hidden mt-10 w-full lg:w-1/3">
      <div className="h-auto border-[1px] border-gray-400 p-5 rounded-lg">
        {/* Package Selection Buttons */}
        <div className="flex flex-row gap-5">
          {Object.keys(packages).map((pkg) => (
            <button
              key={pkg}
              className={`w-1/3 py-3 rounded-sm text-center border-[1px] font-poppins font-normal transition duration-300 
              ${
                selectedPackage === pkg
                  ? "border-[var(--primary)] shadow-md scale-105 text-[var(--primary)]"
                  : "border-gray-500 bg-white"
              }
              hover:border-[var(--primary)] hover:shadow-md hover:scale-105`}
              onClick={() => setSelectedPackage(pkg)}
            >
              {pkg}
            </button>
          ))}
        </div>

        <hr className="mt-7" />

        {/* Package Content (Changes Based on Selection) */}
        <div className="flex flex-row justify-between mt-7">
          <h5 className="font-lato font-semibold">
            {packages[selectedPackage].title}
          </h5>
          <h5 className="text-xl font-semibold font-lato">
            {packages[selectedPackage].price}
          </h5>
        </div>

        <p className="font-lato text-sm md:text-md mt-3">{packages[selectedPackage].description}</p>

        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-row items-center gap-1">
            <ClockIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm md:text-md font-semibold text-gray-800">
              {packages[selectedPackage].delivery}
            </span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <RevisionIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm md:text-md font-semibold text-gray-800">
              {packages[selectedPackage].revision}
            </span>
          </div>
        </div>

        <div className="bg-[var(--secondary)] justify-center items-center text-center py-3 rounded-md text-white mt-7 font-medium font-lato text-md cursor-pointer hover:bg-opacity-80">
          Continue
        </div>
      </div>

      {/* Quote Section */}
      <div className="h-auto border-[0px] border-gray-400 p-5 rounded-lg mt-7 bg-gray-100">
        <h1 className="text-md font-lato font-medium text-center text-gray-700">
          Do you have any special requirements?
        </h1>

        <div className="justify-center mx-auto mt-3 flex">
          <a className="uppercase font-raleway font-medium text-center mx-auto rounded-md bg-white hover:bg-[var(--primary)] hover:shadow-md hover:text-white duration-200 border-[1px] py-2 px-4 cursor-pointer">
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
};
