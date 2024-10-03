import React, { useEffect } from 'react'
import { useNavigate ,Outlet } from 'react-router-dom';

function ProtectedRouts() {
  let navigate = useNavigate();
  
  useEffect(() => {
    let isLogin = localStorage.getItem('login');
    if (!isLogin) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRouts;
