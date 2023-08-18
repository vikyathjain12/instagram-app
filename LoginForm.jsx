import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
 import  * as React from 'react';
 import TextField from '@mui/material/TextField';
// import "./sconti";
import {useState} from "react";
 function LoginForm() {
const [email,setEmail]=useState("");
const [password,setPassword   ]=useState("");
const loginHelper=()=>{
   console.log(email , " ", password)
} 
   return (
    <> 
     {/*<div>LoginForm</div>*/}
     
     <Card sx={{ minWidth: 150,
      margin:"1rem"
    }}>
      <CardContent>
       
        <img src="sconti.png" alt="" height="85px"></img>
        <div>
        <TextField 
        type="email"
        id="outlined-basic" label="Email" variant="outlined" 
        margin="normal"
        fullWidth="true"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
</div>
<div>
        <TextField 
        type="password"
        id="outlined-basic" label="Password" variant="outlined" 
        margin="normal"
        fullWidth="true"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
</div>
        <Button variant="contained" onClick={loginHelper}>
          
          <Typography variant="h6">
              Log in</Typography>
          </Button>
          <Card sx={{ minWidth: 150 }}>
      </Card>
          <Typography variant="p"> 
         don't have an account
         <Button variant='text'
         >
          <Typography>Signup</Typography>
          </Button> 
        </Typography>
        </CardContent>
         
       </Card> 
    
     </>
   )
 }
 
 export default LoginForm;
 