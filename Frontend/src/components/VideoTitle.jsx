import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from 'react-redux';

const VideoTitle = ({title,overview}) => {
  
  const t=useSelector(store=>store.movie.t)
   if(t!=null) title=t
    const o=useSelector(store=>store.movie.overview)
   if(o!=null) overview=o
  return (
    <div className="h-screen w-screen absolute z-4 flex  items-center ">
      <div className="h-60  absolute z-5 ">
  
  <h1 className="  text-2xl  text-white  mb-5">{title}</h1>
  <h1 className="hidden  md:block text-white mb-20 w-1/3">
    {overview}
  </h1>
  <div className='flex gap-x-3'>
    <button className="flex items-center justify-center bg-white w-[90px] h-8 text-black rounded-[4px] ">
      <CiPlay1 className="text-2xl" />
    <h1 >Play</h1></button>

    <button className="bg-white w-[140px] h-8 opacity-30 flex text-black items-center justify-center rounded-[4px]"><MdOutlineWatchLater className="text-2xl" /><h1>Watch More</h1></button></div>
  
</div></div>
      
  
  )
}

export default VideoTitle
