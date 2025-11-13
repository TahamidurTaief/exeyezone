import HeroComponents from "../Components/ServicesComponent/Hero/HeroComponents";
import ServiceCard from "../Components/ServicesComponent/ServiceCard/ServiceCard";

export const metadata = {
  title: "Professional Services | ExeyeZone - Web Design, Development & Digital Solutions",
  description:
    "Explore our comprehensive range of professional services including web design, development, digital marketing, and custom solutions. Quality work delivered on time by expert professionals.",
  keywords: [
    "web design services",
    "web development",
    "digital marketing",
    "custom software development",
    "professional services",
    "IT solutions",
    "design agency",
    "mobile app development",
    "UI/UX design",
    "cloud solutions",
    "DevOps services",
    "data analytics",
    "cybersecurity",
    "AI machine learning",
    "blockchain development",
  ],
  authors: [{ name: "ExeyeZone" }],
  creator: "ExeyeZone",
  publisher: "ExeyeZone",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Professional Services | ExeyeZone",
    description:
      "Discover top-quality professional services tailored to your business needs. Expert web design, development, and digital solutions.",
    type: "website",
    locale: "en_US",
    siteName: "ExeyeZone",
    images: [
      {
        url: "/img/Logo/logo.png",
        width: 1200,
        height: 630,
        alt: "ExeyeZone Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Services | ExeyeZone",
    description:
      "Discover top-quality professional services tailored to your business needs. Expert web design, development, and digital solutions.",
    images: ["/img/Logo/logo.png"],
  },
  alternates: {
    canonical: "/services",
  },
  category: "Technology Services",
};

const page = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Services",
    "provider": {
      "@type": "Organization",
      "name": "ExeyeZone",
      "url": "https://exeyezone.com"
    },
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Cloud Solutions",
      "DevOps Services",
      "Data Analytics",
      "Digital Marketing",
      "Cybersecurity",
      "AI & Machine Learning",
      "Blockchain Development"
    ],
    "areaServed": "Worldwide",
    "description": "Professional technology services including web development, mobile app development, UI/UX design, and digital solutions.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "99",
      "highPrice": "9999",
      "offerCount": "50"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <HeroComponents />
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <ServiceCard />
        </div>
      </div>
    </>
  );
};

export default page;
