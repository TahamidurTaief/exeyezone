// components/PackageComponent.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ClockIcon, RevisionIcon } from "@/public/icons/HireUsIcons";
import ServiceConfirmForm from "./ServiceConfirmForm";

function buildLookup(arr) {
  // e.g. { Basic: { … }, Custom: { … }, Premium: { … } }
  return arr.reduce((map, item) => {
    map[item.package_type] = {
      title: `${item.package_type} Package`,
      price: `$${item.price}`,
      description: item.description,
      delivery: `${item.delivery_time} Days Delivery`,
      revision: `${item.revision_count} Times Revision`,
    };
    return map;
  }, {});
}




export const PackageComponent = ({ pkg, service }) => {
  const [selectedPackage, setSelectedPackage] = useState("Basic");
  const [confirmPackage, setConfirmPackage] = useState(false);

  if (!Array.isArray(pkg) || pkg.length === 0) {
    return <p className="text-red-600">No package data available.</p>;
  }

  const lookup = buildLookup(pkg);

  return (
    <div className="w-full h-auto lg:w-[40%] 2xl:w-[35%] hidden lg:block">
      <div className="h-auto border border-gray-400 p-5 rounded-lg">
        {/* Buttons */}
        <div className="flex flex-row gap-5">
          {Object.keys(lookup).map((key) => (
            <button
              key={key}
              className={`w-1/3 py-3 rounded-sm text-center border font-poppins transition duration-300 ${
                selectedPackage === key
                  ? "border-[var(--primary)] shadow-md scale-105 text-[var(--primary)]"
                  : "border-gray-500 bg-white"
              } hover:border-[var(--primary)] hover:shadow-md hover:scale-105`}
              onClick={() => setSelectedPackage(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <hr className="mt-7" />

        {/* Content */}
        <div className="mt-7">
          <div className="flex justify-between">
            <h5 className="font-lato font-semibold">
              {lookup[selectedPackage].title}
            </h5>
            <h5 className="text-xl font-semibold font-lato">
              {lookup[selectedPackage].price}
            </h5>
          </div>

          <p className="font-lato mt-3">
            {lookup[selectedPackage].description}
          </p>

          <div className="flex justify-between mt-6">
            <div className="flex items-center gap-1">
              <ClockIcon />
              <span className="font-semibold text-gray-800">
                {lookup[selectedPackage].delivery}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <RevisionIcon />
              <span className="font-semibold text-gray-800">
                {lookup[selectedPackage].revision}
              </span>
            </div>
          </div>

          <div
            className="bg-[var(--secondary)] text-center py-3 rounded-md text-white mt-7 font-medium font-lato text-md cursor-pointer hover:bg-opacity-80"
            onClick={() => setConfirmPackage(true)}
          >
            Continue
          </div>
        </div>
      </div>

      {/* Quote Box */}
      <div className="border-0 bg-gray-100 p-5 rounded-lg mt-7">
        <h1 className="text-md font-lato font-medium text-center text-gray-700">
          Do you have any special requirements?
        </h1>
        <div className="flex justify-center mt-3">
          <Link
            href="/getquote"
            className="uppercase font-raleway font-medium bg-white hover:bg-[var(--primary)] hover:text-white duration-200 border py-2 px-4 rounded-md"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Modal */}
      {confirmPackage && (
        <ServiceConfirmForm onClose={() => setConfirmPackage(false)} pkg={lookup[selectedPackage].title} service={service} />
      )}
    </div>
  );
};

export const MobilePackageComponent = ({ pkg, service }) => {
  const [selectedPackage, setSelectedPackage] = useState("Basic");
  const [confirmPackage, setConfirmPackage] = useState(false);

  if (!Array.isArray(pkg) || pkg.length === 0) {
    return <p className="text-red-600">No package data available.</p>;
  }

  const lookup = buildLookup(pkg);

  return (
    <div className="lg:hidden mt-10 w-full">
      <div className="border border-gray-400 p-5 rounded-lg">
        {/* Buttons */}
        <div className="flex flex-row gap-5">
          {Object.keys(lookup).map((key) => (
            <button
              key={key}
              className={`w-1/3 py-3 rounded-sm text-center border font-poppins transition duration-300 ${
                selectedPackage === key
                  ? "border-[var(--primary)] shadow-md scale-105 text-[var(--primary)]"
                  : "border-gray-500 bg-white"
              } hover:border-[var(--primary)] hover:shadow-md hover:scale-105`}
              onClick={() => setSelectedPackage(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <hr className="mt-7" />

        {/* Content */}
        <div className="flex justify-between mt-7">
          <h5 className="font-lato font-semibold">
            {lookup[selectedPackage].title}
          </h5>
          <h5 className="text-xl font-semibold font-lato">
            {lookup[selectedPackage].price}
          </h5>
        </div>

        <p className="font-lato text-sm md:text-md mt-3">
          {lookup[selectedPackage].description}
        </p>

        <div className="flex justify-between mt-6">
          <div className="flex items-center gap-1">
            <ClockIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm md:text-md font-semibold text-gray-800">
              {lookup[selectedPackage].delivery}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <RevisionIcon className="w-5 h-5 text-gray-600" />
            <span className="text-sm md:text-md font-semibold text-gray-800">
              {lookup[selectedPackage].revision}
            </span>
          </div>
        </div>

        <div
          onClick={() => setConfirmPackage(true)}
          className="bg-[var(--secondary)] text-center py-3 rounded-md text-white mt-7 font-medium font-lato text-md cursor-pointer hover:bg-opacity-80"
        >
          Continue
        </div>
      </div>

      {/* Quote Box */}
      <div className="bg-gray-100 p-5 rounded-lg mt-7">
        <h1 className="text-md font-lato font-medium text-center text-gray-700">
          Do you have any special requirements?
        </h1>
        <div className="flex justify-center mt-3">
          <Link
            href="/getquote"
            className="uppercase font-raleway font-medium bg-white hover:bg-[var(--primary)] hover:text-white duration-200 border py-2 px-4 rounded-md"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {confirmPackage && (
        <ServiceConfirmForm onClose={() => setConfirmPackage(false)} pkg={lookup[selectedPackage].title} service={service} />
      )}
    </div>
  );
};
