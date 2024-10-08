
import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../../img/fotoHero1.png"
import LeafPng from "../../../img/Leaf1.png"
import{motion} from "framer-motion"
import{FadeRight} from "../../utility/Animations"
import{FadeUp} from "../../utility/Animations"

function HeroSection() {
  return (
    <section id="HeroSection">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
            {/* Brand info */}

            <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeRight(0.6)}
                    initial="hidden"
                    animate="visible" 
                    className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>Healty <br />Fresh <span className='text-secondary'>Fruits!</span></motion.h1>
                    <motion.p
                    variants={FadeRight(0.9)}
                    initial="hidden"
                    animate="visible"

                    className='text-2xl tracking-wide'> Order Now For Fresh Healthy Life</motion.p>
                    <motion.p
                    variants={FadeRight(1.2)}
                    initial="hidden"
                    animate="visible"

                    className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus in consectetur iure illum? Omnis nulla fugit minus, deserunt tempora nam at ipsum doloribus cum, aliquam recusandae impedit ut facere! Hic ducimus dolorem vero eaque nulla tempore, illum suscipit enim repellendus.</motion.p>
                    {/* Button section */}
                    <motion.div
                     variants={FadeRight(1.5)}
                     initial="hidden"
                     animate="visible" 
                    className='flex justify-center md:justify-start'>
                        <button
                        className='primary-btn flex items-center gap-2'> <span><IoBagHandleOutline /></span>Order Now</button>
                    </motion.div>
                  

                </div>
            </div>

            {/* Hero img */}

            <motion.div
            initial={{opacity:0,x:200,rotate:75}}
            animate={{opacity:1,x:0,rotate:0}}
            transition={{duration:1,delay:0.2}}

            className='flex justify-center items-center'>
                <img src={HeroPng} alt="" className='w-[350px] md:w-[550px] drop-shadow' />
            </motion.div>

                {/* Leaf img */}
            

            <motion.div
                initial={{opacity:0,y:-200,rotate:75}}
                animate={{opacity:1,y:0,rotate:0}}
                transition={{duration:1,delay:1.5}}

            className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
                <img className='w-full md:max-w-[300px]' src={LeafPng} alt="" />
            </motion.div>

        </div>

    </section>
  )
}

export default HeroSection