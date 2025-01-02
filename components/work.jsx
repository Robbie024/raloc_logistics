"use client"

import { useEffect, useState } from "react"
import { ApplicationForm } from "./apply"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/Firebase/config"
import { toast } from "react-toastify"

export const Work = () => {

    const [apply, setApply] = useState(false)

    const [selectedListing, setSelectedListing] = useState('')

    const [loading, setLoading] = useState(false)

    const [cars, setCars] = useState([])

    useEffect(() => {

        const getVehicles = async () => {
            try {
                const getVehiclesDataRequest = await getDocs(
                    collection(db, "raloc/logistics/vehicles")
                );

                const vehiclesData = getVehiclesDataRequest.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setCars(vehiclesData)

            }
            catch (e) {
                console.log(e)
                toast.error("Internal Server Error!")
            } finally {
                setLoading(false)
            }
        }

        getVehicles()

    }, [])

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
                {loading ? [
                    1, 2, 3, 4
                ].map((num, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
                    >
                        <div className="h-40 bg-gray-200"> </div>
                        <div className="p-4">
                            <h3 className="text-md font-bold text-gray-900 mt-4 h-4 rounded-md bg-gray-200">
                            </h3>
                            <p className="text-sm text-gray-600 mt-2 bg-gray-200 rounded-md h-4"></p>
                            <button
                                type='button'
                                className="text-[#fe9000] font-semibold mt-4 block bg-gray-200 animate-pulse h-6 w-20"
                            >
                            </button>
                        </div>
                    </div>
                )) : cars.length > 0 ? cars.map((car, index) => (<div
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
                        <p className="text-sm text-gray-600 mt-2 truncate">{car.description}</p>
                        <button
                            onClick={() => { setSelectedListing(car.name); setApply(true); }}
                            type='button'
                            className="text-[#fe9000] font-semibold mt-4 block"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>)) : <div className="flex sm:col-span-4 justify-center items-center flex-col gap-4 bg-gray-100 p-6 rounded text-gray-700">
                    <p className="text-sm">No Vehicles Found.</p>
                    <p className="font-bold">
                        Please try again later!
                    </p>
                </div>}
            </div>

            <button className="mt-6 bg-[#fe9000] text-white px-6 py-2 rounded-md">
                View More Cars
            </button>
        </div>
    )
}