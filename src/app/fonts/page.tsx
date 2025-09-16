import React from "react";
import { FaFont, FaPlus } from "react-icons/fa";

export default function Text() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800">
      
      <div className="bg-blue-100 p-6 rounded-full shadow-md">
        <FaFont className="text-5xl text-blue-600" />
      </div>

     
      <h1 className="mt-6 text-2xl font-semibold">Text & Fonts</h1>
      <p className="mt-2 text-gray-500 max-w-md text-center">
        Customize your fonts, styles, and text appearance. Start editing to see
        your words come alive.
      </p>

    
      <div className="mt-6 p-6 rounded-xl border bg-white shadow-sm w-80 text-center">
        <p className="text-lg font-serif">Aa — The quick brown fox jumps over the lazy dog</p>
      </div>

      <button className="mt-6 flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
        <FaPlus /> Add Text
      </button>
    </div>
  );
}
