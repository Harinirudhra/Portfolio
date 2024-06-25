import HeroImg from '../assets/aboutme3.png'
import React from 'react'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

function Hero() {
  return (
   <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
    <h1 className=' text-white text-6xl font-hero-font'>Hi,<br/> Im Harini
    <p className='text-2xl'>Im a Frontend developer</p>
    </h1>
    <div className='flex py-10'>
      <a href='#'className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
      <a href="#" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a> 
      <a href="#"className='hover:text-white'><AiOutlineGithub size={40}/></a>
    </div>
    </div>
    
    <img className='md:w-1/3 ' src={HeroImg} />
   </section>
  )
}

export default Hero
