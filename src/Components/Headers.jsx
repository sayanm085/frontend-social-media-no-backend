import React from 'react'

import { Link } from 'react-router-dom'



function Headers() {

    const logout = () => {
        window.localStorage.removeItem('login');
        localStorage.removeItem('loginUser');
        window.location.reload();


    }
return (
    <header className="bg-white shadow-md p-5">
        <nav className="container mx-auto flex justify-center items-center">
            <div className="text-black text-lg font-bold mr-6">My Blog</div>
            <ul className=" gap-20 h-full w-2/3 flex justify-center items-center">
                <li><Link to="/home" className="text-slate-700 hover:text-black">Home</Link></li>
                <li><Link to="/about" className="text-slate-700 hover:text-black">About</Link></li>
                <li><Link to="/contact" className="text-slate-700 hover:text-black">Contact</Link></li>
            </ul>

            <button className='bg-slate-300  px-3 py-2 rounded-md' onClick={logout}>logout</button>
        </nav>
    </header>
)
}

export default Headers
