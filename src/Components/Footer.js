import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center p-3 border-t-2 border-gray-800 dark:border-gray-100 dark:bg-gray-700'>
        <div className="sm:py-5">
          <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/_frdfdlh_._/"><FontAwesomeIcon className="text-3xl px-3 text-gray-700 dark:text-gray-100" icon={faInstagram}/></a>
          <a  rel="noreferrer" target={"_blank"} href="https://github.com/FaridFadilah"><FontAwesomeIcon className="text-3xl px-3 text-gray-700 dark:text-gray-100 text-gray-700" icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/farid-fadillah-396589251/"  rel="noreferrer" target={"_blank"}><FontAwesomeIcon className="text-3xl px-3 text-gray-700 dark:text-gray-100" icon={faLinkedin}/></a>
        </div>
    </div>
  )
}