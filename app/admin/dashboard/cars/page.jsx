"use client"
import { useState } from "react";
import { NewVehicle } from "./newVehicle";

export default function WorkAndPay() {

    const [newVehicle,setNewVehicle] = useState(false)

    return (
        <div className="sm:py-8 sm:px-5 py-4 px-3">
            {newVehicle && <NewVehicle setNewVehicle={setNewVehicle} />}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Work & Pay</h2>

                <button type="button" onClick={()=>setNewVehicle(true)} className="border border-black hover:text-white p-3 rounded-xl hover:bg-black transition duration-500 flex items-center justify-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>
                        New Vehicle
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="rounded overflow-hidden shadow">
                    <img src={'/vitz1.jpeg'} width={600} height={600} className="w-full h-40 object-cover" alt={'vehicle'} />
                    <div className="p-3 text-center">
                        <h2 className="font-bold">Toyota Vitz</h2>
                        <p className="truncate">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dicta voluptate dignissimos, cum quibusdam adipisci quo quae iusto porro, quasi veniam delectus quos excepturi nobis magnam facere similique aperiam aliquid?
                        </p>

                        <p className="flex gap-1.5 items-center justify-center">
                            <span className="font-medium">
                                Applicants:
                            </span>

                            <span>
                                5
                            </span>
                        </p>

                        <button type="button" className="p-3 flex mx-auto items-center justify-center gap-1.5 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-500 mt-2 rounded-xl">
                            <span>
                                Manage
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                    </div>
                </div>

                {/* {loading ? <div className="col-span-3 flex flex-col items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faSpinner} width={30} height={30} className="text-lg" spin />
                    <span>
                        Loading Data...
                    </span>
                </div> : offers.length > 0 ? offers.map((opp, index) => (
                    <div key={index} className="rounded overflow-hidden shadow">
                        <img src={opp.listingImage} width={600} height={600} className="w-full h-40 object-cover" alt={opp.listing} />
                        <div className="p-3 text-center">
                            <h2 className="font-bold">{opp.listing}</h2>
                            <p className="flex flex-col items-center justify-center gap-1">
                                <span className="font-medium">
                                    Deadline:
                                </span>

                                <span>
                                    {new Date(opp.deadline).toDateString()}
                                </span>
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
                                setOfferData(opp)
                                setViewOffer(true)
                            }} type="button" className="p-3 flex mx-auto items-center justify-center gap-1.5 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-500 mt-2 rounded-xl">
                                <span>
                                    Manage
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>)) : <div className="col-span-3 flex flex-col items-center justify-center gap-2">

                    <span>
                        No offers Found
                    </span>

                    <Link href="/admin/dashboard/listings/newListing" className="bg-black text-white hover:bg-gray-700 p-2 rounded-md">
                        New Offer
                    </Link>
                </div>} */}

            </div>

        </div>
    )
}