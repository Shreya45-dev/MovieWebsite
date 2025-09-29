import React from 'react'
import './Appi.css'
import { IoIosArrowDropdown } from "react-icons/io"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import {setUser} from "../redux/userSlice"
import axios from 'axios'
//import { setToggle } from '../redux/movieSlice'
import { setToggle } from '../redux/movieSlice'

const Header = () => {
  
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.app.user)//
  
  const toggle=useSelector((store)=>store.movie.toggle)
  
  const navigate=useNavigate();


  const togglehandler=()=>{
    console.log(toggle)
    dispatch(setToggle())
  }
  
  const logoutHandler=async()=>{
    
      const res=await axios.get("http://localhost:3000/api/auth/user/logout",{
      withCredentials:true
    })
      if(res.data.success){
        toast.success(res.data.message);

      }
      dispatch(setUser(null));
      console.log(res.data)
      navigate('/')
    
    
  }
  return (
  
  
      //to ye krne se logout waala jo header ka part hai vo sbse front side se remove ho jayega

          
       <div className="h-[90px] z-5 absolute  w-screen flex items-center justify-between">
      <img className="h-[150px] w-[200px]" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
      
      {user &&(            //
        <div  className=' hidden md:flex md: justify-between right-0 w-[450px] '>
      
        <div className="flex  h-[35px] items-center bg-blue-500 w-32  "> 
         <IoIosArrowDropdown />
        <button >  {user.fullName}</button></div>
        <button onClick={logoutHandler} className='text-white bg-red-500 w-24 h-[35px] ' >Logout</button>
       <button onClick={togglehandler}  className='text-white bg-red-500 w-24 h-[35px] ' >Search Movie</button>
      
        
      </div>)
}
    </div>
    

  )
}

export default Header
