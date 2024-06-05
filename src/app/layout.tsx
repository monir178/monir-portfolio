import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/pages/home/Footer";
import StarsCanvas from "@/components/ui/starBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monir's Portfolio",
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
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
