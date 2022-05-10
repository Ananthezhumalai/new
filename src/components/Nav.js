import { NavLink, Outlet } from "react-router-dom";
import React,{useState} from 'react';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import "./Nav.css";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import Validation from "./page/About";
// import { BrowserRouter,Router,Routes } from "react-router-dom";

const Nav = () => {
	const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["nav__container"];
  if(isMenu) {
    boxClass.push('responsive__nav__show');
  }else{
    boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  }else {
    boxClassSubMenu.push('');
  }
  return (
    <>
  <div className='nav'>
	  {isResponsiveclose === true ? <> 
      <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
    </> : <> 
      <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
    </>}
    <ul className={boxClass.join(' ')} >
      {/* Approach #1 --- Active  */}
      <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink></li>

      {/* Approach #2 --- Active  */}
      <li>
        <NavLink onClick={toggleClass} style={({ isActive }) => {
          return { 
            color: isActive ? "#ffe500" : ""
          };
        }} to="/about">About</NavLink>
      </li>
      {/* <li onClick={toggleSubmenu} className="sub__menus__arrows"><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/user">Service <FiChevronDown /> </NavLink>
        <ul className={boxClassSubMenu.join(' ')} > 
          <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/user">electronics </NavLink></li>
          <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/user/admin">accesories</NavLink></li>
        </ul>
      </li> */}
      {/* <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/invoice">News</NavLink></li>
      <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/object_route"> Notification </NavLink></li>
      <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/search"> Signup </NavLink></li> */}
       <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/About">
         <Button className="b1" variant="outlined" startIcon={<LocalGroceryStoreIcon />}>  buy
</Button> </NavLink></li> 
      <Outlet />
    
 
    </ul>
   
  
  </div>
  
  </>
  );
};

export default Nav;
