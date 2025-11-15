import HeroSection from './components/HeroSection';
import CompanyOverview from './components/CompanyOverview';
import ServicesGrid from './components/ServicesGrid';
import TechStack from './components/TechStack';
import WorkflowSteps from './components/WorkflowSteps';
import TeamMembers from './components/TeamMembers';
import WhyChooseUs from './components/WhyChooseUs';
import StatsSection from './components/StatsSection';
import ContactCTA from './components/ContactCTA';
import PortfolioSchema from './components/PortfolioSchema';

export const metadata = {
  title: 'Portfolio - Exeyezone | Leading Software Development Company',
  description: 'Discover Exeyezone - a leading software company with 250+ happy clients, 500+ completed projects, and a 98% satisfaction rate. Explore our expertise in web development, mobile apps, AI solutions, and digital innovation.',
  keywords: 'software development, web development, mobile apps, UI/UX design, AI solutions, digital innovation, custom software, e-commerce, SaaS, portfolio, software company achievements, tech company statistics',
  authors: [{ name: 'Exeyezone' }],
  openGraph: {
    title: 'Portfolio - Exeyezone | 250+ Clients, 500+ Projects Delivered',
    description: 'A leading software development company trusted by 250+ clients worldwide. Discover our journey with 500+ successful projects and 98% client satisfaction rate.',
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
    title: 'Portfolio - Exeyezone | 250+ Clients, 500+ Projects Delivered',
    description: 'Leading software development company with proven track record. 500+ projects, 98% satisfaction, serving 30+ countries worldwide.',
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
        <StatsSection />
        <ServicesGrid />
        <TechStack />
        <WorkflowSteps />
        <TeamMembers />
        <WhyChooseUs />
        <ContactCTA />
      </main>
    </>
  );
}
