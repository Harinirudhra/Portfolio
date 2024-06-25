import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
   const [togglemenu,Settogglemenu]=useState(false)
   const [count, setCount] = useState(0);
  return ( <header className="flex justify-between px-6 py-2 bg-primary">
        <a className="font-bold text-black" href="harini ">Harini rudhra</a>
        <nav className="hidden md:block">
           <ul className="flex text-black">
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="project">Project</a></li>
            <li><a href="contact">Contact</a></li>
           </ul>
        </nav>
        {togglemenu &&<nav className="block md:hidden mobile-nav">
           <ul className="flex flex-col text-black">
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="project">Project</a></li>
            <li><a href="contact">Contact</a></li>
           </ul>
        </nav>}
        <button onClick={()=>Settogglemenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
  ) 
}

