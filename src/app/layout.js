
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Curiosity4u – Empowering Innovators with Education & Technology",
  description:
    "Curiosity ignites inquisitive minds by blending technology and cultural heritage. As a parent company to educational and product-based platforms, we shape future innovators through knowledge and creativity. Join us in building a tech-savvy nation with deep cultural roots.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <navbar /> */}
        {children}
      </body>
    </html>
  );
}
