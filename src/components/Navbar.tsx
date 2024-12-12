import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';


const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <div className='w-full bg-cyan-800 text-white px-4 py-2 rounded-lg' >
        <div className='flex justify-between place-items-center'>
            <div className='pl-5 text-xl font-medium'>Shaz Salim</div>
            <ul className='gap-16 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href="#hero">Home</a></li>
                <li className='menuLink'><a href="#about">About</a></li>
                <li className='menuLink'><a href="#projects">Projects</a></li>
                <li className='menuLink'><a href="#skills">Skills</a></li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
       <div className='md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> :
        <AiOutlineMenu size={30} />
        }
       </div>
        </div>

      {isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li className='menuLink'>
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className='menuLink'>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className='menuLink'>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className='menuLink'>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className='menuLink'>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )

      }
    </div>
  )
}

export default Navbar