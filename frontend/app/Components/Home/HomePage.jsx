import Image from "next/image";
import Corousel from './Corousel/Corousel';
import Course from './Course/Course';
import Hero from './Hero/Hero';
import HireUs from './HireUs/HireUs';
import LatestProject from './LatestProject/LatestProject';
import TeamMember from './TeamMember/TeamMember';
import UsefulBar from './UsefulBar/UsefulBar';
import WeAreDifferent from './WeAreDifferent/WeAreDifferent';
import WeDo from './WeDo/WeDo';
import api from "@/utils/axios"; 


import deskImg from "@/public/img/desk.jpg";
import RatingDevider from "./RatingDevider/RatingDevider";



const LatestProjectData = async () => {
  try {
    const res = await api.get("/products/");
    return res.data.slice(0,4);
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
}



const CourseData = async () => {
        try{
        const res = await api.get('/courses/');
        return res.data.slice(0, 8); // Get 8 courses for 2 rows (4 on 2xl)
    }catch (error) {
        console.error('Error fetching course data:', error);
        return [];
    }

}

const ServicesData = async () => {
  try {
    const res = await api.get('/services/');
    const data = res.data;

    if (!Array.isArray(data)) {
      throw new Error("API did not return an array");
    }

    const services = data.slice(0, 8).map((service) => { // Get 8 services for 2 rows (4 on 2xl)
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




const HomePage = async () => {
  const product = await LatestProjectData();
  const courses = await CourseData();
  const services = await ServicesData();
  const team = await OurTeamData();



  return (
    <div className='mt-6 z-10'>
      <main className=" flex flex-col">
        <Hero />
        <Corousel />
        <WeDo/>
        {/* <UsefulBar /> */}

        <div className="pb-20">
          <Image src={deskImg} alt="exeyezone desk" />
        </div>

        <LatestProject product={product}/>
        <div className="bg-gray-100 py-20">
          <Course courses={courses}/>
        </div>
        
        <HireUs services={services}/>
        {/* <Different /> */}
        <RatingDevider />
        <TeamMember team={team}/>
        <WeAreDifferent />
        <UsefulBar />
      </main>
    </div>
  )
}

export default HomePage
