import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center antialiased tracking-tighter bg-white dark:bg-gray-700 min-h-screen py-8">
        <div className="w-full lg:w-3/4">
            <div className="flex justify-around items-center p-2 ">
                <h1 className='text-4xl'>404 Not Found</h1>
            </div>
        </div>
    </div>
  )
}