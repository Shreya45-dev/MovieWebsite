import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'
const MovieContainer = () => {

  const movie=useSelector(store=>store.movie)
  
  return (
    <div>
    <div className=' h-[350px] md:h-[540px] 2xl:h-[540px] '></div>
    
    <div className=" absolute bg-black z-10">
    <Movielist title={"Popular Movie"} movies={movie.PopularMovies}/>
    
    <Movielist title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
    
    <Movielist title={"Top Rated Movies"} movies={movie.TopRatedMovies}/>
    
    <Movielist title={"Upcoming Movies"} movies={movie.UpcomingMovies}/>
    </div>
    </div>
  )
}

export default MovieContainer

