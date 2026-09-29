import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Rajasthan Mahendi Art & Piercing | Vishambar Ji (Since 2007)",
  description: "Official Rajasthan Mahendi Art & Body Piercing Studio in Vadodara by Vishambar Ji. Specializing in Bridal Dulhan Mehndi, Marwari, Rajwadi, Afghani, Arabic, and ear/nose piercing. Call/WhatsApp: +91 95371 57153.",
  keywords: ["Rajasthan Mahendi Art", "Vishambar Ji", "Bridal Dulhan Mehndi Vadodara", "Rajwadi Mehndi", "Marwari Mehndi", "Body Piercing Vadodara", "Gangam Plaza Vemali"],
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
      </head>
      <body className="bg-[#D81B60] text-white antialiased min-h-screen">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
