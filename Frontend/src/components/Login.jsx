import React, { useState } from 'react'
import axios from 'axios' //Notes agr flex hai toh hidden ko alg se show krnaa hoga
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { setUser } from '../redux/userSlice'
const Login = () => {
  const [fullName, setfullName] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail]=useState('')
  const [login, setlogin] = useState(false)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  
  const submithandler=async(e)=>{
    e.preventDefault()
   
    if(!login){
   const response=await axios.post("http://localhost:3000/api/auth/user/register",{
      fullName,
      email,
      password
    },{
      withCredentials:true
    })
    console.log(response.data)
    
  }

    
    else{
      const user={email,password}
   const response=await axios.post("http://localhost:3000/api/auth/user/login",{
    
      email,
      password
    },{
      withCredentials:true
    })
    console.log(response.data)
    dispatch(setUser(response.data.user))
    navigate('/browse')
  }
    
    //setfullName('')
    //setpassword('')
    //setemail('')
    
  }
  /*<div className='h-screen w-screen flex items-center relative justify-center '>
      <div className ='h-80 w-[500px] bg-black  relative flex  items-center  justify-center>
    
    
      < form className='h-60 bg-red-500 w-[450px] right-[25px] flex-col-reverse  items-center  justify-center' >
     <input
        type="text"
        placeholder="fullName"
        className="h-[35px] w-full bg-gray-800 mb-3 text-white  "
      />
      <input
        type="email"
        placeholder="Email"
        className="h-[35px] w-full bg-gray-800 text-white"
      />
      <input
        type="password"
        placeholder="Password"
     className="h-[35px] w-full bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="bg-black text-white p-2 rounded-md hover:bg-gray-800"
      ></button>
       
      </form>
      
      
      </div></div>

  )
}

export default Login*/

 /*<div className="h-screen w-screen flex items-center justify-center  absolute ">
    
  <div className="h-80 w-[500px] bg-black flex flex-col items-center justify-center rounded-lg shadow-lg">
        <h1 className='w-full text-center text-white text-3xl'>SIGN UP</h1>
    <form className="h-60 w-[450px]  flex flex-col items-center justify-center gap-5 p-4 rounded-md">
      <input
        type="text"
        placeholder="Full Name"
        className="h-[35px] w-full bg-gray-800 text-white px-3 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="h-[35px] w-full bg-gray-800 text-white px-3 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="h-[35px] w-full bg-gray-800 text-white px-3 rounded"
      />
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  </div>
</div>
  )}
  export default Login*/
  let template=  <input
        type="text"
        placeholder="fullName"
        value={fullName}
        onChange={(e)=>setfullName(e.target.value)}
        className="h-[35px] w-full bg-gray-800 ml-3 text-white  "

      />//second div 400px width
      
return (
  

 <div className='h-screen w-screen flex items-center relative justify-center '>
      <div className ='h-80 w-[250px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl-[400px]  bg-black  relative flex flex-col items-center  justify-center'>
    
     <h1 className='w-full text-center text-white text-3xl'>{login? "Login":"SIGN UP"}</h1>
      < form onSubmit={submithandler} className='h-60 w-[200px] sm:w-[250px] md:w-[250px] lg:w-[250px]  xl:w-[250px] 2xl-[250px] right-[25px] flex flex-col  items-center gap-4 justify-center' >
     {login ? "":
      <input
        type="text"
        placeholder="fullName"
        value={fullName}
        onChange={(e)=>setfullName(e.target.value)}
        className="h-[35px] w-full bg-gray-800 ml-3 text-white"
      /> 
     }
      <input
        type="email"
        placeholder="Email"
         value={email}
        onChange={(e)=>setemail(e.target.value)}
        className="h-[35px] w-full bg-gray-800 text-white"
      />
      <input
        type="password"
        placeholder="Password"
         value={password}
        onChange={(e)=>setpassword(e.target.value) }
     className="h-[35px] w-full bg-gray-800 text-white"
      />
      <button
      type="submit"
      
      className="h-[35px] w-full bg-red-400">{login?"Login":"Signup"}</button>

    
      <div className='flex'>
      <h1 className='text-white'>{login?"New to Netflex?":"Already have account?"}</h1>
        <button onClick={()=>setlogin(!login)} className="bg-black text-white p-2 rounded-md">{login? "signup":"login"}
           </button>
       </div>
      </form>
      
      
      </div></div>

  )
}

export default Login













