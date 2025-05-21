import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin  } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";




const TeamMember = ({ team }) => {
  return (
    <div>
      <section className="container bg-white relative mt-0 z-10">
        <div className="py-0 px-4 mx-auto max-w-screen-xl lg:py-0 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 mt-20 lg:mb-16">
            <h2 className="mb-4 text-4xl font-raleway font-bold text-[var(--primary)]">
              <span className="text-[var(--secondary)]">Our</span> Team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl">
              We are a creative team focused on bringing ideas to life through thoughtful design and meaningful digital experiences.
            </p>
          </div>

          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {team.map((data, index) => (
              <div key={index} className="items-center bg-gray-50 rounded-lg shadow-lg sm:flex">
                <div className="sm:w-1/3 w-full">
                  <Image
                    className="w-full h-full object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                    src={data.profile_img}
                    alt={data.name}
                    width={300}
                    height={300}
                  />
                </div>

                <div className="p-5 sm:w-2/3">
                  <h3 className="text-xl font-bold font-raleway text-gray-900">
                    {data.name}
                  </h3>
                  <span className="text-gray-500">{data.position}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500">{data.description}</p>

                  <ul className="flex space-x-4">
                    {data.facebook && (
                      <li>
                        <Link href={data.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                          <FaFacebook  className='hover:text-blue-500 duration-200'/>
                        </Link>
                      </li>
                    )}
                    {data.linkedin && (
                      <li>
                        <Link href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                          <FaLinkedin  className='hover:text-blue-600 duration-200'/>
                        </Link>
                      </li>
                    )}
                    {data.github && (
                      <li>
                        <Link href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                          <FaGithub  className='hover:text-gray-900 duration-200'/>
                        </Link>
                      </li>
                    )}
                    {data.personal_website && (
                      <li>
                        <Link href={data.personal_website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                          <RiGlobalFill   className='hover:text-red-500 duration-200'/>
                        </Link>
                      </li>
                    )}
                    {/* Add other social links here as needed: data.twitter, data.linkedin, etc. */}
                  </ul>
                </div>
              </div>
            ))}
          </div>


          



        </div>
      </section>
    </div>
  );
};

export default TeamMember;
