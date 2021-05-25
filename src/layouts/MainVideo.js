import React from 'react'
import mainmp4 from '../videos/Train - 3880.mp4'
import { motion } from 'framer-motion'

const Mainvideo = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0}
    }

    return (
        <div className ='mainvideo'>
            <motion.p 
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{duration: 1}}
            className ='maincountry'
            >/ SWISS</motion.p>
            <motion.p 
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{duration: 1}}
            className ='maininfo'
            >ROUTE DE VISSIGEN</motion.p>
           <video autoPlay loop muted>
               <source src={mainmp4} type="video/mp4" />
           </video>
        </div>
    )
}

export default Mainvideo
