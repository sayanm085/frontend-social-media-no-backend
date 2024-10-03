import React from 'react'

function Allpost({post}) {

  let {title,body,id,time,date} = post
  let loginuser = JSON.parse(window.localStorage.getItem("loginUser"))?.username


  return (
    <>
       { /* post display div box */}
          <div className="w-full h-auto mt-6 rounded-md border-2 border-slate-300 p-4 bg-gray-50">
            <div className="w-full h-auto flex flex-col gap-4">
              <div className="w-full h-auto p-4 rounded-md bg-slate-100 shadow-sm">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-base mt-2">{body}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Posted by: {loginuser}</p>
                  <p className="text-sm text-gray-600">Post time: {date} {time}</p>
                </div>
                {/* <div className="flex justify-end mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
                    Edit
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          {/* post display div box end */}
    </>
  )
}

export default Allpost
