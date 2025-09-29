 export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`

  }}



export const Now_playing_Movie="https://api.themoviedb.org/3/movie/now_playing"
export const Popular_Movie="https://api.themoviedb.org/3/movie/popular"
export const Top_Rated_Movie="https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_Movie=" https://api.themoviedb.org/3/movie/upcoming"
export const  url="https://image.tmdb.org/t/p/w500"


export const Search_Movie_Url= "https://api.themoviedb.org/3/discover/movie?query=funnymovie"




