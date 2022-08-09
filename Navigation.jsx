import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
import '../Practice/Mainmenu.css'
const Navigation = () => {
  return (
    <>
    <nav>
        <ui>
            <li>
                    <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                    <NavLink to='/images'>Images</NavLink>
            </li>
            <li>
                    <NavLink to='/contact'>Contact us</NavLink>
            </li>
        </ui>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navigation