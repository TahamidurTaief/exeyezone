import HeroComponents from '../Components/ServicesComponent/Hero/HeroComponents'
import ServiceCard from '../Components/ServicesComponent/ServiceCard/ServiceCard'

const page = () => {
  return (
    <div className='pt-5 pb-20 container '>
      <HeroComponents />
      <ServiceCard />
    </div>
  )
}

export default page
