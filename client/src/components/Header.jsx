import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
            <h1 className='font-bold flex '>
                <span>HomeFinder </span>
                <span className='text-red-700'>PRO</span>
            </h1>
            </Link>
            <form className='bg-slate-100 p-2 rounded-lg flex items-center' >
                <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch/>
            </form>
            <ul className='flex gap-4 items-center'>
                <Link to="/about">
                    <li className='font-bold hidden sm:inline hover:underline rounded'>about</li>
                </Link>
                <Link to="/signIn">
                    <li className='font-bold hover:underline rounded'>Login</li>
                </Link>
                <Link to="/signUp">
                    <li className='hidden font-bold sm:inline hover:underline rounded'>SignUp</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header