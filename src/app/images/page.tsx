"use client"
import { HiOutlinePhotograph } from "react-icons/hi"

export default function Images() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white text-center">
      
      <div className="text-blue-600 mb-6">
        <HiOutlinePhotograph className="w-16 h-16" />
      </div>

   
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Your Image Gallery
      </h1>

 
      <p className="text-base text-gray-600 max-w-md leading-relaxed">
        No images have been added yet. Upload pictures or create a new gallery to get started.
      </p>

    
      <button
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-zinc-200  font-medium rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition duration-200"
        aria-label="Upload a new image"
      >
        <HiOutlinePhotograph className="w-5 h-5" />
        Upload Image
      </button>
    </div>
  )
}
