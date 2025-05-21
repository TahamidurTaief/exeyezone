import Image from "next/image"
import Link from "next/link"



import img1 from "@/public/img/about/img1.jpg"
import img2 from "@/public/img/about/img2.jpg"
import img3 from "@/public/img/about/img3.jpg"
import img4 from "@/public/img/about/img4.jpg"
import img5 from "@/public/img/about/img5.jpg"
import img6 from "@/public/img/about/img6.jpg"
import taief_img_about from "@/public/img/about/taief_about_img.jpeg"




const AboutHero = () => {
  return (
    <div>
        <div className="container">
            
          <div className="relative md:overflow-hidden bg-white max-h-screen">
              <div className="pt-0  sm:pt-2  lg:pt-40 ">
                <div className="flex flex-col gap-6 lg:flex-row mx-auto max-w-7xl">
                  
                  
                  <div className="sm:max-w-lg">
                    <h1 className="text-2xl font-poppins font-semibold tracking-tight text-gray-900 sm:text-4xl"><span className="text-primary">Revolutionizing</span> Connections Through Innovation</h1>
                    <p className="mt-4 text-sm md:text-md xl:text-lg text-gray-500">We are a forward-thinking software company dedicated to transforming the way people connect and interact through innovative technology. Our solutions empower businesses and individuals to communicate seamlessly, collaborate efficiently, and drive meaningful digital experiences.</p>
                    <Link href="/contact" className="mt-5 inline-block rounded-md border border-transparent bg-[var(--secondary)] py-3 px-8 font-lato text-center font-medium text-white hover:bg-[var(--primary)] duration-200">Contact Us</Link>

                  </div>


                  <div>
                    <div className="mt-10 lg:pt-28">

                      <div aria-hidden="true" className="pointer-events-none mx-auto rotate-12 lg:rotate-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                        <div className="transform  sm:top-0 sm:translate-x-8 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                          <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="w-20 h-auto md:h-64 md:w-44 overflow-hidden rounded-lg lg:opacity-100">
                                <Image src={taief_img_about} alt="Tahamidur Taief"  className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="w-20 h-auto md:h-64 md:w-44 overflow-hidden rounded-lg">
                                <Image src={img1} alt="exeyezone about" className="h-full w-full object-cover object-center" />
                              </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="w-20 h-auto md:h-64 md:w-44 overflow-hidden rounded-lg">
                                <Image src={img2} alt="exeyezone about" className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="w-20 h-auto md:h-64 md:w-44 overflow-hidden rounded-lg">
                                <Image src={img3} alt="exeyezone about" className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="w-20 h-auto md:h-64 md:w-44 overflow-hidden rounded-lg">
                                <Image src={img4} alt="exeyezone about" className="h-full w-full object-cover object-center" />
                              </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="w-20 h-auto md:h-64 md:w-44 overflow-hidden rounded-lg">
                                <Image src={img5} alt="exeyezone about" className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="w-20 h-auto md:h-64 md:w-44 overflow-hidden rounded-lg">
                                <Image src={img6} alt="exeyezone about" className="h-full w-full object-cover object-center" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                </div>
              </div>
          </div>

        </div>
      </div>
  )
}

export default AboutHero
