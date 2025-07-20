
import React, { useEffect, useState } from 'react'
import cards_data from "../../public/assets/cards/Cards_data";
import { Link } from 'react-router';


const Cards = ({title}) => {
let [data,setData] =useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTAwOTYyNjc2ODg2NmIwZjMzYTZhMWZkNzM1YjVkMiIsIm5iZiI6MTc1MDY4NzM3Mi4wNTEsInN1YiI6IjY4NTk1ZThjZDU3ZjM2NWU5MTZiYTY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NbyUJS1k5Xav_BXCeo3cMzYki6u8lHTNowdMzbFjbIc'
    }
  };
  
  let a=()=> fetch(`https://api.themoviedb.org/3/movie/${title?title:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setData(res.results))
    .catch(err => console.error(err));


    useEffect(() => {
      a()
    },[])
    
    console.log(data)

    if(!data || data.length===0) return(<h1>no data</h1>)
      else{

      
  return (
    <div className='mt-[20px] w-[100%] px-[10px] '>
        <div>

        <h1 className='font-bold text-xl'>{title?title:"feature Movies"}</h1>

        </div>

<div className='flex  gap-[10px] w-full overflow-x-scroll px-[10px] mt-[20px] scrollbar-hide '>
        {
            data.map((list)=>{
                return(
                  <Link to={`/player/${list.id}`}>
                    <div className='w-[400px] flex-shrink-0 '>
                                        <img className='w-[400px] h-[250px]' src={`https://image.tmdb.org/t/p/w500${list.backdrop_path}`} alt="" />

                                        <div className='flex gap-[30px] justify-between px-[10px]'>
                                        <p>{list.title}</p>
                                      <p>{`ratings:-${list.vote_average}/10`}</p>
                                        </div>
                    </div>
                    </Link>

                )
            }
                

            )
        }


    </div>

    </div>
   
  )}
}

export default Cards