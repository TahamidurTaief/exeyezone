
const Mission = () => {
  return (
    <div>
      <div className="container  max-auto justify-center">
        <div className="flex flex-col md:flex-row gap-6  justify-between  mt-20 xl:mt-0">
            <div className="flex flex-col w-full md:w-2/3 2xl:w-1/2">
                <h1 className="text-2xl md:text-3xl xl:text-[48px] font-poppins text-[var(--secondary)] leading-[150%] font-semibold">Our <span className="text-primarry">Mission</span></h1>
                <p className="text-md md:text-lg font-lato text-gray-600 leading-[150%] mt-5 text-justify">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
                <p className="text-md md:text-lg font-lato text-gray-600 leading-[150%] mt-6 text-justify">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
            </div>

            <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap w-full md:w-1/3 gap-8 md:gap-12 md:text-end">
                <div className="flex flex-col gap-0 md:gap-2">
                    <h1 className="font-poppins leading-[150%] text-2xl md:text-3xl xl:text-[32px] font-semibold">44 million</h1>
                    <p className="text-md text-gray-500">Transactions every 24 hours</p>
                </div>
                <div className="flex flex-col gap-0 md:gap-2">
                    <h1 className="font-poppins leading-[150%] text-2xl md:text-3xl xl:text-[32px] font-semibold">$119 trillion</h1>
                    <p className="text-md text-gray-500">Assets under holding</p>
                </div>
                <div className="flex flex-col gap-0 md:gap-2">
                    <h1 className="font-poppins leading-[150%] text-2xl md:text-3xl xl:text-[32px] font-semibold">46,000</h1>
                    <p className="text-md text-gray-500">New users annually</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
