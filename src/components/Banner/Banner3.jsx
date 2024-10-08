import React from 'react'
import{FadeUp} from "../../utility/Animations"
import{motion} from "framer-motion"
import bg1 from "../../../img/Bg4.jpg"

const bdStyle={
    backgroundImage:`url(${bg1})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
  
}
function Banner3() {
  return (
    <section id='Banner3'>


        <div style={bdStyle} className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-24 rounded-3xl'>

            <div></div>


        <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>

                    <motion.h1
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    animate="visible" 
                    className='text-3xl lg:text-6xl font-bold uppercase text-secondary'>Brand info </motion.h1>
                    <motion.p
                    variants={FadeUp(0.7)}
                    initial="hidden"
                    animate="visible" 
                    className='font-bold text-yellow-950 pt-4 '
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sint illum ea ullam quae, officiis officia ipsam ipsum nulla harum itaque aliquid, accusamus consequatur incidunt pariatur doloremque quas quibusdam aspernatur.</motion.p>
                    <motion.p
                    className='font-bold text-yellow-950'
                    variants={FadeUp(0.9)}
                    initial="hidden"
                    animate="visible" 
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi qui dolorum cumque in porro quod.</motion.p>
                    {/* Button section */}
                    <motion.div
                     variants={FadeUp(1.1)}
                     initial="hidden"
                     animate="visible" 
                    className='flex justify-center md:justify-start pt-4'>
                        <button
                        className='primary-btn'> <span></span>Purchase</button>
                    </motion.div>

                </div>



            </div>

        </div>










    </section>
  )
}

export default Banner3