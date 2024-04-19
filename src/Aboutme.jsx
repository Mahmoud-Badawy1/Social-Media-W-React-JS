/* eslint-disable no-unused-vars */
import React from 'react'

function Aboutme() {
  return (
    <div className='w-[20%] ml-52'>
        <div className=' shadow-xl shadow-l-[3px] rounded-xl'>
            <p className=' text-lg font-bold ml-4 py-4'>About Me</p>
            <hr />
            <p className='opacity-50 ml-4 py-4'>’’Lorem ipsum dolor sit amet consectetur  elit’’
            </p>
            <hr />
            <div className='ml-4 py-4'>
                <div className='flex '>
                    <img className='font-bold mr-3' src="../src/SVGs/Location.svg" alt="" />
                    Luxor,Egypt
                </div>
                <div className=' flex'>
                    <img className='font-bold mr-3 ' src="../src/SVGs/Calendar.svg" alt="" />
                    joined,march 2024
                </div>
                <div className='flex'>
                    <img className='font-bold mr-3' src="../src/SVGs/Business.svg" alt="" />
                    Regesterd Nurse
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme