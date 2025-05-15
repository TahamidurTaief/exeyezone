import Image from 'next/image'
import Link from 'next/link'



import logo from "@/public/img/Logo/logo.png"


const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow-lg m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row sm:items-center sm:justify-between">
            <div className=' order-2 md:order-1'>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <Link href="/courses" className="hover:underline me-4 md:me-6">Courses</Link>
                    </li>
                    <li>
                        <Link href="/services" className="hover:underline me-4 md:me-6">Services</Link>
                    </li>
                    <li>
                        <Link href="/products" className="hover:underline me-4 md:me-6">Products</Link>
                    </li>

                </ul>
            </div>
            

            <div className=' order-1 md:order-2'>
                <Link href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={logo} alt="exeyezone" placeholder="blur"  className="h-10 w-auto md:w-full" />
                </Link>
            </div>
            


            <div className=' order-3'>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Terms and Condition</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>

                </ul>
            </div>

        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© 2025 <a className="hover:underline">exeyezone</a>. All Rights Reserved.</span>
    </div>
</footer>
    </div>
  )
}

export default Footer
