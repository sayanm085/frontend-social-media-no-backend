import './App.css'
import Headers from './Components/Headers';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {UserProvider,UserContext} from './Context/user.context';

function App() {
  let [Header,setHeader]=useState(false);

  let [users, setUsers] = useState([])

  // let [loginUser, setLoginUser] = useState({})



  const addUser =(user)=> {
    setUsers((prev)=>[{...user}, ...prev])
  }

const singinUser=(username,password)=>{
  let allusers = users;
  console.log(allusers.map((user)=>user.username))
  let user1= users[0]


  let user = allusers.find((user)=>user.username === username && user.password === password)
  if(user){
    setUsers((prev) =>prev.map((user) =>user.username === username ? { ...user, login: "active" } : user))
    console.log("login")
    localStorage.setItem("login", true);
    window.localStorage.setItem("loginUser",JSON.stringify(user))
  }
}

const addpost = (username, post) => {

  let allusers = users;
  let user = allusers.find((user)=>user.username === username )
  console.log(post)
  console.log(user)

  if (user) {
    console.log("post added")
    setUsers((prev) =>
      prev.map((user) =>
        user.username === username
          ? { ...user, posts: [...user.posts, post] }
          : user
      )
    );

    window.location.reload();

  }
  else{
    console.log("post not added, user not found")
  }
};


// const updatepost = (username, post, postid) => {
//   let allusers = users;
//   let user = allusers.find((user) => user.username === username);

//   console.log(username, post, postid);
//   console.log(user);
//   if (user) {
//     console.log("post updated");
//     setUsers((prev) =>
//       prev.map((user) =>
//         user.username === username
//           ? {
//               ...user,
//               posts: user.posts.map((p) =>
//                 p.id === postid ? { ...p, title: post.title, body: post.body } : p
//               ),
//             }
//           : user
//       )
//     );
//   } else {
//     console.log("post not updated, user not found");
//   }
// };


  
 
 useEffect(()=>{
  let allusers = JSON.parse(window.localStorage.getItem("users"))
  let loginUsers = JSON.parse(window.localStorage.getItem("loginUser"))

  if(allusers && allusers.length >0){ //if there is any user in local storage then set the user in state  
    setUsers(allusers)
  }

},[])

 useEffect(() => {
  window.localStorage.setItem("users",JSON.stringify(users))
 

 }, [users]);



 useEffect(() => {
  let isLogin = localStorage.getItem("login");
   if (isLogin) {
     setHeader(true );
   }
}, []);

 
  return (
    <UserProvider value={{ addUser , singinUser , addpost}}>
      {Header ? <Headers /> : <></>}
      <Outlet />
    </UserProvider>
  );
}

export default App
