import React from 'react'
import Allpost from './Allpost';
import Propost from './Propost';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function MainHome() {

  let [userpost, setUserpost] = useState([])



  let loginuser = JSON.parse(window.localStorage.getItem("loginUser"))?.id
  let userdata= JSON.parse(window.localStorage.getItem("users"))
useEffect(() => {


  console.log(loginuser)
  console.log(userdata)
  let userpostdata = userdata.find((user)=>user.id === loginuser)
  setUserpost(userpostdata)

}, [loginuser,setUserpost])


  return (
    <>
    <main className="w-full h-auto bg-blue-50 flex justify-center py-10">
        <section className="w-3/4 bg-white h-auto mt-5 rounded-lg shadow-lg flex flex-col items-center p-5">
          <Propost  />
      {
        userpost?.posts?.map((post,index)=>(
          <Link key={index} to={`/home/post/${post.id}`}  className='w-full'><Allpost  post={post} /></Link>
        ))
      }
        
        </section>
      </main>
      
    </>
  )
}

export default MainHome
