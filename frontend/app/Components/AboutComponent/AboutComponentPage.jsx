import Image from "next/image";
import AboutHero from './AboutHero';
import Mission from './Mission';


import deskImg from "@/public/img/desk.jpg";
import HireUs from "../Home/HireUs/HireUs";
import TeamMember from "../Home/TeamMember/TeamMember";
import Logos from "./Logos";
import OurValues from "./OurValues";




const AboutComponentPage = () => {
  return (
    <div className="  pb-20 ">
      <AboutHero />
      <Mission />
      <div className=" mt-20 pb-20"> 
        <Image src={deskImg} alt="exeyezone desk" />
      </div>
      <OurValues />
      <Logos />
      <TeamMember />
      <HireUs />

    </div>
  )
}

export default AboutComponentPage
