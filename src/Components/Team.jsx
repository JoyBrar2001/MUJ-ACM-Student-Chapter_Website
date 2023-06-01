import React from 'react'
import { CoreList, ExecList } from '../constants/data'
import Soham from '../assets/Team/Exec/Soham.png'

const CreateExecCard = ({name, position, image}) => {
    return (
        <div className='team__card__bg flex flex-col rounded-3xl pt-3 transition-all duration-200 hover:shadow-2xl hover:shadow-[#10BED5]/20'>
            <img src={image} className='w-[280px] mx-auto' alt={name} />
            <div className='team__card__content rounded-3xl flex flex-col text-center text-white py-4 px-4'>
                <h1 className='font-bold text-3xl'>{name}</h1>
                <h3 className='font-normal text-lg'>{position}</h3>
            </div>
        </div>
    )
}

const CreateCoreCard = ({name, position, image}) => {
    return (
        <div className='team__card__bg flex flex-col rounded-3xl pt-3 transition-all duration-200 hover:shadow-2xl hover:shadow-[#10BED5]/20'>
            <img src={image} className='w-[200px] mx-auto' alt={name} />
            <div className='team__card__content rounded-3xl flex flex-col text-center text-white py-4 px-4'>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <h3 className='font-normal text-sm'>{position}</h3>
            </div>
        </div>
    )
}

const Team = () => {
  return (
    <div id='Team' className='w-full max-w-[1200px] mx-auto h-full'>
      <h1 className='team__title__gradient text-center text-7xl font-bold my-12 uppercase'>The Team</h1>
        <div className='flex flex-wrap gap-x-16 gap-y-20 justify-center items-center relative'>
            <div className='absolute w-[600px] h-[600px] blue__gradient left-0 bottom-0 translate-x-[-100%]' />
            {ExecList.map((element, index) => (
                <CreateExecCard key={index} {...element} />
            ))}
        </div>
        <div className='flex flex-wrap gap-x-16 gap-y-20 justify-center items-center relative my-20'>
            {/* <div className='absolute w-[600px] h-[600px] blue__gradient right-0 bottom-0 translate-x-[-100%]' /> */}
            {CoreList.map((element, index) => (
                <CreateCoreCard key={index} {...element} />
            ))}
        </div>
    </div>
  )
}

export default Team
