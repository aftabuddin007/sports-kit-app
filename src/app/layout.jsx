import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sports Kit Store App",
  description: "Selling items like football, bat, ball, leg pad, boots, gloves, etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="">
          {children}
        </main>
        
        <Footer></Footer>
      </body>
    </html>
  );
}
