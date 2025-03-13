"use client"
import { useEffect, useState } from "react"
import { ApplicationForm } from "./apply"
import { collection, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "@/Firebase/config"

export const Phones = () => {

    const [apply, setApply] = useState(false)

    const [selectedListing, setSelectedListing] = useState('')

    const [loading, setLoading] = useState(true)
    const [phones, setPhones] = useState([])

    useEffect(() => {

        const getPhones = async () => {
            try {
                const getPhonesDataRequest = await getDocs(
                    collection(db, "raloc/logistics/phones")
                );

                const phonesData = getPhonesDataRequest.docs.map((doc) => ({
                    iphonesd: doc.id,
                    ...doc.data(),
                }));

                setPhones(phonesData)

            }
            catch (e) {
                console.log(e)
                toast.error("Internal Server Error!")
            } finally {
                setLoading(false)
            }
        }

        getPhones()

    }, [])

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
                {loading ? [
                    1, 2, 3, 4
                ].map((num, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
                    >
                        <div className="w-full h-40 bg-gray-200">

                        </div>
                        <div className="p-4">
                            <h3 className="text-md text-gray-900 font-bold mt-2 bg-gray-200 h-4 rounded-md">
                            </h3>
                            <p className="text-sm text-gray-600 mt-2 h-4 bg-gray-200 rounded-md">
                            </p>
                            <button
                                type='button'
                                className="text-[#fe9000] font-semibold mt-4 block h-6 bg-gray-200 rounded-md w-20"
                            >
                            </button>
                        </div>
                    </div>
                )) : phones.length > 0 ? phones.map((phone, index) => (<div
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
                        <p className="text-sm text-gray-600 mt-2 truncate">
                            {phone.description}
                        </p>
                        <button
                            onClick={() => { setSelectedListing(phone.name); setApply(true); }}
                            type='button'
                            className="text-[#fe9000] font-semibold mt-4 block"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>)) : <div className="flex sm:col-span-4 justify-center items-center flex-col gap-4 bg-gray-100 p-6 rounded">
                    <p className="text-sm">No Phones Found.</p>
                    <p className="font-bold">
                        Please try again later!
                    </p>
                </div>}
            </div>

            <button 
                onClick={() => window.location.href = "/phones"}
                className="mt-6 bg-[#fe9000] text-white px-6 py-2 rounded-md">
                View More Phones
            </button>
        </div>
    )
}
