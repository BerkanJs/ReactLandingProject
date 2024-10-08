import React from 'react'
import BannerPng from "../../../img/Brand.png"
import{FadeUp} from "../../utility/Animations"
import{motion} from "framer-motion"

function Banner() {
  return (
    <section id='Banner' className='bg-secondary/10'>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
            {/* Banner Image */}
            <div className='flex justify-center items-center'>

            <motion.img
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{type:"spring",stiffness:100,delay:0.2}} 
            viewport={{once:true}}
            whileHover={{scale:1.1}}
            className='w-[300px] md:max-w-[400px] h-full object-cover' src={BannerPng} alt="" />
            </div>
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




        </div>










    </section>
  )
}

export default Banner