import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Assets/Styles/Proyecto.css'

export default function Proyecto(props) {
  return (
    <div className='card' >
      
      <Card className='card-container' sx={{ maxWidth: 320 }}>
      <CardMedia className='img-container'
        component="img"
        height="220"
        image={props.img}
        alt={props.alt}
      />
      <CardContent>
        <Typography font-weight='900' color= '#666' gutterBottom variant="h5"  component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" fontWeight="400" color="#757575">
          {props.desc}
        </Typography>
        </CardContent>
        <Button className='button-proyecto' href={ props.link}target='_blank' rel='noreferrer' size="small" variant="contained">ver</Button>
    </Card>
    </div>

    
  );
}
