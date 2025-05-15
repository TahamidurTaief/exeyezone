import Image from "next/image"
import Link from "next/link"


import img1 from "@/public/img/Products/product-img1.png"
import img2 from "@/public/img/Products/product-img2.png"



const ProductComponent = () => {


    const products = [
        {
            title: "Sass Products",
            teacher: "Taief",
            price: 299,
            sales_count: 122,
            rating: 4.8,
            img: img1
        },
        {
            title: "Sass Products",
            teacher: "Taief",
            price: 299,
            sales_count: 122,
            rating: 4.8,
            img: img2
        },
        {
            title: "Sass Products",
            teacher: "Taief",
            price: 299,
            sales_count: 122,
            rating: 4.8,
            img: img2
        },
        {
            title: "Sass Products",
            teacher: "Taief",
            price: 299,
            sales_count: 122,
            rating: 4.8,
            img: img2
        },
        {
            title: "Sass Products",
            teacher: "Taief",
            price: 299,
            sales_count: 122,
            rating: 4.8,
            img: img2
        },
        {
            title: "Sass Products",
            teacher: "Taief",
            price: 299,
            sales_count: 122,
            rating: 4.8,
            img: img2
        },
        {
            title: "Sass Products",
            teacher: "Taief",
            price: 299,
            sales_count: 122,
            rating: 4.8,
            img: img2
        }
    ];




  return (
    <div className="container mt-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 mx-auto justify-center">

            {products.map((data, index) => (
                <div className="p-2 bg-[#F5F7F9] min-w-[300px] max-w-[336px] pb-4 rounded-xl hover:shadow-lg duration-200" key={index}>
                    <div className="flex flex-col px-2">
                        <div>
                            <Image src={img1} alt={data.title} className="w-full object-cover h-auto" />
                        </div>
                        <div className="mt-3">
                            <Link href=""><h1 className="text-[16px] font-raleway font-semibold justify-start hover:text-[var(--primary)]">{data.title}</h1></Link>
                        </div>

                        <div className="flex flex-row justify-between mt-2">
                            <p className="text-gray-500 font-lato">by <Link href="" className="hover:underline">Taief</Link></p>
                            <h1 className="font-lato font-bold text-[var(--secondary)] text-[17px]">$120</h1>
                        </div>

                        <hr className="mt-2" />

                        <div className="flex flex-row justify-between mt-3">
                            <div className="flex flex-col gap-1">
                                <p className="text-gray-500 font-lato text-sm">1200 Sales</p>
                                <p className="text-gray-800 font-lato text-md font-semibold">Rating: <span className="text-[var(--primary)]">5:00</span></p>
                            </div>
                            <div>
                                <button className="border-[1px] border-secondary px-3 py-2 rounded-full font-lato justify-center items-center font-semibold text-gray-600 hover:text-white hover:bg-[var(--secondary)]">Live Demo</button>
                            </div>
                        </div>
                    </div>      
                </div>
            ))}
            
        </div>
      
    </div>
  )
}

export default ProductComponent
