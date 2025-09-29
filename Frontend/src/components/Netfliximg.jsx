import React from 'react'
import Login from './Login'
import Header from './Header'

const Netfliximg = () => {
    
  return(
    <>
     <div className='h-screen w-screen'>
    <Header/>
     
      <div className='z-0 absolute h-screen w-screen overflow-hidden'>
        <img className="h-screen w-screen object-cover " src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp"
/></div>
<Login/>
</div></>


  )}
    
  

export default Netfliximg
