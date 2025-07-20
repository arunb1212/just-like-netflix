import React, { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from 'react-router';

const Player = () => {


    const {id}=useParams()
  let [data,setData]= useState({
        name:"",
        key:"",
        typeof:"",
    })
let nevigate=useNavigate()
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTAwOTYyNjc2ODg2NmIwZjMzYTZhMWZkNzM1YjVkMiIsIm5iZiI6MTc1MDY4NzM3Mi4wNTEsInN1YiI6IjY4NTk1ZThjZDU3ZjM2NWU5MTZiYTY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NbyUJS1k5Xav_BXCeo3cMzYki6u8lHTNowdMzbFjbIc'
        }
      };
      


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setData(res.results[0]))
        .catch(err => console.error(err));
    },[])

    console.log(data)
  return (
    <div className='px-[20px] w-full h-screen  bg-black '>
<div className='flex gap-[50px] pt-[10px] '>
<button className='bg-white px-[10px] rounded text-black' onClick={()=>nevigate(-2)}>Back</button>
<h1 className='text-2xl font-bold'>{data.name}</h1>
</div>
        
        <div className=' p-[20px]  w-[100%] rounded  h-[700px]'>
        <iframe className='w-full h-full ' width="100%" height="500%"src={`https://www.youtube.com/embed/${data.key}`} allowFullScreen frameBorder="0" ></iframe>
        </div>


        <div className='flex justify-between  px-[20px]'>
            <p>{`publish at :-${data.published_at? data.published_at.slice(0, 10) : "N/A"}`}</p>
            {/* <p>Name:-{data.name}</p> */}
            <p>{`Type:-${data.type}`}</p>
        </div>
    </div>

  )
}

export default Player