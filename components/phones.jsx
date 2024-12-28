"use client"
import { useState } from "react"
import { ApplicationForm } from "./apply"

export const Phones = () => {

    const [apply, setApply] = useState(false)

    const [selectedListing, setSelectedListing] = useState('')

    return (
        <div id="phone" className="sm:px-12 px-3 py-12 text-center">

            {apply && <ApplicationForm setApply={setApply} listing={selectedListing} />}
            {/* Phones Section */}
            <h1 className="text-lg font-bold mt-16">Affordable Phone Loans</h1>
            <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />
            <p>
                Get the latest devices with flexible daily or weekly payment plans.
            </p>

            <div className="grid sm:grid-cols-4 grid-cols-1 gap-6 mt-8">
                {[
                    {
                        name: "iPhone 13",
                        description: "Powerful performance and advanced camera features.",
                        image: "/13.jpeg",
                        link: "#",
                    },
                    {
                        name: "Samsung Galaxy S21",
                        description: "Flagship Android phone with a sleek design.",
                        image: "/21.jpeg",
                        link: "#",
                    },
                    {
                        name: "Google Pixel 6",
                        description:
                            "Pure Android experience with incredible camera quality.",
                        image: "/pixel.jpeg",
                        link: "#",
                    },
                    {
                        name: "OnePlus 9",
                        description: "Premium performance without the premium price.",
                        image: "/one.jpeg",
                        link: "#",
                    },
                ].map((phone, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={phone.image}
                            alt={phone.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-md text-gray-900 font-bold mt-4">
                                {phone.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                {phone.description}
                            </p>
                            <button
                                onClick={() => {setSelectedListing(phone.name); setApply(true);}}
                                type='button'
                                className="text-[#fe9000] font-semibold mt-4 block"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-6 bg-[#fe9000] text-white px-6 py-2 rounded-md">
                View More Phones
            </button>
        </div>
    )
}