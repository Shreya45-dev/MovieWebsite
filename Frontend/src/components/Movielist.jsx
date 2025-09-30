import React from 'react'
import Moviecard from './Moviecard'

import  '../index.css'

const Movielist = ({title,movies}) => {
    
   
  
    
  return (
    <>
    <h1 className="m-5">{title}</h1>
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