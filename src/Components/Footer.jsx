import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center text-center'>
        <div className='flex  gap-[10px]'>
            <img className='h-[30px]' src="./public/assets/youtube_icon.png" alt="" />
            <img className='h-[30px]' src="./public/assets/twitter_icon.png" alt="" />
            <img className='h-[30px]' src="./public/assets/instagram_icon.png" alt="" />
            <img className='h-[30px]' src="./public/assets/facebook_icon.png" alt="" />
</div>
            <div className="">
                <ul className='grid-cols-3 grid'>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>Legal</li>
                    <li>Audio Description</li>
                    <li>Dmca</li>
                    <li>Claims</li>
                    <li>Works US</li>
                    <li>Clients</li>
                </ul>
            </div>
<p className='text-gray-400'>© 1970-2025 Netflix.inc</p>
        </div>
    
  )
}

export default Footer