import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import{motion} from "framer-motion"
const NavbarMenu =[
  {
    id:1,
    title:"Home",
    link:"#",
  },
  {
    id:2,
    title:"Products",
    link:"#Cards",
  },
  {
    id:3,
    title:"About",
    link:"#Banner",
  },
  {
    id:4,
    title:"Shop",
    link:"#Banner3",
  },
  {
    id:5,
    title:"Contacts",
    link:"#Footer",
  },
];





const Navbar = () => {
  const [open,setOpen]=React.useState(false);
  return (
    <nav>

      <div className="container flex justify-between items-center py-4 md:pt-4">
        {/*Logo Section*/}

        <div className='flex text-2xl items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Fruit</p>
          <p className='text-secondary'>Store</p>
          <FaLeaf className='text-green-500' />
        </div>

         {/*Menu Section*/}
         <div className='hidden md:block'>
          <ul className='flex items-center gap-8 text-gray-600'>
            {NavbarMenu.map((menu)=>(
              <li key={menu.id} className='text-xl '>
                <a className='duration-300 inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold' href={menu.link}>{menu.title}</a>


              </li>
            ))}

            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
            <IoMdCart />

            </button>





          </ul>
         </div>


         {/*Mobile Hamburger Menu Section*/}

         <div className='md:hidden' onClick={()=> setOpen(!open)}>
         <MdMenu className='text-4xl hover:cursor-pointer' />
         <ResponsiveMenu open={open}/>
          
         </div>



      </div>





    </nav>
  )
}

export default Navbar