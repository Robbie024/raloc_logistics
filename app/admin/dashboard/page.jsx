"use client"
import { db } from "@/Firebase/config";
import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [loading, setLoading] = useState(true)

    const [vehiclesCounts, setVehiclesCounts] = useState(0)
    const [phonesCount, setPhonesCount] = useState(0)
    const [applicationCounts,setApplicationCounts] = useState(0)

    // Reusable function to fetch counts
    const fetchCount = async (collectionPath) => {
        try {
            const collectionRef = collection(db, collectionPath);
            const snapshot = await getCountFromServer(collectionRef);
            return snapshot.data().count;
        } catch (error) {
            console.log(error)
            // console.error(`Error fetching count for ${collectionPath}:`, error);
            toast.error("Internal server error!")
            return 0; // Fallback count in case of error
        }
    };

    useEffect(() => {
        const getCounts = async () => {
            try {
                const vehiclesCounts = await fetchCount("raloc/logistics/vehicles");
                setVehiclesCounts(vehiclesCounts);

                const phonesCount = await fetchCount("raloc/logistics/phones");
                setPhonesCount(phonesCount);

                const applicationCount = await fetchCount("raloc/logistics/applications");
                setApplicationCounts(applicationCount);
            } catch (e) {
                console.log(e)
                toast.error("Internal server error!")
            } finally {
                setLoading(false)
            }
        };

        getCounts();
    }, []);

    return (
        <div className="px-5 py-5">
            <h1 className="text-gray-900 text-2xl font-bold mb-5">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-700">Applications</h3>
                        {/* <FontAwesomeIcon icon={faUsers} width={30} height={30} className="text-indigo-600 text-3xl" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>

                    </div>
                    {loading ? <span className="w-32 h-6 animate-pulse bg-gray-300 block mt-3 rounded-md"></span> : <p className="text-2xl font-bold text-gray-800">{applicationCounts}</p>}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-700">Work & Pay</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>


                    </div>
                    {loading ? <span className="w-32 h-6 animate-pulse bg-gray-300 block mt-3 rounded-md"></span> : <p className="text-2xl font-bold text-gray-800">{vehiclesCounts}</p>}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-700">Phone Loans</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>


                    </div>
                    {loading ? <span className="w-32 h-6 animate-pulse bg-gray-300 block mt-3 rounded-md"></span> : <p className="text-2xl font-bold text-gray-800">{phonesCount}</p>}
                </div>
            </div>
        </div>
    )
}