import React from 'react'
import Fruit1 from "../../../img/img-fruits/orrange.png"
import Fruit2 from "../../../img/img-fruits/plum.png"
import Fruit3 from "../../../img/img-fruits/apple.png"
import Fruit4 from "../../../img/img-fruits/Heildel.png"
import { motion } from 'framer-motion'
import{FadeLeft} from "../../utility/Animations"


const CardData=[
    {
        id:1,
        title:"Fresh Oranges",
        link:"/",
        price:"65.00 Turkish Lira",
        img:Fruit1,
        delay:0.3
    },
    {
        id:2,
        title:"Fresh Heildelbeere",
        link:"/",
        price:"45.00 Turkish Lira",
        img:Fruit4,
        delay:0.6
    },
    {
        id:3,
        title:"Good Quality Apple",
        link:"/",
        price:"25.00 Turkish Lira",
        img:Fruit3,
        delay:0.9
    },
    {
        id:4,
        title:"Fantastic Damson",
        link:"/",
        price:"75.00 Turkish Lira",
        img:Fruit2,
        delay:1.2
    },
    
];

function Cards() {
  return (
    <section id='Cards'>
        <div className='container pt-12 pb-20'>
            <motion.h1
            initial={{opacity:0,x:-200}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1,delay:0.3}}


            className='text-2xl font-bold text-left pb-10 uppercase'>Our Menu</motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {CardData.map((menu)=>(
                    <motion.div
                    variants={FadeLeft(menu.delay)}
                    initial="hidden"
                    whileInView={"visible"} 
                    whileHover={{scale:1.1}}
                    className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_10px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3' key={menu.id}>
                        <img className='w-[60px] mb-4 scale-110 transform-translate-y-6 ' src={menu.img} alt="" />


                    <div>
                        <h1 className='text-lg font-semibold'>{menu.title}</h1>
                        <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                    </div>
                    </motion.div>

                ))}



            </div>






        </div>





    </section>
  )
}

export default Cards