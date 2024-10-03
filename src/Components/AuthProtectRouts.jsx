import React ,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthProtectRouts(props) {
   let Cmp = props.Cmp;
    let navegete = useNavigate();
    useEffect(() => {
        let isLogin = localStorage.getItem('login');
        if(isLogin){
           navegete('/home');
        }
   }, []);

  return (
    <>
      <Cmp />
    </>
  )
}

export default AuthProtectRouts
