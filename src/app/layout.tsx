import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  metadataBase: new URL('https://rajasthanmahendiartvadodara.com'),
  title: {
    default: "Rajasthan Mahendi Art & Piercing | Powered by TEJASKP AI SOFTWARE",
    template: "%s | Rajasthan Mahendi Art (TEJASKP AI SOFTWARE)"
  },
  description: "Official Rajasthan Mahendi Art & Body Piercing Studio in Vadodara by Vishambar Ji (Since 2007). Special Dulhan Mehndi, Marwari, Rajwadi, Afghani, Arabic, and Body Piercing. Engineered & Powered by TEJASKP AI SOFTWARE.",
  keywords: [
    "TEJASKP AI SOFTWARE",
    "TEJASKP AI Software Portfolio",
    "TEJASKP AI SOFTWARE Vadodara",
    "Developed by TEJASKP AI Software",
    "TEJASKP AI Software Web Development",
    "Rajasthan Mahendi Art",
    "Vishambar Ji",
    "Bridal Dulhan Mehndi Vadodara",
    "Rajwadi Mehndi Vadodara",
    "Marwari Mehndi Artist",
    "Ear Nose Stomach Piercing Vadodara",
    "Gangam Plaza Vemali Studio",
    "Vemali Sama Savli Road Mahendi",
    "Free Home Service Mehndi Vadodara"
  ],
  authors: [
    { name: "Vishambar Ji", url: "https://rajasthanmahendiartvadodara.com" },
    { name: "TEJASKP AI SOFTWARE", url: "https://tejaskpaisoftware.com/" }
  ],
  creator: "TEJASKP AI SOFTWARE",
  publisher: "TEJASKP AI SOFTWARE",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Rajasthan Mahendi Art & Body Piercing | TEJASKP AI SOFTWARE",
    description: "Premium Bridal Dulhan Mehndi & Professional Piercing Studio in Vadodara by Vishambar Ji. Crafted & Powered by TEJASKP AI SOFTWARE.",
    url: "https://rajasthanmahendiartvadodara.com",
    siteName: "Rajasthan Mahendi Art & Piercing (TEJASKP AI SOFTWARE)",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/tejaskp-logo.jpg",
        width: 1200,
        height: 630,
        alt: "TEJASKP AI SOFTWARE - Rajasthan Mahendi Art Studio",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajasthan Mahendi Art & Piercing | Powered by TEJASKP AI SOFTWARE",
    description: "Official Website for Rajasthan Mahendi Art & Piercing Studio Vadodara. Developed & Engineered by TEJASKP AI SOFTWARE.",
    images: ["/images/tejaskp-logo.jpg"],
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
    canonical: "https://rajasthanmahendiartvadodara.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BeautySalon",
      "@id": "https://rajasthanmahendiartvadodara.com/#beautySalon",
      "name": "Rajasthan Mahendi Art & Body Piercing",
      "url": "https://rajasthanmahendiartvadodara.com",
      "telephone": "+919537157153",
      "priceRange": "₹₹",
      "image": "https://rajasthanmahendiartvadodara.com/images/tejaskp-logo.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Reliance Smart Bazaar, Gangam Plaza, Canal Road, Opp. McDonalds, Sama Savli Road, Vemali",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390024",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.3485",
        "longitude": "73.2088"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "22:00"
      },
      "founder": {
        "@type": "Person",
        "name": "Vishambar Ji"
      },
      "creator": {
        "@type": "Organization",
        "@id": "https://tejaskpaisoftware.com/#organization",
        "name": "TEJASKP AI SOFTWARE",
        "url": "https://tejaskpaisoftware.com/",
        "logo": "https://rajasthanmahendiartvadodara.com/images/tejaskp-logo.jpg"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://tejaskpaisoftware.com/#organization",
      "name": "TEJASKP AI SOFTWARE",
      "url": "https://tejaskpaisoftware.com/",
      "logo": "https://rajasthanmahendiartvadodara.com/images/tejaskp-logo.jpg",
      "description": "Leading AI Software & Custom Web Application Development Studio.",
      "sameAs": [
        "https://tejaskpaisoftware.com/",
        "https://rajasthanmahendiartvadodara.com"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://rajasthanmahendiartvadodara.com/#website",
      "url": "https://rajasthanmahendiartvadodara.com",
      "name": "Rajasthan Mahendi Art & Piercing Studio Vadodara",
      "publisher": {
        "@id": "https://tejaskpaisoftware.com/#organization"
      },
      "creator": {
        "@id": "https://tejaskpaisoftware.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#D81B60] text-white antialiased min-h-screen">
        <SplashScreen />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
