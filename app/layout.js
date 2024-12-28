import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
  title: "RALOC Logistics | Reliable Logistics & Financing Solutions",
  description:
    "Discover seamless logistics services and financing solutions with RALOC Logistics. From ocean cargo to air freight, courier services, and cargo storage to Work & Pay vehicle ownership and Phone Loans, we deliver excellence in transportation and financial empowerment.",
  keywords:
    "logistics, transportation, ocean cargo, air freight, courier services, cargo storage, global shipping, supply chain solutions, Work & Pay, vehicle ownership, Phone Loans, flexible financing, affordable loans, RALOC Logistics",
  author: "RALOC Logistics",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "RALOC Logistics | Reliable Logistics & Financing Solutions",
    description:
      "From logistics services like ocean cargo, air freight, and courier services to Work & Pay vehicle ownership and affordable Phone Loans, RALOC Logistics delivers excellence in transportation and financial empowerment.",
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
      <body className={`${poppins.className} antialiased`}>
      <ToastContainer
          position="top-right"
          newestOnTop={true}
          pauseOnHover
          theme="light"
          autoClose={5000}
          hideProgressBar={false}
          stacked
        />
        {children}</body>
    </html>
  );
}
