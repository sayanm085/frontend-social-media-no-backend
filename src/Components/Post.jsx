import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useUser } from '../Context/user.context'
function Post() {
   let [name , setname] = useState("")
   let [posttitle , setposttitle] = useState("")
   let [postcontent , setpostcontent] = useState("")
   let [posttime , setposttime] = useState("")
   let [postdate , setpostdate] = useState("")

   let [editposttitle , seteditposttitle] = useState()
   let [editpostcontent , seteditpostcontent] = useState()


  let {postid} = useParams()






  let edithandler = (e) => {
    e.preventDefault();
   
    let username = name;
    let post = { title: editposttitle, body: editpostcontent }



 
  }



  

  let usernamelog = JSON.parse(window.localStorage.getItem("loginUser") || '{}');
  let userdata = JSON.parse(window.localStorage.getItem("users") || '[]');

  useEffect(() => {
    let userpostdata = userdata.find((user) => user?.id === usernamelog?.id);
    let postdata = userpostdata?.posts.find((post) => post.id === parseInt(postid));
    setname(userpostdata?.username);
    setposttitle(postdata?.title);
    setpostcontent(postdata?.body);
    setposttime(postdata?.time);
    setpostdate(postdata?.date);
    seteditposttitle(postdata?.title);
    seteditpostcontent(postdata?.body);
   
  }, [setname,setposttitle,setpostcontent,setposttime,setpostdate]);



  return (
    <div className='w-full flex justify-center flex-col items-center'>

    {/* {editswitch ? <>
      <div className="w-3/4 h-auto p-9 flex justify-around items-center mt-6 rounded-md border-2 border-slate-300">
        <form className="w-full h-auto flex flex-col justify-around items-center gap-5" onSubmit={edithandler}>
          <input
            type="text"
            name='title'
            value={editposttitle}
            placeholder="Title"
            onChange={(e) => seteditposttitle(e.target.value)}
            className="w-full h-10 text-lg font-semibold p-4 rounded-md bg-slate-100"
          />
          <textarea
            name='body'
            placeholder="Write your post here"
            value={editpostcontent}
            onChange={(e) => seteditpostcontent(e.target.value)}
            className="w-full h-40 text-base font-semibold p-4 rounded-md resize-none bg-slate-100"
          ></textarea>

          <button className="bg-blue-500 text-white px-12 py-2 rounded-md shadow hover:bg-blue-700">
            Edit Post
          </button>
        </form>
      </div>
    </>: <></>} */}



       <div className="w-3/4 h-auto mt-6 rounded-md border-2 border-slate-300 p-4 bg-gray-50">
            <div className="w-full h-auto flex flex-col gap-4">
              <div className="w-full h-auto p-4 rounded-md bg-slate-100 shadow-sm">
                <h2 className="text-xl font-semibold">{posttitle}</h2>
                <p className="text-base mt-2">{postcontent}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Posted by:{name}</p>
                  <p className="text-sm text-gray-600">Time: {posttime} {postdate} </p>
                </div>
                <div className="flex justify-end mt-4">
                  {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
                  onClick={() => seteditswitch((prev) => !prev)}
                  >
                    {editswitch ? "Cancel" : "Edit"}
                  </button> */}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Post
