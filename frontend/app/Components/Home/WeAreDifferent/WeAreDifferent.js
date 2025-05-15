import React from 'react'
import Image from 'next/image'



import me_and_taief_img from "@/public/img/me_and_taief.png"
import { BestQualityIcon, IntegrityIcon, StrategyIcon } from './Icons'




const WeAreDifferent = () => {
  return (
    <div>
      {/* <!-- DIFFERENT SECTION START HERE --> */}
<div className="container mx-auto px-4 py-0">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
      {/* <!-- Left Section --> */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-raleway font-bold text-[var(--secondary)]">
          Why we are <span className="text-[var(--primary)]">different</span>
        </h2>
        <p className=" text-xs 2xl:text-md md:text-sm text-gray-700">
            At exeyezone, we stand out because of our unwavering commitment to excellence and innovation. Our unique blend of creativity, technical expertise, and personalized service sets us apart, ensuring that every project exceeds expectations and delivers exceptional results.</p>
  
        <div className="flex flex-col  gap-5 2xl:gap-7 mt-10">
          
          
          {/* <!-- Feature 1 --> */}
          <div className="flex gap-4 items-start 2xl:pr-16">
            <div className="w-12 h-12 shrink-0">
              <BestQualityIcon />
            </div>
            <div>
              <h3 className="uppercase font-lato text-md 2xl:text-lg font-bold text-[var(--secondary)]">Best quality</h3>
              <p className=" text-xs 2xl:text-md md:text-sm text-gray-700">
                At Exeyezone, we guarantee top-notch quality in every aspect of our services, ensuring excellence in every project.
              </p>
            </div>
          </div>
  

          {/* <!-- Feature 1 --> */}
          <div className="flex gap-4 items-start 2xl:pr-16">
            <div className="w-12 h-12 shrink-0">
              <StrategyIcon />
            </div>
            <div>
              <h3 className="uppercase font-lato text-md 2xl:text-lg font-bold text-[var(--secondary)]">Strategy</h3>
              <p className=" text-xs 2xl:text-md md:text-sm text-gray-700">
                We devise comprehensive strategies tailored to your specific needs and driving success
              </p>
            </div>
          </div>
  

          {/* <!-- Feature 1 --> */}
          <div className="flex gap-4 items-start 2xl:pr-16">
            <div className="w-12 h-12 shrink-0">
              <IntegrityIcon />
            </div>
            <div>
              <h3 className="uppercase font-lato text-md 2xl:text-lg font-bold text-[var(--secondary)]">Integrity</h3>
              <p className=" text-xs 2xl:text-md md:text-sm text-gray-700">
                We devise comprehensive strategies tailored to your specific needs and driving success.
              </p>
            </div>
          </div>
  

          {/* <!-- Feature 1 --> */}
          {/* <div className="flex gap-4 items-start 2xl:pr-16">
            <div className="w-12 h-12 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" x="0" y="0" viewBox="0 0 512.013 512.013" style="enable-background:new 0 0 512 512" xml:space="preserve" className=""><g><path d="M212.845 453.248h106.788v53.391H212.845z"   fill="#c1ced4" data-original="#c1ced4"></path><path d="M187.219 501.274h158.052v10.739H187.219z"   fill="#2e3133" data-original="#2e3133" className=""></path><path d="M444.015 168.312a12.777 12.777 0 0 0-9.065-3.756H97.486a12.728 12.728 0 0 0-9.044 3.756 12.768 12.768 0 0 0-3.745 9.057v233.139h363.075V177.37a12.761 12.761 0 0 0-3.757-9.058zm-19.737 218.716H108.184V188.045h316.093v198.983z"   fill="#c1ced4" data-original="#c1ced4"></path><path d="M84.696 410.506v29.916c0 3.272 1.244 6.559 3.745 9.05a12.79 12.79 0 0 0 9.044 3.766H434.95a12.83 12.83 0 0 0 9.065-3.766 12.73 12.73 0 0 0 3.753-9.05v-29.916H84.696zm352.331 29.916c0 .387-.1.952-.589 1.439a2.094 2.094 0 0 1-1.485.637H97.486c-.312 0-.911-.082-1.462-.63a1.998 1.998 0 0 1-.586-1.444V421.25h341.591v19.172h-.002zM486.875 205.064l-47.58 47.57-28.268-28.285-58.563 49.083-13.133-13.133-26.23 26.235-27.75-27.732-56.778 56.778-20.664-20.646s-41.452 41.446-42.273 42.281l-40.648-40.63-86.991 86.989 7.593 7.596 79.398-79.398 40.65 40.625 42.271-42.276 20.664 20.644 56.778-56.776 27.75 27.73 26.23-26.235 12.498 12.5 58.555-49.085 28.902 28.923 55.183-55.165-7.594-7.593z"   fill="#2e3133" data-original="#2e3133" className=""></path><path d="M496.042 238.162h-10.744v-23.931H461.37v-10.742h34.672z"   fill="#2e3133" data-original="#2e3133" className=""></path><path d="m367.208 320.138-20.314-20.321-41.626 34.885-9.111-9.111-18.649 18.639-19.704-19.701-40.356 40.348-14.687-14.674-30.057 30.057-28.89-28.88-59.118 59.126h319.022V283.625z"   fill="#f95632" data-original="#f95632"></path><path d="M15.971 114.55v136.048h26.101v35.899l35.904-35.899h169.89V114.55z"   fill="#63d1db" data-original="#63d1db"></path><path d="M108.184 250.598v-62.554h139.681v-23.488H97.486a12.728 12.728 0 0 0-9.044 3.756 12.768 12.768 0 0 0-3.745 9.057v73.229h23.487z"   fill="#4ba9b6" data-original="#4ba9b6"></path><path d="M33.691 204.365h13.77v18.58h-13.77zM51.862 187.136h13.773v35.799H51.862zM70.025 195.098h13.783v27.853H70.025zM88.204 155.372h13.768v67.574H88.204zM106.367 173.312h13.77v49.641h-13.77zM124.545 141.926h13.763v81.014h-13.763zM142.703 180.838h13.775v42.12h-13.775zM160.874 189.151h13.768v33.795h-13.768zM179.037 155.372h13.775v67.574h-13.775zM197.203 124.644h13.78v98.304h-13.78z"   fill="#ffffff" data-original="#ffffff"></path><path d="M317.108 37.496c-26.929 0-48.74 21.814-48.74 48.737s21.814 48.753 48.74 48.753c26.918 0 48.755-21.829 48.755-48.753s-21.836-48.737-48.755-48.737z"   fill="#c1ced4" data-original="#c1ced4"></path><path d="m321.12 96.842-72.586-63.158 3.52-4.05C268.42 10.801 292.143 0 317.144 0c3.766 0 7.57.251 11.302.748l5.32.709-12.646 95.385zm-57.295-64.087 49.272 42.872 8.586-64.745c-21.691-1.361-42.713 6.764-57.858 21.873z"   fill="#2e3133" data-original="#2e3133" className=""></path><path d="M314.472 144.399c.881.041 1.743.136 2.624.133 13.755.008 26.365-4.782 36.332-12.741l-22.984-29.105a21.08 21.08 0 0 1-13.266 4.728c-.394.013-.755-.026-1.157-.046l-1.549 37.031z"   fill="#f95632" data-original="#f95632"></path><path d="M336.454 77.588c3.999 8.952 1.277 19.19-6.016 25.093l28.26 34.875c22.728-18.388 31.176-50.394 18.693-78.285l-40.937 18.317z"   fill="#63d1db" data-original="#63d1db"></path><circle cx="337.133" cy="219.29" r="14.651"   fill="#63d1db" data-original="#63d1db"></circle><path d="M452.54 150.948c0 14.996-12.157 27.154-27.154 27.154-14.986 0-27.149-12.157-27.149-27.154 0-14.989 12.165-27.146 27.149-27.146 14.994 0 27.154 12.154 27.154 27.146z"   fill="#f95632" data-original="#f95632"></path><path d="M105.929 129.096c-17.08 0-30.979-13.898-30.979-30.981 0-17.088 13.898-30.989 30.979-30.989s30.981 13.901 30.981 30.989c0 17.082-13.901 30.981-30.981 30.981zm0-51.228c-11.159 0-20.237 9.083-20.237 20.247 0 11.162 9.078 20.239 20.237 20.239 11.162 0 20.239-9.078 20.239-20.239 0-11.165-9.077-20.247-20.239-20.247z"   fill="#2e3133" data-original="#2e3133" className=""></path><path d="M195.38 75.028c0 6.067-4.915 10.982-10.982 10.982-6.054 0-10.972-4.915-10.972-10.982 0-6.06 4.915-10.972 10.972-10.972 6.065 0 10.982 4.913 10.982 10.972z"   fill="#c1ced4" data-original="#c1ced4"></path><path d="M108.184 387.028v-.012l-23.488 23.49h319.022v-23.478z"   fill="#bc452a" data-original="#bc452a"></path><path d="m447.768 244.16-8.473 8.474-15.017-15.028v15.197l15.009 15.019 8.481-8.479zM84.696 352.061l23.488-23.488v-15.188l-23.488 23.49z"   fill="#23282a" data-original="#23282a" className=""></path><path d="M444.015 168.312a12.777 12.777 0 0 0-9.065-3.756h-33.034c4.705 8.09 13.445 13.545 23.468 13.545 7.762 0 14.746-3.274 19.691-8.494-.335-.44-.653-.893-1.06-1.295z"   fill="#bc452a" data-original="#bc452a"></path><path d="M117.697 114.55a20.096 20.096 0 0 1-11.768 3.804c-4.39 0-8.448-1.421-11.768-3.804H79.715c5.489 8.722 15.173 14.546 26.212 14.546 11.041 0 20.726-5.824 26.214-14.546h-14.444z"   fill="#12282c" data-original="#12282c"></path><path d="M314.871 134.874c.748.033 1.482.113 2.237.113 11.507 0 22.067-4.012 30.408-10.683l-17.07-21.617a21.08 21.08 0 0 1-13.266 4.728c-.394.013-.755-.026-1.157-.046l-1.152 27.505z"   fill="#bc452a" data-original="#bc452a"></path><path d="m361.588 66.342-25.134 11.246c3.999 8.952 1.277 19.19-6.016 25.093l17.352 21.414c11.018-8.94 18.074-22.572 18.074-37.862 0-7.093-1.549-13.811-4.276-19.891z"   fill="#4ba9b6" data-original="#4ba9b6"></path><path d="M328.795 38.966a48.657 48.657 0 0 0-10.647-1.416l-5.051 38.077-28.969-25.206c-2.637 2.429-5.025 5.123-7.076 8.079l44.068 38.344 7.675-57.878z"   fill="#23282a" data-original="#23282a" className=""></path></g></svg>
            </div>
            <div>
              <h3 className="uppercase font-lato text-md 2xl:text-lg font-bold text-[var(--secondary)]">Sustainablity</h3>
              <p className=" text-xs 2xl:text-md md:text-sm text-gray-700">
                We devise comprehensive strategies tailored to your specific needs and driving success.
              </p>
            </div>
          </div> */}
  

        </div>
      </div>
  
      {/* <!-- Right Section (Image) --> */}
      <div className="w-full lg:w-1/2 flex mt-10 lg:mt-20 md:mt-0 justify-end">
        {/* <img src="assets/img/me_and_taief.png" alt="Why we are different" className="max-w-full h-auto  object-cover items-end" /> */}
        <Image src={me_and_taief_img} alt="Akshaduzzaman and Taief" placeholder="blur" className="max-w-full h-auto  object-cover items-end" />
      </div>
    </div>
  </div>
    </div>
  )
}

export default WeAreDifferent
