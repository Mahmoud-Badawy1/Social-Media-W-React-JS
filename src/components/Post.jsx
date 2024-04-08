/* eslint-disable no-unused-vars */
import React from 'react'
import '../index.css';

function Post() {
    return (
        
        <div className=' bg-[#fff6df] w-2/4 px-6 py-4 rounded-3xl drop-shadow-md m-6'>
            <div className=' flex justify-between'>
                <div className=' flex'>
                    <div className=''>
                        <img src="../src/IMG20240210163908.jpg" alt="" className=' w-10 h-10 rounded-full ' />
                    </div>
                    <div className='ml-4'>
                        <h4>
                            Mohamed Badawy
                        </h4>
                        <p className=' text-xs text-center opacity-30'>
                            2 hours ago
                        </p>
                    </div>
                </div>
                <a   href='#' className=' bg-[url(../src/SVGs/edit-icon.svg)] bg-[length:55px_40px] bg-no-repeat  w-12 '></a>
            </div>
            <div className='py-4 text-sm'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam aut earum minima, porro temp</p>
            </div>
            <div className=' flex '>
                <img src="../src/SVGs/Love.svg" alt="" className=' w-5 h-5' /> <span className=' text-sm mb-1'>like</span>
                <img src="../src/SVGs/Comments.svg" alt="" className=' w-5 h-5 ml-4' /><span className=' text-sm mb-1'>Comment</span>
            </div>
        </div>
    )
}

export default Post