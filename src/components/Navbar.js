import React, {useState} from 'react'
import {FaBars , FaTimes, FaLinkedin ,FaFacebook, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/c.png'
import { Link } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-[60px] justify-between items-center flex bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="Logo" style={{width: '50px', height: '50px'}} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex' >
                <li><Link to="home"  smooth={true} offset={50} duration={500}>
                    Home
                </Link></li>
                <li><Link to="about"  smooth={true} offset={50} duration={500}>
                    About
                </Link></li>
                <li><Link to="skills"  smooth={true} offset={50} duration={500}>
                    Skills
                </Link></li>
                <li><Link to="work"  smooth={true} offset={50} duration={500}>
                    Projects
                </Link></li>
                <li><Link to="contact"  smooth={true} offset={50} duration={500}>
                    Contact Us
                </Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 '>
                {!nav ? <FaBars size={25}/> : <FaTimes size={25}/> }
            </div>

            {/* Mobile View */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                 <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true} offset={50} duration={500}>
                    Home
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true} offset={50} duration={500}>
                    About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true} offset={50} duration={500}>
                    Skills
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true} offset={50} duration={500}>
                    Projects
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"  smooth={true} offset={50} duration={500}>
                    Contact Us
                </Link></li>
            </ul>

            {/* Social Media Icons */}
            <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
               <ul>
                   <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>LinkedIn
                       <a className='flex justify-between items-center w-full text-gray-300'href="/">
                            <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>GitHub
                        <a className='flex justify-between items-center w-full text-gray-300'href="/">
                            <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>Email 
                        <a className='flex justify-between items-center w-full text-gray-300'href="/">
                            <HiOutlineMail size={30}/>
                        </a> 
                    </li>
                    <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>Resume
                        <a className='flex justify-between items-center w-full text-gray-300'href="/">
                            <BsFillPersonLinesFill size={30}/>
                        </a> 
                    </li>
              </ul>
            </div>
        </div>
    )   
}

export default Navbar
