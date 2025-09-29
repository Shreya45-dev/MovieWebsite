import React from 'react'
import { url } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getId, getoverview, gett, setOpen } from '../redux/movieSlice'

const Moviecard = ({posterPath,movieId,t,overview}) => {
  
  const dispatch=useDispatch()
   if(posterPath===null) return null
   const handleopen=()=>{
    dispatch(getId((movieId)));
    dispatch(gett((t)))
    dispatch(getoverview((overview)))
    console.log(movieId)
    dispatch(setOpen(true))


   }
  return (
    
    <div className="h-40 md:h-48 lg:h-56 xl:h-56 2xl:h-60 w-32  md:w-40 lg:w-48  2xl:w-56 " onClick={handleopen}>
      <img src={`${url}/${posterPath}`} alt="movie-banner"/>
    </div>
  )
}

export default Moviecard      //mui dialog
