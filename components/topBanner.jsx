"use client";

import { faFacebook, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMapPin, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const TopBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const slides = [
        {
            heading: "Welcome to",
            subheading: "RALOC LOGISTICS",
            content:
                "Discover seamless logistics solutions. We specialize in global transportation via sea, land, and air, ensuring safety and efficiency for your goods.",
            image: "/bg1.jpg",
            button1: "Explore Services",
            button2: "Contact Us",
        },
        {
            heading: "Transport Your Goods",
            subheading: "Across the Globe",
            content:
                "Experience hassle-free shipping and delivery worldwide. With our trusted network, we ensure your goods reach their destination smoothly.",
            image: "/bg2.jpg",
            button1: "Get a Quote",
            button2: "Learn More",
        },
        {
            heading: "Empowering Opportunities",
            subheading: "Be a Car Owner on Your Terms",
            content:
                "Join our Work & Pay program and take the first step toward owning your own vehicle with flexible weekly payment plans. Drive your way to independence and success.",
            image: "/bg4.jpg",
            button1: "Learn About Work & Pay",
            button2: "Start Your Journey",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const NavigationLinks = () => (
        <nav className="text-sm md:flex hidden gap-4 font-semibold">
            <Link href='/'>HOME</Link>
            <Link href='/#services'>SERVICES</Link>
            <Link href='/'>ABOUT US</Link>
            <Link href='/#contact'>CONTACT US</Link>
            <Link href='/#work'>WORK & PAY</Link>
            <Link href='/#phone'>PHONE LOANS</Link>
        </nav>
    );

    const MobileNav = () => (
        <div className="fixed top-0 left-0 w-full h-svh bg-gray-800/90 z-50 py-12 px-6 flex flex-col justify-between">
            <button
                onClick={() => setShowMobileNav(false)}
                className="p-2 rounded-md bg-red-600 self-end"
            >
                <FontAwesomeIcon icon={faXmark} width={30} height={30} color="white" />
            </button>
            <nav className="flex flex-col gap-4">
                <Link href='/'>HOME</Link>
                <Link href='/#services'>SERVICES</Link>
                <Link href='/'>ABOUT US</Link>
                <Link href='/#contact'>CONTACT US</Link>
                <Link href='/#work'>WORK & PAY</Link>
                <Link href='/#phone'>PHONE LOANS</Link>
            </nav>
            <p className="text-sm text-gray-50 text-center mt-8">© 2024 Raloc™. All Rights Reserved.</p>
        </div>
    );

    return (
        <>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`h-svh text-white relative flex flex-col ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2 hidden"} transition duration-500 ease-in-out`}
                >
                    <Image
                        src={slide.image}
                        width={2000}
                        height={2000}
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        alt="background image"
                    />
                    {index != 2 ? <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div> : <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>}

                    <header className="sm:px-12 relative z-50">
                        <div className="border-b sm:p-4 p-2 flex justify-between items-center">
                            <div className="flex gap-1.5 items-center">
                                <FontAwesomeIcon icon={faMapPin} width={20} height={20} />
                                <p>Accra, Ghana</p>
                            </div>
                            <div className="flex items-center gap-6">
                                {[faFacebook, faTwitter, faTiktok, faWhatsapp].map((icon) => (
                                    <FontAwesomeIcon key={icon.iconName} icon={icon} width={20} height={20} />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between items-center sm:p-3 p-2">
                            <Image src="/logo.png" width={1000} height={1000} className="w-24 h-auto" alt="logo" />
                            <NavigationLinks />
                            <button
                                type="button"
                                onClick={() => setShowMobileNav(true)}
                                className="bg-white p-1.5 rounded md:hidden block"
                            >
                                <FontAwesomeIcon icon={faBars} width={30} height={30} color="black" />
                            </button>
                        </div>
                    </header>

                    {showMobileNav && <MobileNav />}

                    <div className="flex-1 mt-10 grid md:grid-cols-2 relative z-40 sm:px-12">
                        {index != 2 ? <><div className="sm:p-3 p-2 col-span-1 flex items-center">
                            <div>
                                <h1 className="text-xl font-semibold">{slide.heading}</h1>
                                <h2 className="text-5xl font-bold mt-3">{slide.subheading}</h2>
                                <hr className="w-40 h-2 bg-[#fe9000] mt-5 rounded-md border-0" />
                                <p className="mt-8 text-lg font-semibold">{slide.content}</p>
                                <div className="flex gap-4 mt-8">
                                    {[slide.button1, slide.button2].map((btn, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className="p-2 rounded-md bg-[#fe9000] text-white"
                                        >
                                            {btn}
                                        </button>
                                    ))}
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
                                            className="w-full block p-2 mt-5 rounded-lg bg-white text-gray-700"
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
                            </div></> : <div className="sm:p-3 p-2 col-span-2 flex items-center text-center">
                            <div>
                                <h1 className="text-xl font-semibold">{slide.heading}</h1>
                                <h2 className="text-5xl font-bold mt-3">{slide.subheading}</h2>
                                <hr className="w-40 h-2 bg-[#fe9000] mt-5 rounded-md border-0 mx-auto" />
                                <p className="mt-8 text-lg font-semibold">{slide.content}</p>
                                <div className="flex justify-center gap-4 mt-8">
                                    {[slide.button1, slide.button2].map((btn, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className="p-2 rounded-md bg-[#fe9000] text-white"
                                        >
                                            {btn}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            ))}
        </>
    );
};
