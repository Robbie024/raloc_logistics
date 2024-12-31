"use client"
import { useEffect, useState } from "react";
import { NewVehicle } from "./newVehicle";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Firebase/config";
import { ViewVehicle } from "./viewVehicle";
import { EditVehicle } from "./editVehicle";

export default function WorkAndPay() {

    const [newVehicle, setNewVehicle] = useState(false)

    const [loading, setLoading] = useState(true)

    const [fetchData, setFetchData] = useState(true)

    const [vehicles, setVehicles] = useState([])

    const [viewVehicle, setViewVehicle] = useState(false)

    const [vehicleInfo,setVehicleInfo] = useState()

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

                setVehicles(vehiclesData)

            }
            catch (e) {
                console.log(e)
                toast.error("Internal Server Error!")
            } finally {
                setLoading(false)
            }
        }

        if (fetchData) {
            getVehicles()
            setFetchData(false)
        }

    }, [fetchData])

    return (
        <div className="sm:py-8 sm:px-5 py-4 px-3">
            {newVehicle && <NewVehicle setNewVehicle={setNewVehicle} setFetchData={setFetchData} />}
            {viewVehicle && <ViewVehicle setViewVehicle={setViewVehicle} vehicleInfo={vehicleInfo} setFetchData={setFetchData} />}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Work & Pay</h2>

                <button type="button" onClick={() => setNewVehicle(true)} className="border border-black hover:text-white p-3 rounded-xl hover:bg-black transition duration-500 flex items-center justify-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>
                        New Vehicle
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">



                {loading ? [1, 2, 3].map((n, index) => (<div key={index} className="rounded overflow-hidden shadow animate-pulse">
                    <div className="w-full h-40 bg-gray-200">

                    </div>
                    <div className="p-3 text-center">
                        <h2 className="font-bold h-3 rounded-md bg-gray-200"></h2>
                        <p className="truncate h-4 rounded-md bg-gray-200 mt-2">
                        </p>

                        <p className="flex gap-1.5 items-center justify-center bg-gray-200 rounded h-3 mt-2">
                        </p>

                        <button type="button" className="p-3 flex mx-auto items-center justify-center gap-1.5 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-500 mt-2 rounded-xl w-1/2 h-6">

                        </button>
                    </div>
                </div>)) : vehicles.length > 0 && vehicles.map((vehicle, index) => (
                    <div key={index} className="rounded overflow-hidden shadow">
                        <img src={vehicle.image} width={600} height={600} className="w-full h-40 object-cover" alt={'vehicle'} />
                        <div className="p-3 text-center">
                            <h2 className="font-bold">{vehicle.name}</h2>
                            <p className="truncate">
                                {vehicle.description}
                            </p>

                            <p className="flex gap-1.5 items-center justify-center">
                                <span className="font-medium">
                                    Applicants:
                                </span>

                                <span>
                                    5
                                </span>
                            </p>

                            <button onClick={() => {
                                setVehicleInfo(vehicle)
                                setViewVehicle(true)
                            }} type="button" className="p-3 flex mx-auto items-center justify-center gap-1.5 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-500 mt-2 rounded-xl">
                                <span>
                                    Manage
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>))}

            </div>

        </div>
    )
}