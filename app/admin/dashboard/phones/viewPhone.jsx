"use client"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { EditPhone } from "./editPhone"
import { DelPhone } from "./delPhone"

export const ViewPhone = ({ phoneInfo, setViewPhone, setFetchData }) => {

    const [editPhone, setEditPhone] = useState(false)

    const [delPhone, setDelPhone] = useState(false)

    return (
        <div className="fixed top-0 left-0 w-full h-svh bg-black/30 backdrop-blur-sm flex items-center justify-center transition duration-500 z-50">
            {editPhone && <EditPhone setEditPhone={setEditPhone} phoneInfo={phoneInfo} setFetchData={setFetchData} setViewPhone={setViewPhone} />}
            {delPhone && <DelPhone phoneId={phoneInfo.id} setDelPhone={setDelPhone} setFetchData={setFetchData} setViewPhone={setViewPhone} />} 
            <div className="p-6 bg-white rounded-lg shadow max-w-2xl w-full">

                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-medium">
                        Manage Phone
                    </h1>
                    <button onClick={() => setViewPhone(false)} type="button" className="p-2 rounded-md bg-gray-100 hover:bg-red-600 hover:text-white text-black transition duration-500">
                        <FontAwesomeIcon icon={faXmark} width={20} height={20} />
                    </button>
                </div>

                <img className="rounded-md h-40 object-cover block w-full" src={phoneInfo.image} alt={phoneInfo.name} />

                <div className="mt-5 flex flex-col gap-3">
                    <div>
                        <h1 className="text-xs font-bold text-red-600">
                            Phone
                        </h1>
                        <p className="font-semibold">
                            {phoneInfo.name}
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xs font-bold text-red-600">
                            Description
                        </h1>
                        <p className="text-sm">
                            {phoneInfo.description}
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
                        <button onClick={() => setEditPhone(true)} type="button" className="rounded-lg p-2 border border-indigo-600 hover:bg-indigo-600 transition duration-500 hover:text-white text-sm">
                            Edit
                        </button>

                        <button onClick={() => setDelPhone(true)} type="button" className="rounded-lg p-2 border border-red-600 hover:bg-red-600 transition duration-500 hover:text-white text-sm">
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}