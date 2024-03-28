/* eslint-disable no-unused-vars */
import React from 'react'

function Edit() {
    return (
        <div className=' bg-[#fff6df] w-2/4 px-6 py-4 rounded-3xl drop-shadow-md m-6'>
            {/* <div className=' flex justify-between'>
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
            </div> */}
            <div className='py-4 text-sm'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquam aut earum minima, porro temp</p>
            </div>
            <div className=' flex pb-4'>
                <img src="../src/image-massive-protest-demonstration-with-palestinian-flag.jpg" alt="" className=' w-48 h-36 rounded-2xl' />
                <img src="../src/ابوعبيدة _ POSTER.jpeg" alt="" className=' w-52 h-36 rounded-2xl pl-2' />
                <img src="../src/IMG20240210163908.jpg" alt="" className=' w-56 h-36 rounded-2xl pl-2' />
            </div>
            <div className=' flex  relative pb-4'>
                <img src="../src/SVGs/Pictures Folder.svg" alt="" className=' w-5 h-5 ' /> <span className=' text-sm mb-1'>like</span>
                <img src="../src/SVGs/Comments.svg" alt="" className=' w-5 h-5 ml-4' /> 
                {/* <label className='bg-[#fff6df] ' htmlFor="privacy"></label> */}
                <select className='bg-[#fff6df] ' name="privacy" id="privacy">
                    <option  value="">puplic</option>
                    <option value="">frindes</option>
                    <option value="">only me</option>
                </select>
                
                <div className=' flex absolute left-96'>
                <button className='bg-red-500 w-24 h-10 rounded-full mr-6'>cansel</button>
                <button className='bg-black text-white w-24 h-10 rounded-full '>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Edit