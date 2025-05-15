import { HappyEmoji, HourIcons, LikeIcons, ProjectIcons } from '@/public/icons/HomeIcons'





const RatingDevider = () => {
  return (
    <div>
{/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
<div className="flex flex-row flex-wrap h-full bg-[var(--secondary)] mt-10">
            <div className='container text-white py-10'>
                <div className="flex flex-row gap-7">
                    
                    <div className="flex flex-row gap-4 items-center w-full">
                        <div>
                            <HappyEmoji className="w-20"/>
                        </div>
                        <div className="flex flex-col ">
                            <h1 className='font-poppins text-xl font-semibold'>240</h1>
                            <p className='font-lato text-sm'>Happy Customer</p>
                        </div>
                    </div>



                    <div className="flex flex-row gap-4 items-center w-full">
                        <div>
                            <LikeIcons className="w-20"/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className='font-poppins text-xl font-semibold'>1040</h1>
                            <p className='font-lato text-sm'>Award Winner</p>
                        </div>
                    </div>




                    <div className="flex flex-row gap-4 items-center w-full">
                        <div>
                            <HourIcons />
                        </div>
                        <div className="flex flex-col ">
                            <h1 className='font-poppins text-xl font-semibold'>5907</h1>
                            <p className='font-lato text-sm'>Working Hours</p>
                        </div>
                    </div>




                    <div className="flex flex-row gap-4 items-center w-full">
                        <div>
                            <ProjectIcons />
                        </div>
                        <div className="flex flex-col ">
                            <h1 className='font-poppins text-xl font-semibold'>408</h1>
                            <p className='font-lato text-sm'>Compete Project</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default RatingDevider
