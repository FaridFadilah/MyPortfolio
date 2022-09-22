import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center antialiased tracking-tighter bg-white dark:bg-gray-700 min-h-screen py-8">
        <div className="w-full lg:w-3/4">
            <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center p-2 ">
                <div className="">
                    <h1 className='text-4xl text-gray-700 dark:text-gray-100'>Farid Fadilah Permana</h1>
                    <h1 className='text-2xl text-gray-700 text-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Junior Web Developer</h1>
                    <p className='text-xl text-gray-700 dark:text-gray-100 font-extralight'>hi there, welcome to my personal Profile </p>
                </div>
                <img className='w-4/12' src={require("../Img/5e5357ae7371bb53cf9ec160_peep-52.png")} alt="" />
            </div>
        </div>
    </div>
  )
}