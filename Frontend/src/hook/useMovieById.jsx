import React, { useEffect } from 'react'
import { options } from '../utils/constant'
import axios  from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { getTrailerMovie } from '../redux/movieSlice'

const useMovieById = async(movieId) => {

const dispatch=useDispatch()

useEffect(() => {
    const getMovieById=async()=>{
         try{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options)
       //console.log(res.data.results)
        const trailer=res.data.results.filter((item)=>{
          
            return item.type==="Trailer"
        })
      //  console.log(trailer[1])
        dispatch(getTrailerMovie(trailer.length >0 ? trailer[0]: res.data.results[0]))
       // let c=trailer.length >0 ? "yes":" no"
       // console.log(c)
       // console.log(res.data.results[0])
      //  console.log(res.data.results[0].key)
       // console.log(trailer[0].key)
        
    
    }
    catch(error){
        console.log(error)
    }}//}
 getMovieById()
  
},[])

}
export default useMovieById

   






/*import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { options } from '../utils/constant';
import { getTrailerMovie } from '../redux/movieSlice';

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        console.log(res.data.results);

        const trailer = res?.data?.results?.filter((item) => item.type === 'Trailer');
        dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
      } catch (error) {
        console.error('Failed to fetch movie trailer:', error);
      }
    };

    getMovieById();
  }, [movieId, dispatch]);
};

export default useMovieById;*/