"use client"
import { useEffect, useState } from "react";
import { NewPhone } from "./newPhone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Firebase/config";
import { ViewPhone } from "./viewPhone";

export default function Phones() {

    const [newPhone, setNewPhone] = useState(false)

    const [loading, setLoading] = useState(true)

    const [fetchData, setFetchData] = useState(true)

    const [phones, setPhones] = useState([])

    const [viewPhone, setViewPhone] = useState(false)

    const [phoneInfo, setPhoneInfo] = useState()

    useEffect(() => {

        const getPhones = async () => {
            try {
                const getPhonesDataRequest = await getDocs(
                    collection(db, "raloc/logistics/phones")
                );

                const phonesData = getPhonesDataRequest.docs.map((doc) => ({
                    id: doc.id,
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

        if (fetchData) {
            getPhones()
            setFetchData(false)
        }

    }, [fetchData])

    return (
        <div className="sm:py-8 sm:px-5 py-4 px-3">
            {newPhone && <NewPhone setNewPhone={setNewPhone} setFetchData={setFetchData} />}
            {viewPhone && <ViewPhone phoneInfo={phoneInfo} setViewPhone={setViewPhone} setFetchData={setFetchData} />}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Phone Loans</h2>

                <button type="button" onClick={() => setNewPhone(true)} className="border border-black hover:text-white p-3 rounded-xl hover:bg-black transition duration-500 flex items-center justify-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>
                        New Phone
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 relative z-40">



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
                </div>)) : phones.length > 0 && phones.map((phone, index) => (
                    <div key={index} className="rounded overflow-hidden shadow">
                        <img src={phone.image} width={600} height={600} className="w-full h-40 object-cover" alt={'phone'} />
                        <div className="p-3 text-center">
                            <h2 className="font-bold">{phone.name}</h2>
                            <p className="truncate">
                                {phone.description}
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
                                setPhoneInfo(phone);
                                setViewPhone(true)
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