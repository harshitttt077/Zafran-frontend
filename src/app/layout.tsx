import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import GSAPAnimations from "@/components/GSAPAnimations";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter", 
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zafran | North Indian Taste",
  description: "Experience the finest organic Indian food at Zafran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-wf-domain="www.lotusrestaurant.com" data-wf-page="67aa834395fffab89210465d" data-wf-site="67aa834395fffab892104661">
      <head>
        <link 
          href="https://cdn.prod.website-files.com/67aa834395fffab892104661/css/lotus-cuisine.webflow.shared.fb976af7a.min.css" 
          rel="stylesheet" 
          type="text/css" 
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Forum&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <Toaster position="bottom-center" />
        <SmoothScroll>
          <GSAPAnimations />
          {children}
          <Footer />
        </SmoothScroll>
        
        <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="beforeInteractive" crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/67aa834395fffab892104661/js/webflow.c466497f1.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
