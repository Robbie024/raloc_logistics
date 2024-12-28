"use client"
import { useState } from "react";

export const ApplicationForm = ({setApply}) => {
    
    const [formData,setFormData] = useState({
        fullName : '',
        email : '',
        tel : '',
        address : ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
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
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center flex items-center justify-center gap-4">
                        <button
                            type="submit"
                            className="bg-[#fe9000] text-white px-6 py-2 rounded-md hover:bg-black transition duration-300"
                        >
                            Submit Application
                        </button>

                        <button
                        onClick={()=>setApply(false)}
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
