// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink } from "react-router-dom";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import React,{useState} from 'react';
// import { NavLink, Outlet } from "react-router-dom";
// import React,{useState} from 'react';
// import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './img1.jpg'
import UserProfile from './UserProfile'
// import IconMenu from './UserProfile'


const checkOut = (name) => {
  alert(`Hello ${name}`);
}
  
export default function ButtonBases() {
  return (
    <>
   
    <>
    {/* <UserProfile  /> */}
    </>


    {/* <Stack direction="row" spacing={2} marginTop="35px">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="./img1.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>



    <Card sx={{ maxWidth: 400,margin:"8" }}>
      <CardMedia
              component="img"
              image="D:\ananth1\app\src\img1.jpg"
              height="100"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button onClick={() => checkOut('Gowtham')}  size="small" sx={{color:'red'}}>Share</Button>
       
        
      </CardActions>
    </Card>
    
    </Stack> */}
    <UserProfile  />
    
    <li>
      {/* <NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/About"> */}
         {/* <Button className="b1" variant="outlined" startIcon={<LocalGroceryStoreIcon />}>  buy
</Button>  */}
{/* </NavLink> */}
</li> 
    
    
    {/* <Stack spacing={1} direction={'row'}>
    <Typography variant="h6" gutterBottom component="div"  margintop="200px">
        How  about my project
      </Typography>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
 
    </Stack> */}
    </>
  );
}
