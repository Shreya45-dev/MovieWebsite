import {createSlice} from "@reduxjs/toolkit"
const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
        toggle:false,
        trailerMovies:null,
        open:false,
        id:null,
       t:null,
       overview:null,
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
         getPopularMovies:(state,action)=>{
          state.PopularMovies=action.payload
         },
        getTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload
        },
        getUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload
        },
        setToggle:(state)=>{
            state.toggle=!state.toggle
            
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovies=action.payload
        },
        setOpen:(state,action)=>{
            state.open=action.payload
        },
        getId:(state,action)=>{
              state.id=action.payload
        },
        gett:(state,action)=>{
              state.t=action.payload
        },
        getoverview:(state,action)=>{
            state.overview=action.payload
        }
    }
    }
)
export const {getTrailerMovie,setToggle,getUpcomingMovies,getTopRatedMovies,getPopularMovies,getNowPlayingMovies,setOpen,getId,gett,getoverview}=movieSlice.actions
export default movieSlice.reducer
      