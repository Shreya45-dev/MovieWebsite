 import axios from 'axios'
 import {getUpcomingMovies} from '../redux/movieSlice'
 import { Upcoming_Movie, options } from '../utils/constant'
 import {useDispatch, useSelector} from 'react-redux'
 import react from 'react'
 
 const upcomingMovies=async()=>{
    const dispatch=useDispatch()
    try{
      
      const res=await axios.get(Upcoming_Movie,options);
      //console.log(res.data.results);
      dispatch(getUpcomingMovies(res.data.results))
    } catch(error){
      console.log(error)
      
    }}
    export default upcomingMovies
