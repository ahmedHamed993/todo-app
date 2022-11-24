import React from 'react'
import { Typography } from '@mui/material';
import {Box} from '@mui/system';

function Heading() {
  return (
    <Box sx= {{my:5}}>
        <Typography variant="h2" component="h1" textAlign='center' fontWeight="500" >
            Todo App
        </Typography>  
    </Box>
  )
}

export default Heading;