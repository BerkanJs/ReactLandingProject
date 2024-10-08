import React from 'react'
import Dish1 from "../../../img/dish2.png"
import{FadeUp} from "../../utility/Animations"
import{FadeLeft} from "../../utility/Animations"
import{motion} from "framer-motion"
function Banner2() {
  return (
    <section id='Banner2' >
    <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-24">
         {/* Brand Info */}
         <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>

                <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                animate="visible" 
                className='text-3xl lg:text-6xl font-bold uppercase'>Brand info </motion.h1>
                <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                animate="visible" 
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sint illum ea ullam quae, officiis officia ipsam ipsum nulla harum itaque aliquid, accusamus consequatur incidunt pariatur doloremque quas quibusdam aspernatur.</motion.p>
                <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                animate="visible" 
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi qui dolorum cumque in porro quod.</motion.p>
                {/* Button section */}
                <motion.div
                 variants={FadeUp(1.1)}
                 initial="hidden"
                 animate="visible" 
                className='flex justify-center md:justify-start'>
                    <button
                    className='primary-btn'> <span></span>Learn More</button>
                </motion.div>

            </div>



        </div>










        {/* Banner Image */}
        <div className='flex justify-center items-center'>

        <motion.img
        variants={FadeLeft(0.5)}
        initial="hidden"
        whileInView={"visible"} 
        whileHover={{scale:1.1}}
        className='w-[300px] md:max-w-[400px] h-full object-cover' src={Dish1} alt="" />
        </div>
     




    </div>










</section>
    












  )
}

export default Banner2