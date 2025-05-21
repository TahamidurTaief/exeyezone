import Image from "next/image";
import AboutHero from './AboutHero';
import Mission from './Mission';


import deskImg from "@/public/img/desk.jpg";
import HireUs from "../Home/HireUs/HireUs";
import TeamMember from "../Home/TeamMember/TeamMember";
import api from "@/utils/axios";
import Logos from "./Logos";
import OurValues from "./OurValues";

const ServicesData = async () => {
  try {
    const res = await api.get('/services/');
    const data = res.data;

    if (!Array.isArray(data)) {
      throw new Error("API did not return an array");
    }

    const services = data.map((service) => {
      const firstImage = service.service_images.length > 0 ? service.service_images[0].image : null;
      const basicPackage = service.service_packages.find(pkg => pkg.package_type === "Basic") || service.service_packages[0] || {};

      return {
        id: service.id,
        title: service.title,
        rating: service.rating,
        reviews: service.purchase_number,
        images: {
          image: firstImage,
        },
        packages: {
          price: basicPackage.price || "N/A",
          delivery_time: basicPackage.delivery_time || "N/A",
        },
      };
    });

    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return []; 
  }
}



const OurTeamData = async () => {
  try {
    const res = await api.get('/teams/');
    return res.data;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
};


const AboutComponentPage = async () => {

  const services = await ServicesData();
  const team = await OurTeamData();



  return (
    <div className="  pb-20 ">
      <AboutHero />
      <Mission />
      <div className=" mt-20 pb-20"> 
        <Image src={deskImg} alt="exeyezone desk" />
      </div>
      {/* <OurValues /> */}
     <TeamMember team={team}/>
      <Logos />
      <HireUs services={services}/>

    </div>
  )
}

export default AboutComponentPage
