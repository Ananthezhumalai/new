import React from "react";
import './About.css';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { BrowserRouter as Router,Link,Route,Routes } from "react-router-dom";




export default function Validation(){   
    
const  validateName=()=>{
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        document.getElementById('name-error').innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        document.getElementById('name-error').innerHTML="Enter full name";
        return false;
    }
    document.getElementById('name-error').innerHTML="<i class='fas fa-check-circle'></i>";
    return true;
}

const validatePassword=()=>{
    var password=document.getElementById('contact-password').value;
    if(password.length==0){
        document.getElementById('password-error').innerHTML="password is required";
        return false;
    }    
    if(!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)){
        document.getElementById('password-error').innerHTML="Enter strong password";
        return false;
    }
    document.getElementById('password-error').innerHTML="<i class='fas fa-check-circle'></i>";
    return true;
}
const validatePassword1=()=>{
    var password=document.getElementById('contact-password').value;
    var password1=document.getElementById('contact-password1').value;
    if(password1.length==0){
        document.getElementById('password-error1').innerHTML=" password is required";
        return false;
    }  
    if(password!=password1){
        document.getElementById('password-error1').innerHTML="password do not match";
        return false;
    }    
    document.getElementById('password-error1').innerHTML="<i class='fas fa-check-circle'></i>";
    return true;
}
const validatePhone=()=>{
    var phone=document.getElementById('contact-phone').value;
    if(phone.length==0){
        document.getElementById('phone-error').innerHTML="phone no is required";
        return false;
    }
    if(phone.length!==10){
        document.getElementById('phone-error').innerHTML="phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        document.getElementById('phone-error').innerHTML="phone no must be digits";
        return false;
    }
    document.getElementById('phone-error').innerHTML="<i class='fas fa-check-circle'></i>";
    return true;
}
const validateEmail=()=>{
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        document.getElementById('email-error').innerText="email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById('email-error').innerText="Email is invalid";
        return false;
    }
    document.getElementById('email-error').innerHTML="<i class='fas fa-check-circle'></i>";
    return true;
}
const validateMessage=()=>{
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left= required-message.length;
    if(left>0){
        document.getElementById('message-error').innerHTML=left+"more charcters  required";
        return false;
    }
    document.getElementById('message-error').innerHTML="<i class='fas fa-check-circle'></i>";
    return true;
}
const validateForm=()=>{
    if(!validateName() ||!validatePassword() ||!validatePassword1() ||!validatePhone() ||!validateEmail() ||!validateMessage()){
        return false;
    }
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#e91e63',
      },      
    },
  });


    return(
        <>
    <Card  elevation={10} sx={{width:'380px',margin:'25px auto'}} >              
    <form>
      <Stack direction={'row'} spacing={1} sx={{ justifyContent:"center"}}>
          <LoginIcon sx={{color:'#e91e63'}}/>
          <h2 style={{color:"#e91e63"}} >Login </h2>
      </Stack>
      <Grid className="input-group">
        <TextField type="text" label="Username" size="small" variant="standard" id="contact-name" onKeyUp={validateName} fullWidth/>
        <Typography id="name-error" className="typo" sx={{fontSize:'14px'}}></Typography>
      </Grid>
      <Grid className="input-group">
        <TextField type="text" label="Password" size="small" variant="standard" id="contact-password" onKeyUp={validatePassword} fullWidth/>
        <Typography id="password-error" className="typo"  sx={{fontSize:'14px'}}></Typography>
      </Grid>
      <Grid className="input-group">
        <TextField type="text" label="Confirm Password" size="small" variant="standard" id="contact-password1" onKeyUp={validatePassword1} fullWidth/>
        <Typography id="password-error1" className="typo"  sx={{fontSize:'14px'}}></Typography>
      </Grid>

      <Grid className="input-group">
        <TextField type="tel" label="Phone Number" size="small" id="contact-phone" variant="standard" onKeyUp={validatePhone} fullWidth/>
        <Typography id="phone-error" className="typo"  sx={{fontSize:'14px'}}></Typography>
      </Grid>

      <Grid className="input-group">
        <TextField type="email" label=" Email" size="small" id="contact-email" variant="standard" onKeyUp={validateEmail} fullWidth/>
        <Typography id="email-error" className="typo"  sx={{fontSize:'14px'}}></Typography>
      </Grid>   

      <Grid className="input-group">
        <TextareaAutosize minRows={4} placeholder=" Enter Your Message"  id="contact-message" onKeyUp={validateMessage} />
        <Typography id="message-error" className="typo"  sx={{fontSize:'14px'}}></Typography>
      </Grid>
           
    <Button onClick={validateForm} variant="contained" fullWidth theme={theme}   >Submit</Button>
    {/* <Button onClick={validateForm} variant="contained" fullWidth theme={theme}   ><Link to="/app"  style={{textDecoration:'none',color:'white'}}>Submit</Link></Button> */}

  
  </form>   
  </Card>

 
        </>
    )
}
