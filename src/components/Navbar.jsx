import React from 'react'
import { assets } from '../assets/assets'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='flex w-full h-36 absolute ' >
            <div className='flex w-full px-12 justify-between items-center'>
                <a href="/"><img className='w-40' src={assets.Logonil} alt="" /></a>

                <div className='flex justify-center items-center'>

                    <div className='flex justify-center font-serif text-white items-center gap-5' >

                        <a className='text-[14px] ' href="">Photography</a>

                        <a className='text-[14px]' href="">Films</a>

                        <a className='text-[14px]' href="">Contact Us</a>

                        <a className='text-[14px]' href="">Editorial</a>

                        <a className='text-[14px]' href="">More</a>

                    </div>

                    <div className='flex justify-center font-serif items-center pl-8 gap-8'>
                        <div>
                            <a className='text-white text-[18px]' href=""><FaInstagram /></a>
                        </div>
                        <div>
                            <a className='text-white text-[18px]' href=""><FaFacebookSquare /></a>
                        </div>
                        <div>
                            <a className='text-white text-[18px]' href=""><FaTwitter /></a>
                        </div>

                    </div>

                    <div className='flex justify-center font-serif items-center pl-5' >
                        <a className='text-[10px] p-3 bg-[#756b51] border-0 rounded-[10px] hover:bg-[#928667]' href="">Get In Touch</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
