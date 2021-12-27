import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import PropagateLoader from "react-spinners/PropagateLoader";

import Home from './Home/Home';
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

function App() {
  const  [loading, setLoading] = useState( false ) 

useEffect (()=>{

  setLoading (true)
  setTimeout (()=>{
    setLoading(false)
  }, 8000)
}, [])

  return (
    <Box sx ={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      {
        loading ?
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#000000',
          height: '100vh',
          width: '100%'
        }}>
          <Typography variant = 'h4' color ='#ffffff'>Welcome to APM</Typography>
          <Typography variant = 'h4' color ='#ffffff'>Manage your projects with ease!</Typography>
        <PropagateLoader color='#1838DB' loading={loading} size={15} />
          
        </Box>
        :
        
        <Home />
      }
 
  </Box>
  );
}

export default App;
