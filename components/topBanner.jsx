"use client"
import { faFacebook, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMapPin, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const TopBanner = () => {

    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Content for each slide
    const slides = [
        {
            heading: "Welcome to",
            subheading: "RALOC LOGISTICS",
            content:
                "Discover seamless logistics solutions. We specialize in global transportation via sea, land, and air, ensuring safety and efficiency for your goods.",
            image: "/bg1.jpg",
            button1: "Explore Services", // Links to the services page
            button2: "Contact Us", // Links to the contact page or opens a form
        },
        {
            heading: "Transport Your Goods",
            subheading: "Across the Globe",
            content:
                "Experience hassle-free shipping and delivery worldwide. With our trusted network, we ensure your goods reach their destination smoothly.",
            image: "/bg2.jpg",
            button1: "Get a Quote", // Opens a form or redirects to a quote page
            button2: "Learn More", // Links to detailed information about global transport
        },
        {
            heading: "With Help From Our Fleet",
            subheading: "Deliver Anywhere",
            content:
                "Our state-of-the-art fleet ensures timely and reliable delivery to any destination. Partner with us for a superior logistics experience.",
            image: "/bg3.jpg",
            button1: "Partner With Us", // Opens a partnership inquiry form
            button2: "Track Shipment", // Links to a tracking page (optional for future)
        },
    ];

    // Effect to change the slide every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // 10 seconds in milliseconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [slides.length]);

    const [showMobileNav, setShowMobileNav] = useState(false)

    return (
        <>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`h-svh text-white relative flex flex-col ${index === currentSlide
                        ? "opacity-100 transform translate-x-0 block"
                        : "opacity-0 transform -translate-x-1/2 hidden"
                        } transition duration-500 ease-in-out`}
                >
                    <div className="absolute top-0 left-0 w-full h-full z-0 transition duration-500">
                        <Image
                            src={slide.image}
                            width={2000}
                            height={2000}
                            className="w-full h-full object-cover transition duration-500"
                            alt="background image"
                        />
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/10"></div>

                    {/* Big Div */}
                    <header className="sm:px-12 relative z-50">
                        {/* header */}
                        <div className="border-b sm:p-4 p-2 flex justify-between items-center">
                            <div className="flex gap-1.5 items-center">
                                <FontAwesomeIcon icon={faMapPin} width={20} height={20} />
                                <p>Accra, Ghana</p>
                            </div>

                            <div className="flex items-center gap-6">
                                <FontAwesomeIcon icon={faFacebook} width={20} height={20} />
                                <FontAwesomeIcon icon={faTwitter} width={20} height={20} />
                                <FontAwesomeIcon icon={faTiktok} width={20} height={20} />
                                <FontAwesomeIcon icon={faWhatsapp} width={20} height={20} />
                            </div>
                        </div>
                        <div className="flex justify-between items-center sm:p-3 p-2">
                            <div>
                                <Image
                                    src={"/logo.png"}
                                    width={1000}
                                    height={1000}
                                    className="w-24 h-auto"
                                    alt="logo"
                                />
                            </div>
                            <nav className="text-sm md:flex hidden gap-4 font-semibold">
                                <Link href={"/"}>HOME</Link>
                                <Link href={"/"}>SERVICES</Link>
                                <Link href={"/"}>ABOUT US</Link>
                                <Link href={"/"}>CONTACT US</Link>
                            </nav>
                            <button type="button" onClick={() => setShowMobileNav(true)} className="bg-white p-1.5 rounded md:hidden block" >
                                <FontAwesomeIcon icon={faBars} width={30} height={30} color="black" className="text-xl" />
                            </button>

                            {showMobileNav && <div className="fixed transition duration-1000 top-0 left-0 w-full h-svh bg-gray-800/90 z-50 bg-cover bg-center py-12 px-6 flex flex-col justify-between">
                                <div className="flex flex-col gap-8">
                                    <div className="flex justify-end">
                                        <button type="button" onClick={() => setShowMobileNav(false)} className="p-2 rounded-md bg-red-600">
                                            <FontAwesomeIcon icon={faXmark} width={30} height={30} color="white" />
                                        </button>
                                    </div>

                                    <nav className="flex flex-col gap-4">
                                        <Link href={"/"}>HOME</Link>
                                        <Link href={"/"}>SERVICES</Link>
                                        <Link href={"/"}>ABOUT US</Link>
                                        <Link href={"/"}>CONTACT US</Link>
                                    </nav>
                                </div>



                                <div>
                                    <p className="text-sm text-gray-50 text-center">
                                        © 2024 Raloc™. All Rights Reserved.
                                    </p>
                                </div>
                            </div>}
                        </div>
                    </header>

                    <div className="flex-1 mt-10 grid md:grid-cols-2 relative z-40 sm:px-12">
                        <div className="sm:p-3 p-2 col-span-1 flex items-center">
                            <div>
                                <h1 className="text-xl font-semibold">{slide.heading}</h1>
                                <h2 className="text-5xl font-bold mt-3">{slide.subheading}</h2>
                                <hr className="w-40 h-2 bg-[#fe9000] mt-5 rounded-md border-0" />

                                <p className="mt-8 text-lg font-semibold">{slide.content}</p>

                                <div className="flex gap-4 mt-8">
                                    <button
                                        type="button"
                                        className="p-2 rounded-md bg-[#fe9000] text-white"
                                    >
                                        {slide.button1}
                                    </button>
                                    <button
                                        type="button"
                                        className="p-2 rounded-md bg-[#fe9000] text-white"
                                    >
                                        {slide.button2}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 md:flex hidden items-center justify-center p-3">
                            <div className="p-8 bg-black/30 rounded-lg w-full">
                                <h2 className="text-lg font-semibold">Track Shipment</h2>
                                <p className="text-[#fe9000] mt-3">
                                    ***Track, find and ship your products using Alphacode
                                </p>
                                <div className="mt-12">
                                    <label className="text-center w-full block">
                                        Alphacode / Tracking No.
                                    </label>
                                    <input
                                        className="w-full block p-2 mt-5 rounded-lg bg-white"
                                        type="text"
                                        placeholder="Enter Alphacode / tracking No."
                                    />
                                    <button
                                        type="button"
                                        className="bg-[#fe9000] hover:bg-black transition duration-1000 p-2 flex items-center justify-center gap-2 mx-auto mt-5 rounded-lg px-6 hover:px-8"
                                    >
                                        <FontAwesomeIcon icon={faSearch} width={20} height={20} />
                                        <span>Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}</>
    )
}