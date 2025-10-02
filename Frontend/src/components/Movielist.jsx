import React from 'react'
import Moviecard from './Moviecard'

import  '../index.css'

const Movielist = ({title,movies}) => {
    
   
  
    
  return (
    <>
    <div className="h-12 w-screen flex  items-center">
    <h1 className=" text-[18px] md:text-xl xl:text-xl 2xl:text-2xl text-white">{title}</h1></div>
    < div className="flex overflow-x-auto overflow-y-hidden  w-screen">
    <div className="flex gap-x-3  ">
         {
    movies?.map((e)=>{
        return(
          <Moviecard  key={e.id} movieId={e.id} t={e.title} posterPath={e.poster_path} overview={e.overview}/>
   ) })}
       </div>
      
    </div></>
  )
}

export default Movielist
//npm install @mui/material @emotion/react @emotion/styled