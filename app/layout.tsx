import type { Metadata } from "next";
import { Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";
import ScrollTop from "@/components/ScrollTop";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub for Every Dev Event You Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <Navbar />
        <ScrollTop />
        <div className="h-16"></div>
        <div
          scroll-behavior="smooth"
          className="min-h-min-scren w-full absolute inset-0 top-0 z-[-1]"
        >
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={5.4}
            followMouse={true}
            mouseInfluence={0.02}
            noiseAmount={0.0}
            distortion={0.1}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
