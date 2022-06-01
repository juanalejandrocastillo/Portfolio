import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import '../Assets/Styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='group-footer'>
      <IconButton className='button-git'
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 8}}
          href='https://github.com/juanalejandrocastillo'
          target='_blank' rel='noreferrer'>
          <GitHubIcon />
          
        </IconButton>
        <IconButton className='button-linkedin'
        edge="start"
        color="inherit"
        size="large"
        href='https://www.linkedin.com/in/juan-alejandro-castillo-7a6414183/'
        target='_blank' rel='noreferrer'>
          <LinkedInIcon />
        </IconButton>
      </div>
      <div clasName='name-footer' >
        <p > Juan Alejandro Castillo </p>
        </div>
      </div>
  )
}
