import React from 'react'
import { useState } from 'react';
import { useUser } from '../Context/user.context';


function Register() {



  let [user, setUser] = useState("");

  let { addUser } = useUser();

  const handleRegister = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let newUser = { id: Date.now(), username, password,login:true  };
    setUser(newUser);
    addUser({
      id: Date.now(),
      username: username,
      password: password,
      login:true ,
      posts: [
        {
          id: 1,
          title: "Post 1",
          body: "This is the body of post 1",
        },
        {
          id: 2,
          title: "Post 2",
          body: "This is the body of post 2",
        },
      ]
    });
    console.log(newUser);
  }





return (
  <>
  <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <form className="max-w-md mx-auto w-96 mt-8 p-6 border rounded-lg shadow-lg bg-white" onSubmit={handleRegister}>
        <div className="mb-5">
          <label className="block text-gray-800 text-sm font-semibold mb-2">
            Username:
          </label>
          <input
            type="text"
            name="username"
            className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 text-sm font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between mb-1 ">
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Allready have a Account?
          </a>
        </div>

        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </>
);
}


export default Register
