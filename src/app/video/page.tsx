"use client"
import Image from "next/image"
import { HiOutlinePlusCircle } from "react-icons/hi" 

const VideoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white text-center">
     
      <div className="relative w-80 h-56 mb-8">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Video editing illustration"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>

      
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Edit Your Videos
      </h1>

      <p className="text-base text-gray-600 max-w-md leading-relaxed">
        You don’t have any videos yet. Start by uploading or creating a new project to begin editing.
      </p>

    
      <button
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-zinc-200 font-medium rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition duration-200"
        aria-label="Upload a new video"
      >
        <HiOutlinePlusCircle className="w-5 h-5" />
        Upload Video
      </button>
    </div>
  )
}

export default VideoPage
