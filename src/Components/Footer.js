import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex items-center justify-between p-3 border-t-2 border-gray-800 dark:border-gray-100 dark:bg-gray-700'>
        <div className="">
          <a href="https://www.instagram.com/_frdfdlh_._/"><FontAwesomeIcon icon={faInstagram}/></a>
          <a href="https://github.com/FaridFadilah"><FontAwesomeIcon icon={faGithub}/></a>
          <a href=""><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
        <h1 className='text-xl dark:text-gray-100'>&copy; Created by Farid Fadilah Permana</h1>
    </div>

  )
}