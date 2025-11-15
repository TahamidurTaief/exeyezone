'use client';

import Script from 'next/script';

const PortfolioSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Exeyezone",
    "url": "https://exeyezone.com",
    "logo": "https://exeyezone.com/img/logo.png",
    "description": "Leading software development company with 250+ happy clients, 500+ completed projects, and a 98% client satisfaction rate. Specializing in web development, mobile apps, AI solutions, and digital innovation across 30+ countries.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1766454576",
      "contactType": "Customer Service",
      "email": "exeyezoneltd@gmail.com"
    },
    "sameAs": [
      "https://facebook.com/exeyezone",
      "https://twitter.com/exeyezone",
      "https://linkedin.com/company/exeyezone"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "25"
    },
    "foundingDate": "2020",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Worldwide"
      },
      {
        "@type": "GeoShape",
        "addressCountry": ["US", "UK", "BD", "CA", "AU"]
      }
    ],
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "E-commerce Solutions",
      "AI & Machine Learning",
      "Software Testing",
      "Custom Software Development",
      "Freelance Development",
      "Digital Transformation"
    ],
    "slogan": "Empowering businesses with innovative technology solutions",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web design and development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android mobile application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Professional user interface and user experience design"
          }
        }
      ]
    },
    "knowsLanguage": ["English", "Bengali"],
    "award": [
      "250+ Happy Clients Served",
      "500+ Projects Successfully Delivered",
      "98% Client Satisfaction Rate",
      "350+ Freelance Projects Completed"
    ]
  };

  return (
    <Script
      id="portfolio-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

export default PortfolioSchema;
