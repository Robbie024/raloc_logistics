import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "RALOC Logistics | Reliable Logistics Solutions",
  description: "Discover seamless logistics services with RALOC Logistics. From ocean cargo to air freight, courier services, and cargo storage, we deliver excellence in transportation and supply chain management.",
  keywords: "logistics, transportation, ocean cargo, air freight, courier services, cargo storage, global shipping, supply chain solutions",
  author: "RALOC Logistics",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "RALOC Logistics | Reliable Logistics Solutions",
    description: "From ocean cargo to air freight, courier services, and cargo storage, we deliver excellence in transportation and supply chain management.",
    url: "https://raloclogistics.com",
    images: [
      {
        url: "https://raloclogistics.com/logo.png",
        width: 1200,
        height: 630,
        alt: "RALOC Logistics Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
