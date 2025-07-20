import React from 'react'

const Nav = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
        <div className=' flex justify-between items-center  px-[30px] h-[50px] '>
            <div className='flex  gap-[30px] flex-initial'>
            <img className='w-[100px]' src="./public/assets/logo.png" alt="" />
            <div className=''>
                <ul className='flex gap-[10px]'>
                    <li>home</li>
                    <li>Tv show</li>
                    <li>Movies</li>
                    <li>My List</li>
                    <li>Languages</li>
                </ul>
            </div></div>
            <div className='flex justify-center items-center gap-[10px]'>
                <div>
                    <img src="./public/assets/search_icon.svg" alt="" />
                </div>
                <p>Children</p>
                <img src="./public/assets/bell_icon.svg" alt="" />
                <div className='flex flex-col h-full  p-[20px] relative group items-center'>
                    <div className='flex flex-row items-center'>
                        <img className='' src="./public/assets/profile_img.png" alt="" />
                        <img className="" src="./public/assets/caret_icon.svg" alt="" />
                    </div>
                    <div className='absolute bottom-[-20px] mt-2 border px-[10px] left-1/2 -translate-x-1/2 rounded underline w-[100px] hidden group-hover:block bg-black text-black z-10'>
                        <p>Sign Out </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav