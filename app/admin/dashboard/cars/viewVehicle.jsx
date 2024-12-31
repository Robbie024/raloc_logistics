"use client"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { EditVehicle } from "./editVehicle"

export const ViewVehicle = ({ vehicleInfo, setViewVehicle, setFetchData }) => {

    const [editVehicle,setEditVehicle] = useState(false)

    return (
        <div className="fixed top-0 left-0 w-full h-svh bg-black/30 backdrop-blur-sm flex items-center justify-center transition duration-500">
            {editVehicle && <EditVehicle setEditVehicle={setEditVehicle} vehicleInfo={vehicleInfo} setFetchData={setFetchData} setViewVehicle={setViewVehicle} />}
            <div className="p-6 bg-white rounded-lg shadow max-w-2xl w-full">

                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-medium">
                        Manage Vehicle
                    </h1>
                    <button onClick={() => setViewVehicle(false)} type="button" className="p-2 rounded-md bg-gray-100 hover:bg-red-600 hover:text-white text-black transition duration-500">
                        <FontAwesomeIcon icon={faXmark} width={20} height={20} />
                    </button>
                </div>

                <img className="rounded-md h-40 object-cover block w-full" src={vehicleInfo.image} alt={vehicleInfo.name} />

                <div className="mt-5 flex flex-col gap-3">
                    <div>
                        <h1 className="text-xs font-bold text-red-600">
                            Vehicle
                        </h1>
                        <p className="font-semibold">
                            {vehicleInfo.name}
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xs font-bold text-red-600">
                            Description
                        </h1>
                        <p className="text-sm">
                            {vehicleInfo.description}
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xs font-bold text-red-600">
                            Price
                        </h1>
                        <p>
                            $ 500.50
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <button onClick={()=>setEditVehicle(true)} type="button" className="rounded-lg p-2 border border-indigo-600 hover:bg-indigo-600 transition duration-500 hover:text-white text-sm">
                            Edit
                        </button>

                        <button type="button" className="rounded-lg p-2 border border-red-600 hover:bg-red-600 transition duration-500 hover:text-white text-sm">
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}