/** 
 * FileName - motion.js
 * FileType - .js (Js file)
 * Lines - 29
 * Created On - 15/8/2023, 01:19:20
 * Author - Joy Brar
 * See - https://github.com/JoyBrar2001/MUJ-ACM-Student-Chapter_Website
 * Description - This exports the fade in on scroll function as used in framer motion
*/

export const fadeIn = (direction, amount, time, delay = 0) => ({
  hidden: {
    x: direction === 'left' ? -amount : direction === 'right' ? amount : 0,
    y: direction === 'up' ? -amount : direction === 'down' ? amount : 0,
    opacity: 0,
    filter: "blur(5px)",
  },
  show: {
    x: 0,
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: delay,
    },
  },
});