import HeroSection from './components/HeroSection';
import CompanyOverview from './components/CompanyOverview';
import ServicesGrid from './components/ServicesGrid';
import TechStack from './components/TechStack';
import WorkflowSteps from './components/WorkflowSteps';
import TeamMembers from './components/TeamMembers';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedServices from './components/FeaturedServices';
import FeaturedProducts from './components/FeaturedProducts';
import ContactCTA from './components/ContactCTA';
import PortfolioSchema from './components/PortfolioSchema';

export const metadata = {
  title: 'Portfolio - Exeyezone | Leading Software Development Company',
  description: 'Discover Exeyezone - a leading software company specializing in web development, mobile apps, AI solutions, UI/UX design, and digital innovation. Explore our expertise, services, products, and meet our talented team.',
  keywords: 'software development, web development, mobile apps, UI/UX design, AI solutions, digital innovation, custom software, e-commerce, SaaS, portfolio',
  authors: [{ name: 'Exeyezone' }],
  openGraph: {
    title: 'Portfolio - Exeyezone | Leading Software Development Company',
    description: 'Learn about our journey, team, and expertise in software development. Explore our services, products, and digital solutions.',
    url: 'https://exeyezone.com/portfolio',
    siteName: 'Exeyezone',
    images: [
      {
        url: '/img/portfolio-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Exeyezone Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Exeyezone | Leading Software Development Company',
    description: 'Discover our expertise in web development, mobile apps, AI solutions, and digital innovation.',
    images: ['/img/portfolio-og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://exeyezone.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioSchema />
      <main className="bg-gradient-to-b from-gray-50 to-white">
        <HeroSection />
        <CompanyOverview />
        <ServicesGrid />
        <FeaturedServices />
        <FeaturedProducts />
        <TechStack />
        <WorkflowSteps />
        <TeamMembers />
        <WhyChooseUs />
        <ContactCTA />
      </main>
    </>
  );
}
