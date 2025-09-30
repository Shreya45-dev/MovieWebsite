import React, { use, useState } from 'react'
import { options } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchMovieDetails } from '../redux/searchSlice'
import Movielist from './Movielist'

const Searchmovie = () => {
  const [searchMovie, setsearchMovie] =useState("")
  
  const dispatch=useDispatch()
  const{movieName,searchedMovie}=useSelector(store=>store.search)
  
  const submithandle=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,options)
      console.log(res.data)
      const movies=res?.data?.results
      dispatch(setSearchMovieDetails({searchMovie,movies}))
    }
    catch(error){
      console.log(error)
      
    }
  }
  return (
    <div className='h-screen w-screen  relative flex mb-20'>
        <div className="absolute z-6">
        <form onSubmit={submithandle} className='flex h-12 w-[700px] border-2 solid black rounded-3xl'>
            <input type='text' value={searchMovie} onChange={(e)=>setsearchMovie(e.target.value)} className='h-12 w-[650px] outline-none ' placeholder='search movie' ></input>
            <button type="submit">Search</button>
            
        </form></div>
        
        <Movielist className="left-0" title={movieName}  movies={searchedMovie}></Movielist>
      
    </div>
  )
}

export default Searchmovie
