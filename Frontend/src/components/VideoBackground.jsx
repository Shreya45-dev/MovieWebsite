import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import useMovieById from '../hook/useMovieById';
import { useSelector } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';
const VideoBackground = ({movieId,bool}) => {
  
       
     
      useMovieById(movieId)
        const trailerMovies=useSelector(store=>store.movie.trailerMovies)
        
        if (!trailerMovies || !trailerMovies.key) {

            console.log("nahi hai")
          return;}
   

          
        
  return (
    
    <div className=" absolute ">

  <iframe  className={`${bool? "w-[100%] h-[50%] flex justify-center  overflow-hidden": "h-screen w-screen aspect-video" } `}
  width="600"
      height="315" 
      src={`https://www.youtube.com/embed/${trailerMovies.key}?si=eXR1sGsxjv9D_Sdp&autoplay=1&mute=1&controls=0&rels=0`}
      title="YouTube video player"
       frameborder="0" 
       allow="autoplay; encrypted-media"
      
        allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
