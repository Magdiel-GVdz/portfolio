import React, { useState } from 'react'
import "./sidebar.scss"
import ToggleButton from './toggleButton/ToggleButton'
import Links from './links/Links'
import { delay, motion } from 'framer-motion'

const Sidebar = () => {
    const [open, setOpen] = useState(false)


    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            Transition:{
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            TransitionEvent: {
                delay: 0.5,
                typeo: "spring",
                stiffness: 400,
                damping: 40,
            }
        },
    }

  return (
    <motion.div 
    className="sidebar"
    animate={open ? "open" : "closed"}>

      <motion.div 
      className="bg"
      variants={variants}>

        <Links open={open} setOpen={setOpen}/>

      </motion.div>

      <ToggleButton open={open} setOpen={setOpen}/>

    </motion.div>
  )
}

export default Sidebar