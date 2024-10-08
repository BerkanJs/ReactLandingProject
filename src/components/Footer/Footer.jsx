import React from 'react'
import { FaLeaf,FaFacebook,FaTwitter,FaLinkedin,FaInstagramSquare} from "react-icons/fa";
import { motion } from 'framer-motion'
import{FadeLeft} from "../../utility/Animations"
import{FadeRight} from "../../utility/Animations"

function Footer() {
  return (
    <footer id='Footer' className='min-w-full bg-primary/10 mt-5'>

        <div className='container flex justify-between items-center py-10'>
            {/*Logo Section*/}
        <motion.div
         variants={FadeRight(0.5)}
         initial="hidden"
         animate="visible"
         whileHover={{scale:1.1}}   

         className='flex  text-2xl items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Fruit</p>
          <p className='text-secondary'>Store</p>
          <FaLeaf className='text-green-500' />
        </motion.div>
        <motion.div
        variants={FadeLeft(0.5)}
        initial="hidden"
        animate="visible"
        whileHover={{scale:1.1}}  
        className='flex text-xl lg:text-3xl  gap-2 text-gray-600'>
      
            <FaFacebook/>
            <FaTwitter/>
            <FaLinkedin/>
            <FaInstagramSquare/>








        </motion.div>

            








        </div>










    </footer>
  )
}

export default Footer