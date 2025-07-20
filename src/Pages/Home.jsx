import React from 'react'
import Nav from '../Components/Nav'
import Cards from "../Components/Cards"
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
        <Nav/>
        <div className="relative"> 
            <img className='w-full' src="./public/assets/hero_banner.jpg" alt="" />
            <div className='absolute w-[400px] left-[20px]  bottom-[100px] '>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores ex quis quasi vitae odio, pariatur consequatur ratione nesciunt delectus? Ducimus soluta quasi tempore enim officiis veritatis mollitia iusto nam, ullam aut minus </p>
<div className='flex gap-[20px] mt-[20px]'>
  <button className='h-[50px]  rounded px-[20px] bg-red-600 text-black ease-in-out linear duration-150 active:scale-[0.9] '>Play</button>
  <button className=' bg-[grey] text-black rounded px-[20px] ease-in-out linear duration-150 active:scale-[0.9]  '>WatchList</button>
</div>
        </div>
        </div>
        <Cards/>
        
        <Cards title={"top_rated"}/>
        <Cards title={"popular"}/>
        <Cards title={"upcoming"}/>

        <div className=' flex items-center w-full  h-[200px]'>
        <Footer/>
        </div>
    </div>
  )
}

export default Home