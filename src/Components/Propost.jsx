import React from 'react'
import { useEffect, useState } from 'react';
import { useUser } from '../Context/user.context';

function Propost() {
  let {addpost} = useUser()

  let [userpostnumber, setUserpostnumber] = useState()
  let [name, setname] = useState("")


  let usernamelog = JSON.parse(window.localStorage.getItem("loginUser") || '{}');
  let username = usernamelog?.username || '';
  let userdata = JSON.parse(window.localStorage.getItem("users") || '[]');
  

  useEffect(() => {

    let userpostdata = userdata.find((user) => user.username === username);
    setUserpostnumber(userpostdata?.posts?.length);
    setname(userpostdata?.username);

  }, [setname,setUserpostnumber]);


  const handlePost = (e) => {
    e.preventDefault();

    let title = e.target.title.value;
    let body = e.target.body.value;
    let post = { 
      id: Date.now(),
      title, 
      body, 
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
    };
    addpost(username, post);
    e.target.reset();
  }


  return (
    <>
      {/* profile div box */}
      <div className="w-full h-28 flex justify-around items-center mt-2 rounded-md shadow-sm border-2 p-4 bg-gray-50">
        <div className="w-1/3 flex gap-3 justify-center">
          <p className="text-lg">Name:</p>
          <p className="text-lg font-semibold">{name}</p>
        </div>

        <div className="w-1/3 flex gap-3 justify-center">
          <p className="text-lg">Total Post:</p>
          <p className="text-lg font-semibold">{userpostnumber}</p>
        </div>
{/* 
        <div className="w-1/3 flex gap-3 justify-center">
          <button className="bg-blue-500 text-white px-12 py-2 rounded-md shadow hover:bg-blue-700">
            Edit
          </button>
        </div> */}
      </div>
      {/* profile div box end*/}

      {/* post write div box */}
      <div className="w-full h-auto p-9 flex justify-around items-center mt-6 rounded-md border-2 border-slate-300">
        <form className="w-full h-auto flex flex-col justify-around items-center gap-5" onSubmit={handlePost}>
          <input
            type="text"
            placeholder="Title"
            name='title'
            className="w-full h-10 text-lg font-semibold p-4 rounded-md bg-slate-100"
          />
          <textarea
            name='body'
            placeholder="Write your post here"
            className="w-full h-40 text-base font-semibold p-4 rounded-md resize-none bg-slate-100"
          ></textarea>

          <button className="bg-blue-500 text-white px-12 py-2 rounded-md shadow hover:bg-blue-700">
            Post
          </button>
        </form>
      </div>
      {/* post write div box end */}
    </>
  );
}

export default Propost
