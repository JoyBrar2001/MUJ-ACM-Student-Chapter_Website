export const fadeIn = (direction, amount, time, delay=0 ) => ({
    hidden:{
        x: direction === 'left' ? -amount : direction === 'right' ? amount : 0 ,
        y: direction === 'up' ? -amount : direction === 'down' ? amount : 0 ,
        opacity:0,
    },
    show:{
        x: 0,
        y: 0,
        opacity: 1,
        transition:{
            duration: 1,
            ease: 'easeOut',
            delay: delay,
        },
    },
});