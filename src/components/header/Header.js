import React from 'react'
import { Avatar, Image } from 'antd';
// import {IoNotificationsSharp} from "react-icons/io"
import "./Header.css"

function Header() {
  return (
    <nav className='header_wrapper'>
      <div className='header'>
      <div className='left_nav'>
      <div className='logo'>SFOS</div>
       <div className='nav_menu'>
          <ul className='menu_links'>
              <li>Dashboard</li>
              <li>Demand Planner</li>
              <li>Human override</li>
              <li>Reports</li>
              <li>CP List </li>
              <li>Innovation</li>
          </ul>
       </div>
      </div>
       <div className='right_nav'>
           <ul className='nav_right_menu_links'>
              {/* <li>noto</li> */}
              <li><Avatar size={27}>t</Avatar></li>
              <li>testing user</li>
              <li><Avatar size={27}>t</Avatar></li>
           </ul>
       </div>
      </div>
    </nav>
  )
}

export default Header