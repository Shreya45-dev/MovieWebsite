import React, { useEffect } from 'react'
import Header from './Header'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MainContainer from './MainContainer'
import axios from "axios"
import { Now_playing_Movie, options } from '../utils/constant'
import { getNowPlayingMovies, setToggle } from '../redux/movieSlice'
import useNowPlayingMovies from '../hook/useNowPlayingMovies'
import usePopularMovies from '../hook/usePopularMovies'
import useTopRatedMovies from '../hook/useTopRatedMovies'
import upcomingMovies from '../hook/upcomingMovies'
import MovieContainer from './MovieContainer'
import Searchmovie from './Searchmovie'

const Browse = () => {
  
    
  const navigate=useNavigate()
  const dispatch=useDispatch();
const toggle=useSelector(store=>store.movie.toggle)
  

  //my custom hooks
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  upcomingMovies()


  const user=useSelector(store=>store.app.user)
  
  


useEffect(() => {
  if(!user){                             //login krne ke baad hi browse khuleha
    navigate("/")
   

  }
  
}, [])

  
  return (
    <div>

       <Header/>
     {toggle?  <Searchmovie/>:<div>
      <MainContainer/>
      <MovieContainer/></div>}
    </div>
  )
}
export default Browse
