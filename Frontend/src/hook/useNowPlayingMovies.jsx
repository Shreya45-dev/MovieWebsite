 import axios from 'axios'
 import {getNowPlayingMovies} from '../redux/movieSlice'
 import { Now_playing_Movie, options } from '../utils/constant'
import {useDispatch, useSelector} from 'react-redux'
import react from 'react'
 
 const useNowPlayingMovies=async()=>{
    const dispatch=useDispatch()
    try{
    
      const res=await axios.get(Now_playing_Movie,options);
      //console.log(res.data.results)
      dispatch(getNowPlayingMovies(res.data.results))
    } catch(error){
      console.log(error)
      
    }}
    export default useNowPlayingMovies