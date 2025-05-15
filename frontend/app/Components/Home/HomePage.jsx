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



import deskImg from "@/public/img/desk.jpg";
import RatingDevider from "./RatingDevider/RatingDevider";




const HomePage = () => {
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

        <LatestProject />
        <Course />
        <HireUs />
        {/* <Different /> */}
        <RatingDevider />
        <TeamMember />
        <WeAreDifferent />
        <UsefulBar />
      </main>
    </div>
  )
}

export default HomePage
