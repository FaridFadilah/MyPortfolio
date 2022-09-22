// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import DarkMode from './DarkMode'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-center p-3 border-b-2 border-b-slate-800 dark:bg-gray-700 dark:border-gray-100'>
      <div className="w-full lg:3/4">
        <div className='flex justify-between'>
          <div className=""></div>
            <div className="">
                <CustomLink to="/" children={"Home"}/>
                <CustomLink to="/about" children={"About"}/>
                <CustomLink to="/portfolio" children={"Portfolio"}/>
            </div>
          <div className="px-5"><DarkMode/></div>
        </div>
      </div>
    </nav>
  )
}
// {path === href ? ""}
function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <Link to={to} className={isActive ? "text-xl px-4 text-blue-400 border-b-2 border-b-slate-700 dark:border-gray-100" : "text-xl px-4 hover:transition hover:translate-x-2 hover:duration-200 hover:text-purple-700 hover:border-b-2 hover:animate-bounce dark:hover:border-b-gray-100 hover:border-b-gray-700 dark:text-gray-100"}>{children}</Link>
    )
}