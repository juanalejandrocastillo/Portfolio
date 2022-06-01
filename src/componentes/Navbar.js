import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



import IconButton from '@mui/material/IconButton';
import '../Assets/Styles/Navbar.css';
export default function Navbar( { isScrolling } ) {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
  return (
    <Box className={`navbar ${isScrolling >20 ? 'scrolling': null}`} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='toolbar'>
        <Button onClick={toTheTop} color="inherit">Inicio</Button>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
           
          <IconButton className='button-git'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href='https://github.com/juanalejandrocastillo'
            target='_blank' rel='noreferrer'>
            <GitHubIcon/>
          </IconButton>
          <IconButton className='button-linkedin'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href='https://www.linkedin.com/in/juan-alejandro-castillo-7a6414183/'
            target='_blank' rel='noreferrer'>
              <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    
  
  


      
      
  )
}
