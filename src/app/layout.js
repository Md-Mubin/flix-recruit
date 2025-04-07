import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";

export const brandFont = Inter({ weight: ["400", "700"], preload: false })

export const metadata = {
  title: "Flix Recruit",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={brandFont.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
