'use client';
import React from 'react';
import {
    FaImage, FaVideo, FaPaintBrush, FaMagic,
    FaEdit, FaSyncAlt, FaRunning, FaBrain
} from 'react-icons/fa';

const tools = [
    { name: "Image", description: "Generate images with custom styles from text or other categories.", icon: <FaImage size={20} />, color: "bg-pink-500", isNew: true },
    { name: "Video", description: "Generate videos with Motion, Photo, Memory, Looms, and more.", icon: <FaVideo size={20} />, color: "bg-purple-500" },
    { name: "Realtime", description: "Realtime AI rendering on canvas. Instant feedback results.", icon: <FaPaintBrush size={20} />, color: "bg-blue-500" },
    { name: "Enhancer", description: "Upscale and enhance images and videos up to 2K.", icon: <FaMagic size={20} />, color: "bg-green-500", isNew: true },
    { name: "Edit", description: "Add objects, change style, or export products and generations.", icon: <FaEdit size={20} />, color: "bg-yellow-500", isNew: true },
    { name: "Video Loops", description: "AI syncs any video to any audio.", icon: <FaSyncAlt size={20} />, color: "bg-red-500", isNew: true },
    { name: "Motion Transfer", description: "Transfer motion to images and animate characters.", icon: <FaRunning size={20} />, color: "bg-indigo-500", isNew: true },
    { name: "Train", description: "Teach tools to replicate your style, products, or characters.", icon: <FaBrain size={20} />, color: "bg-teal-500" }
];

export default function Generate() {
    return (
        <div className='w-full max-w-[93%] mx-auto px-4 pt-4 md:pt-10'>
            <h1 className='md:text-2xl text-lg font-bold mb-4'>Generate</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="rounded-xl p-3 flex flex-col sm:flex-row sm:items-center gap-3 transition"
                    >
                        
                        <div
                            className={`w-12 h-12  flex items-center justify-center text-white rounded-xl ${tool.color}`}
                        >
                            {React.cloneElement(tool.icon,)}
                        </div>


                        <div className="flex-1 mt-2">
                            <h2 className="text-sm font-semibold flex items-center gap-2">
                                {tool.name}
                                {tool.isNew && (
                                    <span className="px-2 py-1 text-[8px] font-medium rounded-full bg-blue-700 text-white">
                                        NEW
                                    </span>
                                )}
                            </h2>
                            <p className="text-xs text-gray-700 mb-4">{tool.description}</p>
                        </div>

                        <button className="bg-zinc-200 text-black px-4 py-2 rounded-2xl font-medium hover:bg-gray-200 transition w-full sm:w-auto">
                            Open
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
