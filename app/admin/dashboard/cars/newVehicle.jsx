"use client"
import { db, imageDb } from "@/Firebase/config";
import { faPlusCircle, faSpinner, faUpload, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";

export const NewVehicle = ({ setNewVehicle }) => {

    const [formData, setFormData] = useState({
        name: '',
        description: ''
    })

    const handleSelectImage = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            // Create a preview URL htmlFor the selected image
            const previewURL = URL.createObjectURL(selectedImage);
            setFormData((prevData) => ({ ...prevData, imagePreview: previewURL, imageFile: selectedImage }));
        }
    };

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const imgRef = ref(imageDb, `raloc/logistics/vehicles/${v4()}`);
            const uploadImage = await uploadBytes(imgRef, formData.imageFile);
            const getImageUrl = await getDownloadURL(uploadImage.ref);

            const data = {
                name: formData.name, description: formData.description, image: getImageUrl, createdAt: new Date().toISOString()
            }

            const addVehicle = await addDoc(collection(db, `raloc/logistics/vehicles`), data);

            if (addVehicle?.id) {
                toast.success('New Vehicle Uploaded successfully!')
                setNewVehicle(false)
            } else {
                toast.error('Unexpected error while adding offer, please try again later!')
            }
        }
        catch (e) {
            console.log(e)
            toast.error('Internal server error!')
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="fixed top-0 left-0 w-full h-svh bg-black/30 backdrop-blur-sm flex items-center justify-center transition duration-500">
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow max-w-xl w-full">

                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-medium">
                        New Vehicle
                    </h1>
                    <button onClick={() => setNewVehicle(false)} type="button" className="p-2 rounded-md bg-gray-100 hover:bg-red-600 hover:text-white text-black transition duration-500">
                        <FontAwesomeIcon icon={faXmark} width={20} height={20} />
                    </button>
                </div>

                <div>
                    <label htmlFor="name" className="text-sm mb-2">
                        Vehicle Name / Brand
                    </label>
                    <input type="text" id="name" required className="border rounded-md p-2 block w-full outline-blue-300 text-sm" value={formData.name} onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))} placeholder="e.g. Toyota Vitz 2019 Model" />
                </div>

                <div className="mt-3">
                    <label htmlFor="description" className="text-sm mb-2">
                        Description
                    </label>
                    <textarea id="description" required className="border rounded-md p-2 block w-full outline-blue-300 text-sm" value={formData.description} onChange={(e) => setFormData((prevData) => ({ ...prevData, description: e.target.value }))} placeholder="Some little details about the vehicle or work"></textarea>
                </div>

                <div className="mt-3">
                    {formData.imagePreview ? <div className="h-[200px] block object-cover rounded-md overflow-hidden border w-full"> <img src={formData.imagePreview} className="h-full block object-cover w-full" /> </div> : <label htmlFor="image" className="text-sm flex items-center justify-center flex-col h-[200px] border rounded-md gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faPlusCircle} width={20} height={20} />
                        <span>
                            Upload an image of the vehicle
                        </span>
                    </label>}
                    <input type="file" id="image" onChange={(e) => handleSelectImage(e)} accept="image/*" hidden />
                </div>

                <div className="mt-3 text-center">
                    <button disabled={loading} type="submit" className="w-full rounded-md bg-indigo-600 hover:bg-indigo-800 transition duration-500 text-white p-2 text-sm flex items-center justify-center gap-3 disabled:bg-indigo-300 disabled:cursor-blocked">
                        {loading ? <> <FontAwesomeIcon icon={faSpinner} spin width={20} height={20} /> <span>Uploading...</span></> : <><FontAwesomeIcon icon={faUpload} width={20} height={20} />
                            <span>
                                Upload Vehicle
                            </span></>}
                    </button>
                </div>

            </form>
        </div>
    )
}