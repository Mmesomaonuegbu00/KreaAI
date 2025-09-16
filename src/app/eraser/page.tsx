"use client"
import { HiOutlineTrash } from "react-icons/hi"

export default function Eraser() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg bg-white border border-blue-100 rounded-2xl shadow-lg p-8">
       
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            <HiOutlineTrash className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Eraser Tool</h1>
        </div>

      
        <p className="text-gray-600 mb-6">
          Clean up your workspace by removing unwanted files or drafts. Select the items you want to erase and confirm to clear them.
        </p>

       
        <div className="border-2 border-dashed border-blue-300 rounded-xl flex flex-col items-center justify-center py-12">
          <HiOutlineTrash className="w-10 h-10 text-blue-400 mb-3" />
          <p className="text-gray-500">No items selected</p>
        </div>

        <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-md transition">
          Select Items to Erase
        </button>
      </div>
    </div>
  )
}
