import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Components/Login';
import Register from './Components/Register';
import Main from './Components/Main';
import About from './Components/About.jsx';
import Contact from './Components/contact.jsx';
import MainHome from './Components/MainHome.jsx'
import Post from './Components/Post'
import Page404 from './Components/page404.jsx';
import ProtectedRouts from './Components/ProtectedRouts.jsx';
import AuthProtectRouts from './Components/AuthProtectRouts.jsx';
import './index.css'
import { createRoutesFromElements, RouterProvider,createBrowserRouter,Route } from 'react-router-dom'


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route path="home" element={<ProtectedRouts Cmp={Main}/>} >
        <Route path="" element={<MainHome />} />
        <Route path="post/:postid" element={<Post />} />
      </Route>
      <Route path="post/:postid" element={<Post />} />
      <Route path="about" element={<ProtectedRouts Cmp={About}/>} />
      <Route path="contact" element={<ProtectedRouts Cmp={Contact}/>}  />

      <Route path="" element={<AuthProtectRouts Cmp={Login}/>} />
      <Route path="login" element={<AuthProtectRouts Cmp={Login}/>} />
      <Route path="register" element={<AuthProtectRouts Cmp={Register}/>} />

      <Route path='*' element={<Page404/>}/>

    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
