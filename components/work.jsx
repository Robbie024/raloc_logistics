"use client"

import { useState } from "react"
import { ApplicationForm } from "./apply"

export const Work = () => {

    const [apply, setApply] = useState(false)

    const [selectedListing, setSelectedListing] = useState('')

    return (
        <div
            id="work"
            className="sm:px-12 px-3 bg-gray-900 py-12 text-center"
        >
            {/* Cars Section */}
            {apply && <ApplicationForm setApply={setApply} listing={selectedListing} />}

            <div className="text-gray-100">
                <h1 className="text-lg font-bold">Own a Vehicle on Your Terms</h1>
                <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />
                <p>Apply for any of our vehicles below</p>
            </div>

            <div className="grid sm:grid-cols-4 text-gray-100 grid-cols-1 gap-6 mt-8">
                {[
                    {
                        name: "Toyota Corolla",
                        description:
                            "Reliable and fuel-efficient sedan for daily commutes.",
                        image: "/corrola.jpeg",
                        link: "#",
                    },
                    {
                        name: "Honda Civic",
                        description: "Stylish and sporty with advanced safety features.",
                        image: "/civic.jpeg",
                        link: "#",
                    },
                    {
                        name: "Toyota Vitz",
                        description: "Durable saloon car for all tasks and events.",
                        image: "/vitz1.jpeg",
                        link: "#",
                    },
                    {
                        name: "Toyota Yaris",
                        description: "Modern design and nice driving experience.",
                        image: "/yaris.jpeg",
                        link: "#",
                    },
                ].map((car, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-md font-bold text-gray-900 mt-4">
                                {car.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">{car.description}</p>
                            <button
                                onClick={() => { setSelectedListing(car.name); setApply(true); }}
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
                View More Cars
            </button>
        </div>
    )
}