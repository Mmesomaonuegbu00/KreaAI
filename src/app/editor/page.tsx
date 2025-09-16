"use client"
import { HiOutlinePencilAlt } from "react-icons/hi"

export default function Editor() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white text-center">
     
      <div className="text-blue-600 mb-6">
        <HiOutlinePencilAlt className="w-16 h-16" />
      </div>

      
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Start Editing
      </h1>

     
      <p className="text-base text-gray-600 max-w-md leading-relaxed">
        Create and customize your work with powerful editing tools. Begin a new document or open an existing one to start editing.
      </p>

   
      <div className="flex gap-4 mt-8">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        >
          New Document
        </button>
        <button
          className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
        >
          Open File
        </button>
      </div>
    </div>
  )
}
