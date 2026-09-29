import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  metadataBase: new URL('https://rajasthanmahendiartvadodara.com'),
  title: {
    default: "Rajasthan mahendi art vadodara | #1 Mehndi & Piercing Studio by Vishambar Ji",
    template: "%s | Rajasthan mahendi art vadodara (Vishambar Ji)"
  },
  description: "Best Dulhan Bridal Mehndi Artist & Ear, Nose, Stomach Body Piercing Studio in Vadodara by Vishambar Ji (Since 2007). Special Marwari, Rajwadi, Afghani, Arabic designs with 100% natural color guarantee & free home service across Vadodara (Sama Savli Road, Vemali, Dumad Chokdi, Alkapuri, Gotri, Karelibaug, Manjalpur, Fatehgunj, Chhani). Powered by TEJASKP AI SOFTWARE.",
  keywords: [
    "Rajasthan mahendi art vadodara",
    "mehndi artist near me",
    "mehendi artist near me",
    "best mehendi artist in vadodara",
    "bridal dulhan mehendi vadodara",
    "ear piercing near me vadodara",
    "nose piercing near me vadodara",
    "stomach piercing vadodara",
    "navel piercing vadodara",
    "body piercing studio vadodara",
    "marwari mehendi artist vadodara",
    "rajwadi mehendi vadodara",
    "arabic mehendi vadodara",
    "afghani mehendi vadodara",
    "sama savli road mehendi artist",
    "vemali mehendi artist",
    "dumad chokdi mehendi artist",
    "alkapuri mehendi artist",
    "gotri mehendi artist",
    "karelibaug mehendi artist",
    "manjalpur mehendi artist",
    "chhani mehendi artist",
    "waghodia road mehendi artist",
    "fatehgunj mehendi artist",
    "raopura mehendi artist",
    "nizampara mehendi artist",
    "free home service mehendi vadodara",
    "Vishambar Ji mehendi artist",
    "TEJASKP AI SOFTWARE",
    "TEJASKP AI Software Portfolio"
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
    title: "Rajasthan mahendi art vadodara | #1 Mehndi & Piercing Studio",
    description: "Best Dulhan Bridal Mehndi & Ear, Nose, Stomach Piercing in Vadodara by Vishambar Ji. 100% Natural Color Guarantee & Free Home Service. Powered by TEJASKP AI SOFTWARE.",
    url: "https://rajasthanmahendiartvadodara.com",
    siteName: "Rajasthan mahendi art vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/tejaskp-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Rajasthan mahendi art vadodara - Vishambar Ji Studio",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajasthan mahendi art vadodara | #1 Mehndi & Piercing Studio",
    description: "Top Bridal Dulhan Mehndi & Professional Piercing Studio in Vadodara by Vishambar Ji (Since 2007). Powered by TEJASKP AI SOFTWARE.",
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
  verification: {
    google: "Yh-xRc3XjOmyQCrdZ6PTjuSBVLrxaDv4jNDfI6T2tzM",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["BeautySalon", "LocalBusiness"],
      "@id": "https://rajasthanmahendiartvadodara.com/#localBusiness",
      "name": "Rajasthan mahendi art vadodara",
      "alternateName": ["Rajasthan Mahendi Art & Body Piercing Studio", "Vishambar Ji Mehndi Artist Vadodara"],
      "url": "https://rajasthanmahendiartvadodara.com",
      "telephone": "+919537157153",
      "hasMap": "https://maps.google.com/?q=Reliance+Smart+Bazaar+Gangam+Plaza+Vemali+Vadodara",
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
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Vadodara" },
        { "@type": "Place", "name": "Sama Savli Road" },
        { "@type": "Place", "name": "Vemali" },
        { "@type": "Place", "name": "Dumad Chokdi" },
        { "@type": "Place", "name": "Alkapuri" },
        { "@type": "Place", "name": "Gotri" },
        { "@type": "Place", "name": "Karelibaug" },
        { "@type": "Place", "name": "Manjalpur" },
        { "@type": "Place", "name": "Chhani" },
        { "@type": "Place", "name": "Waghodia Road" },
        { "@type": "Place", "name": "Fatehgunj" },
        { "@type": "Place", "name": "Raopura" }
      ],
      "knowsAbout": [
        "Special Dulhan Mehndi",
        "Marwari Mehndi Design",
        "Rajwadi Bridal Mehndi",
        "Afghani Mehndi Art",
        "Arabic Henna Design",
        "Ear Piercing",
        "Nose Piercing",
        "Stomach Piercing",
        "Navel Body Piercing",
        "Free Home Service Mehndi Vadodara"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.0",
        "reviewCount": "3",
        "bestRating": "5",
        "worstRating": "1"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "22:00"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9537157153",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["Hindi", "Gujarati", "English"]
      },
      "founder": {
        "@type": "Person",
        "name": "Vishambar Ji",
        "jobTitle": "Master Mehndi & Piercing Artist"
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
      "name": "Rajasthan mahendi art vadodara",
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
        <meta name="google-site-verification" content="Yh-xRc3XjOmyQCrdZ6PTjuSBVLrxaDv4jNDfI6T2tzM" />
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
