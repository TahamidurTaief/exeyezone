export const metadata = {
  title: 'Professional Courses - Learn & Master New Skills | Exeyezone',
  description: 'Explore our expertly crafted professional courses. From programming to design, gain the skills you need to succeed in today\'s digital world. 100+ courses available with 95% success rate.',
  keywords: 'online courses, professional training, programming courses, web development, design courses, tech courses, learn coding, career development',
  authors: [{ name: 'Exeyezone' }],
  openGraph: {
    title: 'Professional Courses - Learn & Master New Skills | Exeyezone',
    description: 'Transform your career with our expertly crafted courses. 100+ courses, 1000+ happy students, 95% success rate.',
    type: 'website',
    url: 'https://exeyezone.com/courses',
    siteName: 'Exeyezone',
    images: [
      {
        url: '/img/courses-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Exeyezone Professional Courses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Courses - Learn & Master New Skills | Exeyezone',
    description: 'Transform your career with our expertly crafted courses. 100+ courses, 1000+ happy students.',
    images: ['/img/courses-og.jpg'],
  },
  alternates: {
    canonical: 'https://exeyezone.com/courses',
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
};

export default function CoursesLayout({ children }) {
  return children;
}
