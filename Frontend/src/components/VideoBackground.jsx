import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import useMovieById from '../hook/useMovieById';
import { useSelector } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';
const VideoBackground = ({movieId,bool}) => {
  /*<iframe className="h-screen w-screen aspect-video" width="560"
       height="315" 
       src="https://www.youtube.com/embed/ASXOwoND4EM?si=53JKX1AQC7gzTJ-q&autoplay=1&mute=1" 
       title="YouTube video player"
        frameborder="0"
          allowfullscreen></iframe>*/
           /*<iframe  className="h-screen w-screen aspect-video" width="600"
      height="315" 
      src="https://www.youtube.com/embed/7w5WJZT-3s0?si=eXR1sGsxjv9D_Sdp&autoplay=1&mute=1" 
      title="YouTube video player"
       frameborder="0" 
      
        allowFullScreen></iframe>*/
      /*  iframe
  className="h-screen w-screen aspect-video"
  src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
  title="YouTube video player"&controls=0&rel=0
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>*/
     
      useMovieById(movieId)
        const trailerMovies=useSelector(store=>store.movie.trailerMovies)
        //console.log(trailerMovie.key)
        if (!trailerMovies || !trailerMovies.key) {

            console.log("nahi hai")
          return;}
   // or a loading spinner, etc.

          
        
  return (
    
    <div className=" absolute ">

  <iframe  className={`${bool? "w-[100%] h-[50%] flex justify-center  overflow-hidden": "h-screen w-screen aspect-video" } `}
  //width="600"
   //   height="315" 
      src={`https://www.youtube.com/embed/${trailerMovies.key}?si=eXR1sGsxjv9D_Sdp&autoplay=1&mute=1&controls=0&rels=0`}
      title="YouTube video player"
       frameborder="0" 
       allow="autoplay; encrypted-media"
      
        allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
