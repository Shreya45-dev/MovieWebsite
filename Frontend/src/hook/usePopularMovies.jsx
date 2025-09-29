 import axios from 'axios'
 import {getPopularMovies} from '../redux/movieSlice'
 import {Popular_Movie, options } from '../utils/constant'
import {useDispatch, useSelector} from 'react-redux'
import react from 'react'
 
 const usePopularMovies=async()=>{
    const dispatch=useDispatch()
    try{
    
      const res=await axios.get(Popular_Movie,options);
      //console.log(res.data.results);
      dispatch(getPopularMovies(res.data.results))
    } catch(error){
      console.log(error)
      
    }}
    export default usePopularMovies