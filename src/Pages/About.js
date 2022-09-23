import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center antialiased tracking-tighter bg-white dark:bg-gray-700 h-full">
        <div className="w-full lg:w-3/4 py-8">
            <div className="flex lg:flex-row flex-col-reverse items-center p-2 lg:justify-between">
                <div className="w-3/4 flex flex-col py-3">
                    <h1 className='text-4xl text-gray-700 dark:text-gray-100 font-bold'>Farid Fadilah Permana</h1>
                    <p className='w-3/4 py-3 text-xl text-gray-700 dark:text-gray-100 leading-relaxed'>hi, perkenalkan saya Farid Fadilah Permana, saya tinggal dibandung, keahlian saya bidang web development, pertama kali saya suka ngoding diumur 17 tahun. </p>
                    <div className="w-2/3 flex justify-between gap-5">
                      <div className="flex flex-col ">
                        <h1 className='text-2xl font-bold text-gray-700 dark:text-gray-100'>Domisili</h1>
                        <span className='text-lg text-gray-700 dark:text-gray-100'>Bandung - Jawa Barat - 40624</span>
                      </div>
                      <div className="flex flex-col">
                        <h1 className='text-2xl font-bold text-gray-700 dark:text-gray-100'>Umur</h1>
                        <span className='text-lg text-gray-700 dark:text-gray-100'>19 Tahun</span>
                      </div>
                    </div>
                    <div className="w-2/3 py-5 flex justify-between">
                      <div className="flex flex-col">
                        <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-bold">Pendidikan</h1>
                        <h3 className="text-xl text-gray-700 dark:text-gray-100 font-medium">SMK Bakti Nusantara 666</h3>
                        <h5 className="text-xl text-gray-700 dark:text-gray-100">Rekayasa Perangkat Lunak (RPL)</h5>
                        <span className="text-lg text-gray-700 dark:text-gray-100">2019 - 2022</span>
                      </div>
                    </div>
                      <div className="flex flex-col">
                        <h1 className="text-2xl text-gray-700 dark:text-gray-100 font-bold">Magang</h1>
                        <h3 className="text-xl text-gray-700 dark:text-gray-100">Geka Sublim</h3>
                        <h5 className="text-lg text-gray-700 dark:text-gray-100">Quality Control</h5>
                        <h5 className="text-lg text-gray-700 dark:text-gray-100">Job desk</h5>
                        <ul className='list-disc pl-5'>
                          <li className='text-md text-gray-700 dark:text-gray-100'>Melakukan Checking ulang pada product yang sudah selesai diproduksi</li>
                          <li className='text-md text-gray-700 dark:text-gray-100'>Melakukan packing barang yg sudah selesai</li>
                        </ul>
                      </div>
                </div>
                <div className="rounded-full py-3 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
                  <img className='w-80 aspect-square object-cover rounded-full' src={require("../Img/IMG_20220607_135959.jpg")} alt="" />
                </div>
            </div>
        </div>
        <div className="w-3/4 py-8">
            <div className="block justify-between items-center">
              <h1 className='text-2xl font-bold text-gray-700 dark:text-gray-100'>Skill</h1>
              <div className="flex flex-row">
                <div className="grid lg:grid-cols-5 grid-cols-2 gap-10">
                  <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-700 dark:border-gray-100 p-5">
                    <img className='w-1/4' src={require("../Img/Laravel.png")} alt="" />
                    <h1 className='text-gray-700 dark:text-gray-100'>Laravel</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-700 dark:border-gray-100 p-5">
                    <img className='w-1/4' src={require("../Img/mysql.png")} alt="" />
                    <h1 className='text-gray-700 dark:text-gray-100'>Mysql</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-700 dark:border-gray-100 p-5">
                    <img className='w-1/4' src={require("../Img/Bootstrap.png")} alt="" />
                    <h1 className='text-gray-700 dark:text-gray-100'>Bootstrap</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-700 dark:border-gray-100 p-5">
                    <img className='w-1/4' src={require("../Img/Tailwind.png")} alt="" />
                    <h1 className='text-gray-700 dark:text-gray-100'>Tailwind</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-700 dark:border-gray-100 p-5">
                    <img className='w-1/4' src={require("../Img/React.png")} alt="" />
                    <h1 className='text-gray-700 dark:text-gray-100'>React Js</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-700 dark:border-gray-100 p-5">
                    <img className='w-1/4' src={require("../Img/PHP.png")} alt="" />
                    <h1 className='text-gray-700 dark:text-gray-100'>PHP</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-lg border-2 border-gray-700 dark:border-gray-100 p-5">
                    <img className='w-1/4' src={require("../Img/Js.png")} alt="" />
                    <h1 className='text-gray-700 dark:text-gray-100'>Javascript</h1>
                  </div>
                </div>
              </div> 
            </div>
          </div>
    </div>
  )
}