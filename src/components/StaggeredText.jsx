import React from 'react'
import { motion, easeInOut } from 'framer-motion'

const StaggeredText = ({ title,  fontsize, delay, totalDelay }) => {
    
    let text = title.split('')
    let myLineObj = []
    text.forEach((element, index) => {
      myLineObj.push(
        {
          letter: element,
          index: index,
        }
      )
    })
  
    return <p style={{fontSize: fontsize}} className='text-white/80 w-full block text-center' >
      {myLineObj.map((el, index) => (
        <motion.span
          className={`inline-block ${el.letter === ' ' ? `w-[10px]` : ''}`}
          key={index}
          initial = {{opacity: 0,}}
          whileInView={{opacity: 1, transition:{duration: 1, delay: delay*el.index + totalDelay, ease: easeInOut}}}
        >
          {el.letter}
        </motion.span>
      ))}
    </p>;
}

export default StaggeredText
