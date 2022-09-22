import { faBootstrap, faGithub, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Portfolio() {
  return (
    <div className="flex flex-col lg:flex-row justify-center antialiased tracking-tighter bg-white dark:bg-gray-700 min-h-screen py-8">
      <div className="w-full lg:w-3/4 px-5">
        <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-bold">PortFolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div className="w-full ">
            <div className="border-2 border-gray-700 dark:border-gray-100 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h1 className='text-2xl text-gray-700 dark:text-gray-100'>Shopping Cart Feature</h1>
                <div className="">
                  <a className='px-2' target="_blank" rel='noreferrer' href='https://github.com/FaridFadilah/React-Shopping-Cart'><FontAwesomeIcon className='text-2xl dark:text-gray-100' icon={faGithub}/></a>
                  <a className='px-2' target='_blank' rel='noreferrer' href="https://faridfadilah.github.io/React-Shopping-Cart/" ><FontAwesomeIcon className='text-2xl dark:text-gray-100' icon={faArrowUpRightFromSquare}/></a>
                </div>
              </div>
              <p className='text-lg pt-2 text-gray-700 dark:text-gray-100'>Create Shopping cart feature </p>
              <div className="flex items-center pt-2">
                <FontAwesomeIcon className='text-2xl text-blue-400' icon={faReact}/>
                <img className='w-6 mx-2' src={require("../Img/Tailwind.png")} alt=""/>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="border-2 border-gray-700 dark:border-gray-100 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h1 className='text-2xl text-gray-700 dark:text-gray-100'>Portfolio Personal Website</h1>
                <div className="">
                  <a className='px-2' target="_blank" rel='noreferrer' href='https://github.com/FaridFadilah/Personal-profile'><FontAwesomeIcon className='text-2xl dark:text-gray-100' icon={faGithub}/></a>
                  <a className='px-2' target='_blank' rel='noreferrer' href="https://faridfadilah.github.io/React-Shopping-Cart/" ><FontAwesomeIcon className='text-2xl dark:text-gray-100' icon={faArrowUpRightFromSquare}/></a>
                </div>
              </div>
              <p className='text-lg pt-2 text-gray-700 dark:text-gray-100'>Membuat website pribadi </p>
              <div className="flex items-center pt-2">
                <FontAwesomeIcon className='text-2xl text-blue-400' icon={faReact}/>
                <img className='w-6 mx-2' src={require("../Img/Tailwind.png")} alt=""/>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="border-2 border-gray-700 dark:border-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center">
                <h1 className='text-2xl text-gray-700 dark:text-gray-100'>Reservasi Hotel</h1>
                <div className="">
                  <a className='px-2' target="_blank" rel='noreferrer' href='https://github.com/FaridFadilah/Hotel/tree/master'><FontAwesomeIcon className='text-2xl dark:text-gray-100' icon={faGithub}/></a>
                </div>
              </div>
              <p className='text-lg pt-2 text-gray-700 dark:text-gray-100'>pemesanan kamar hotel, terdapat fitur autentikasi dan autorization</p>
              <div className="flex items-center pt-2">
                <FontAwesomeIcon className='text-2xl px-2' icon={faLaravel}/>
                <FontAwesomeIcon className='text-2xl px-2' icon={faBootstrap}/>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="border-2 border-gray-700 dark:border-gray-100 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <h1 className='text-2xl text-gray-700 dark:text-gray-100'>Movie Apps</h1>
                <a href="https://github.com/FaridFadilah/Movie-Apps" target={"_blank"} rel='noreferrer'>
                  <FontAwesomeIcon className='text-2xl dark:text-gray-100' icon={faGithub}/>
                </a>
              </div>
              <p className='text-lg pt-2 text-gray-700 dark:text-gray-100'>Membuat aplikasi Movie menggunakan API dari API TMDB</p>
              <div className="flex items-center pt-2">
                <FontAwesomeIcon className='text-2xl text-red-600' icon={faLaravel}/>
                <img className='w-7 mx-2' src={require("../Img/Tailwind.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="border-2 border-gray-700 dark:border-gray-100 rounded-lg p-5">
              <div className="flex justify-between items-center">
                <h1 className='text-2xl text-gray-700 dark:text-gray-100'>Learn API</h1>
                 <a className='px-2' target="_blank" rel='noreferrer' href='https://github.com/FaridFadilah/Learn-API'><FontAwesomeIcon className='text-2xl' icon={faGithub}/></a>
              </div>
              <p className='text-lg pt-2 text-gray-700 dark:text-gray-100'>belajar membuat API menggunakan Laravel 9 & passport</p>
              <div className="flex items-center pt-2">
                <FontAwesomeIcon className='text-2xl text-red-600' icon={faLaravel}/>
                <img className='w-8 mx-2' src={require("../Img/mysql.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}