'use client'; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import NextAuthProvider from "@/provider/NextAuthProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>

    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="">
          {children}
           <ToastContainer position="top-center" />
        </main>
        
        <Footer></Footer>
      </body>
    </html>
    </NextAuthProvider>
  );
}
