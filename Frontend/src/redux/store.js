//npm i @reduxjs/toolkit
//npm i react-redux
import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import searchReducer from "./searchSlice"
import { Search_Movie_Url } from '../utils/constant'

const store=configureStore({
    reducer:{
             app:userReducer,
             movie:movieReducer,
             search:searchReducer
             
    }
})
export default store