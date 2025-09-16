"use client"
import { HiOutlineDocumentText } from "react-icons/hi"

export default function Docs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50 text-center">
     
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6 shadow-sm">
        <HiOutlineDocumentText className="w-10 h-10" />
      </div>

      
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        No Documents Yet
      </h1>

      
      <p className="text-base text-gray-600 max-w-md leading-relaxed mb-6">
        Start building your library by creating a new doc or uploading existing files.
      </p>

    
      <div className="flex gap-4">
        <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-md transition">
          Create Doc
        </button>
        <button className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 shadow-md transition">
          Upload File
        </button>
      </div>
    </div>
  )
}
