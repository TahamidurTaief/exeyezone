import Image from "next/image"
import Link from "next/link"

const ProductComponent = ({ products }) => {
  return (
    <div className="container mt-10 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 mx-auto justify-center">
        {products.map((product, index) => (
          <div className="p-2 bg-[#F5F7F9] min-w-[300px] max-w-[336px] pb-4 rounded-xl hover:shadow-lg duration-200" key={index}>
            <div className="flex flex-col px-2">
              <div>
                <Image 
                  src={product.product_img} 
                  alt={product.title} 
                  width={336} 
                  height={200}
                  className="w-full object-cover h-auto" 
                />
              </div>
              <div className="mt-3">
                <Link href={`/products/${product.slug || product.id}`}>
                  <h1 className="text-[16px] font-raleway font-semibold justify-start hover:text-[var(--primary)]">
                    {product.title}
                  </h1>
                </Link>
              </div>

              <div className="flex flex-row justify-between mt-2">
                {product.category && (
                  <p className="text-gray-500 font-lato">
                    in <span className="hover:underline">{product.category.name}</span>
                  </p>
                )}
                <h1 className="font-lato font-bold text-[var(--secondary)] text-[17px]">
                  ${product.price}
                </h1>
              </div>

              <hr className="mt-2" />

              <div className="flex flex-row justify-between mt-3">
                <div className="flex flex-col gap-1">
                  <p className="text-gray-500 font-lato text-sm">
                    {product.sales_count} Sales
                  </p>
                  <p className="text-gray-800 font-lato text-md font-semibold">
                    Rating: <span className="text-[var(--primary)]">{product.rating}</span>
                  </p>
                </div>
                <div>
                  {product.demo ? (
                    <a 
                      href={product.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-[1px] border-secondary px-3 py-2 rounded-full font-lato justify-center items-center font-semibold text-gray-600 hover:text-white hover:bg-[var(--secondary)] inline-block"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <Link
                      href={`/products/${product.slug || product.id}`}
                      className="border-[1px] border-secondary px-3 py-2 rounded-full font-lato justify-center items-center font-semibold text-gray-600 hover:text-white hover:bg-[var(--secondary)] inline-block"
                    >
                      View Details
                    </Link>
                  )}
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