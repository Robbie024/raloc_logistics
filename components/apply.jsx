"use client"
import { db } from "@/Firebase/config";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ApplicationForm = ({ setApply,listing }) => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        tel: '',
        address: '',
        listing
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setLoading(true)
            // Save to Firestore
            const addApplication = await addDoc(collection(db, `raloc/logistics/applications`), { ...formData });

            if (addApplication?.id) {
                toast.success("Your application has successfully being received!")
                setApply(false)
                setFormData({
                    fullName: '',
                    email: '',
                    tel: '',
                    address: ''
                })
            } else {
                toast.error("Unkwown Error Happened!")
            }
        }
        catch (e) {
            toast.error("Internal Server Error!")
            console.log(e)
        } finally {
            setLoading(false)
        }

    };

    return (
        <div className="fixed top-0 left-0 w-full h-svh flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 text-left">
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
                <h1 className="text-xl font-bold text-center">Application Form</h1>
                <p className="text-center text-gray-600 mt-2 text-sm">
                    Thank you for your interest! Please fill out the form below with your personal info, and we’ll get back to you shortly.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* General Information */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="w-full p-2 mt-1 border rounded-md"
                            placeholder="Enter your full name"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData((prevD) => ({ ...prevD, fullName: e.target.value }))}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 mt-1 border rounded-md"
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData((prevD) => ({ ...prevD, email: e.target.value }))}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full p-2 mt-1 border rounded-md"
                            placeholder="Enter your phone number"
                            required
                            value={formData.tel}
                            onChange={(e) => setFormData((prevD) => ({ ...prevD, tel: e.target.value }))}
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="w-full p-2 mt-1 border rounded-md"
                            placeholder="Enter your home address"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData((prevD) => ({ ...prevD, address: e.target.value }))}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center flex items-center justify-center gap-4 mt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#fe9000] text-white px-6 py-2 rounded-md hover:bg-black transition duration-300 disabled:bg-gray-400 flex items-center justify-center gap-2"
                        >
                            {loading ? <> <FontAwesomeIcon icon={faSpinner} spin width={20} height={20} /> <span> Submitting... </span> </> : <span>Submit Application</span>}
                        </button>

                        <button
                            onClick={() => setApply(false)}
                            type="button"
                            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-800 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
