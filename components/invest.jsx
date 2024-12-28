"use client"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { ApplicationForm } from "./apply"

export const Invest = () => {

    const [apply, setApply] = useState(false)

    return (
        <div className="relative bg-[url('/investment.jpg')] text-center bg-cover bg-center bg-fixed sm:px-12 px-3 py-12">
            {apply && <ApplicationForm setApply={setApply} />}
            <div className="absolute top-0 left-0 w-full h-full bg-white/60 backd z-20"></div>
            <div className="relative z-40">
                <h1 className="font-bold text-xl">INVEST WITH US NOW</h1>
                <p>Earn Big Tomorrow</p>
                <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />

                <p className="mt-8">
                    Our investment plan works for individuals over the age of eighteen
                    (18) and organizations. A 7.5% rate of the total amount invested is
                    earned as interest per every month in the duration of six (6)
                    months.
                </p>

                <button onClick={() => setApply(true)} type="button" className="rounded-md bg-black p-4 mt-8 text-sm text-white hover:bg-gray-700 transition duration-500 relative"> JOIN US NOW <FontAwesomeIcon icon={faCircle} width={20} height={20} className="absolute -top-1 -right-1 animate-ping" color="red" /> </button>
            </div>
        </div>
    )
}