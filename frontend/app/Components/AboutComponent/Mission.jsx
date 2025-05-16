
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




const Mission = () => {
  return (
    <div>
      <div className="container  max-auto justify-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between  mt-20 xl:mt-0">
            <div className="flex flex-col w-full">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-poppins text-[var(--secondary)] font-semibold">Our <span className="text-primary">Mission</span></h1>
                    <p className="text-sm md:text-md mt-2 font-lato text-gray-600 leading-6 text-justify">At ExeyeZone, our mission is to empower Bangladesh through smart, affordable digital solutions.
We aim to simplify technology for people, businesses, and institutions by offering user-friendly, scalable, and reliable software and web services.
Our focus is on accessibility, innovation, and impact, ensuring everyone benefits from the digital revolution.</p>
                    {/* <p className="text-md md:text-lg font-lato text-gray-600 leading-[150%] mt-6 text-justify">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p> */}
                </div>

                <div className="flex flex-col ">
                    <h1 className="text-2xl md:text-3xl font-poppins text-[var(--secondary)] leading-[100%] font-semibold">Our <span className="text-primary">Vision</span></h1>
                    <p className="text-sm md:text-md mt-2 leading-6 font-lato text-gray-600   text-justify">Our vision is to see a fully digital Bangladesh where every individual and business thrives through technology.
We strive to lead this transformation by making digital tools easy to use, locally relevant, and globally competitive.
ExeyeZone envisions a future where innovation drives growth, inclusion, and national progress.</p>
                    {/* <p className="text-md md:text-lg font-lato text-gray-600 leading-[150%] mt-6 text-justify">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p> */}
                </div>
            </div>

            <div className="flex flex-col w-full">
                <h1 className="text-2xl md:text-3xl font-poppins text-[var(--secondary)] leading-[100%] font-semibold">Our <span className="text-primary">Goals</span></h1>
                <ul className="list-disc font-lato text-sm md:text-md text-gray-600 flex flex-col gap-4 mt-4">
                  <li><b>Digital Access for All:</b> Create inclusive, user-friendly platforms that allow every Bangladeshi to participate in the digital economy.</li>
                  <li><b>Innovate with Purpose:</b> Build smart, secure, and scalable software solutions tailored to local needs and global standards.</li>
                  <li><b>Support Entrepreneurs and Enterprises:</b> Provide affordable, reliable services that help startups, SMEs, and large businesses thrive in the digital age.</li>
                  <li><b>Drive National Tech Growth:</b> Collaborate with educational, governmental, and private sectors to accelerate Bangladesh’s journey toward a knowledge-based economy.</li>
                  <li><b>Expand Beyond Borders:</b> Position ExeyeZone as a global tech brand born in Bangladesh — built for the world.</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
