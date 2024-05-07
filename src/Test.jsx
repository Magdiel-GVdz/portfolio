import React, { useState } from 'react'
import "./app.scss"
import { motion } from 'framer-motion'

const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: {opacity: 1, },
        hidden: {opacity: 0,}
    }
  return (
    <div className='course'>
        <motion.div 
            className='box'
            variants={variants}
            //initial="hidden"
            //animate="visible"
            //whileInView={{opacity: 1, scale: 2}}
            transition={{duration: 1}}
            animate={open ? "visible" : "hidden"}
            ></motion.div>
            <button onClick={() => setOpen(prev=>!prev)}>Toggle</button>

    </div>
  )
}

export default Test