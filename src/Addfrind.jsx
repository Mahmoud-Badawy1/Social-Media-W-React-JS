/* eslint-disable no-unused-vars */
import React from 'react'

function Addfrind() {
  return (
    <div className=' w-3/5'>
        <div> 
        <div className='  '>
            <div className='relative'>
            <img src="../src/SVGs/Cordoba-at-sunset.jpg" alt="" className='  w-full h-64 rounded-t-xl' />

            </div>
            <div className=' absolute left-7 top-[222px]'>
            <img
                        src="../src/IMG20240210163908.jpg"
                        alt=""
                        className="  w-16 h-16 rounded-full "
                    />
            </div>
        </div>
        <div className=' mt-5 flex justify-end '> 
            <button className=' border-solid border-y border-x border-black py-1 px-7 rounded-xl'>Message</button>
            <button className='ml-4 py-1 px-7 rounded-xl bg-[#98BEFF] text-white '>Add friend</button>
        </div>
        <div className=' flex justify-around mt-4'>
            <div className="mx-4 ml-[-80px]">
                    <h3 className=" flex justify-center font-semibold">Mahmoud Badawy</h3>
                    <p className=" text-xs  flex justify-center opacity-60">
                        @mahmoudbadawy
                    </p>
                </div>
            <div className=' flex justify-around mr-[-110px]'>
                <div className="mx-16">
                        <h3 className=" flex justify-center font-semibold">100</h3>
                        <p className=" text-xs  flex justify-center opacity-60">
                            Posts
                        </p>
                    </div>
                <div className="mx-16 ">
                        <h3 className=" flex justify-center font-semibold">1k</h3>
                        <p className=" text-xs  flex justify-center opacity-60">
                            Following
                        </p>
                    </div>
                <div className="mx-16 ">
                        <h3 className=" flex justify-center font-semibold">100K</h3>
                        <p className=" text-xs  flex justify-center opacity-60">
                            Followers
                        </p>
                    </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Addfrind