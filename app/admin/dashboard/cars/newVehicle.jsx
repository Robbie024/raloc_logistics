import { faPlusCircle, faUpload, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NewVehicle = ({setNewVehicle}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-svh bg-black/30 backdrop-blur-sm flex items-center justify-center transition duration-500">
            <div className="p-6 bg-white rounded-lg shadow max-w-xl w-full">

                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-medium">
                        New Vehicle
                    </h1>
                    <button onClick={()=>setNewVehicle(false)} type="button" className="p-2 rounded-md bg-gray-100 hover:bg-red-600 hover:text-white text-black transition duration-500">
                        <FontAwesomeIcon icon={faXmark} width={20} height={20} />
                    </button>
                </div>

                <div>
                    <label htmlFor="name" className="text-sm mb-2">
                        Vehicle Name / Brand
                    </label>
                    <input type="text" id="name" required className="border rounded-md p-2 block w-full outline-blue-300 text-sm" placeholder="e.g. Toyota Vitz 2019 Model" />
                </div>

                <div className="mt-3">
                    <label htmlFor="description" className="text-sm mb-2">
                        Description
                    </label>
                    <textarea id="description" required className="border rounded-md p-2 block w-full outline-blue-300 text-sm" placeholder="Some little details about the vehicle or work"></textarea>
                </div>

                <div className="mt-3">
                    <label htmlFor="image" className="text-sm flex items-center justify-center flex-col h-[200px] border rounded-md gap-2">
                        <FontAwesomeIcon icon={faPlusCircle} width={20} height={20} />
                        <span>
                            Upload an image of the vehicle
                        </span>
                    </label>
                </div>

                <div className="mt-3 text-center">
<button type="button" className="w-full rounded-md bg-indigo-600 hover:bg-indigo-800 transition duration-500 text-white p-2 text-sm flex items-center justify-center gap-3">
    <FontAwesomeIcon icon={faUpload} width={20} height={20} />
    <span>
        Upload Vehicle
    </span>
</button>
                </div>

            </div>
        </div>
    )
}