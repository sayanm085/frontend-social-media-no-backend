import { createContext,useContext  } from "react";

export const UserContext=createContext({
    users:[
     {
        id:1,
        username:"sayan",
        Password:"sayanm1234"
        
     }
    ],

    loginUser:{
      id:1,
      username:"sayan",
      Password:"sayanm1234",
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
   },
    addUser : (user)=>{},
    singinUser:(username,Password)=>{},
    addpost: (username, post) => {},

})


export const UserProvider=UserContext.Provider;


export const useUser=()=>{
   return useContext(UserContext)
}