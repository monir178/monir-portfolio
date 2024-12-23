import type { Metadata } from "next";
import { Outfit, Anton, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/pages/home/Footer";
import StarsCanvas from "@/components/ui/starBackground";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const anton = Anton({
  subsets: ["vietnamese"],
  weight: "400",
  variable: "--font-anton",
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Moniruzzaman Monir's Portfolio Website",
  description: "This is Moniruzzaman Monir's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${anton.variable} ${bebasNeue.variable} bg-[#030014]  `}>
        <Toaster />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
