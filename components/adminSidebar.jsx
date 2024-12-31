"use client"
import { useSidebar } from "@/providers/sidebarProvider"
// import { faChartLine, faClockRotateLeft, faDashboard, faPlusCircle, faUsers } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
// import { Logout } from "./logout"
import { useState } from "react"

export const AdminSidebar = () => {

    const pathname = usePathname()

    const { mobileScreen, openSidebar, setOpenSidebar } = useSidebar()

    const [logout, setLogout] = useState(false)

    return (
        <>
            {/* {logout && <Logout setLogout={setLogout} />} */}
            {openSidebar && <div className="bg-[#0d4785] w-[230px] shrink-0 sticky top-0 h-svh transition duration-1000">
                <div className="p-3 flex flex-col gap-2 justify-center items-center border-b-2 border-dotted" >
                    <Image src={'/logo.png'} width={500} height={500} className="md:w-[70px] w-[50px] h-auto bg-white rounded p-2" alt="logo" />
                    {/* <span className="text-xs text-gray-50">
                        Travel far, live fully
                    </span> */}
                </div>

                <div className="flex flex-col gap-4 pl-5 py-5 mt-5 text-sm">
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname == "/admin/dashboard" ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>

                        <span>Dashboard</span>
                    </Link>
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname.includes("/admin/dashboard/applications") ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard/applications'}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>

                        <span>Applications</span>
                    </Link>
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname.includes("/admin/dashboard/cars") ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard/cars'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>


                        <span>Work & Pay</span>
                    </Link>
                    <Link onClick={() => { mobileScreen && setOpenSidebar(false) }} className={`w-full ${pathname.includes("/admin/dashboard/phone") ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/dashboard/phone'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>


                        <span>Phone Loans</span>
                    </Link>
                </div>

                <div className="px-5 absolute bottom-2 w-full left-0">
                    <button type="button" onClick={() => setLogout(true)} className="bg-red-200 hover:bg-red-600 hover:text-white transition duration-500 rounded p-2 py-4 w-full text-sm flex items-center justify-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>

                        <span>
                            Log Out
                        </span>
                    </button>
                </div>
            </div>}
        </>
    )
}