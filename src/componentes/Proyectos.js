import React, { useState } from 'react'
import Proyecto from './Proyecto';
import '../Assets/Styles/Proyecto.css';


const Proyectos = () => {
    const [proyectos, setProyectos] = useState([
      {
          id: 1,
          img: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
          alt: 'Calculadora React',
          desc: 'Html / Css / JavaScript / React.JS',
          link: 'https://juanalejandrocastillo.github.io/calculadoraReact/',
          name: <a className='links'>
              Calculadora 
          </a>,
      },
      {
          id: 2,
          img: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
          alt: 'Contador de Clics',
          desc: 'Html / Css / JavaScript / React.JS',
          link: 'https://juanalejandrocastillo.github.io/contador-click/' ,
          name: <a className='links'>
              Contador de Clics
          </a>,
      },
      {
          id: 3,
          img: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
          alt: 'Aplicacion de tareas',
        desc: 'Html / Css / JavaScript / React.JS',
          link: 'https://juanalejandrocastillo.github.io/aplicacion-tareas/',
          name: <a className='links'>
              Aplicacion de Tareas
          </a>,
      },
  ]);

  return (
      <div className='card-main'>
          <h1>Proyectos</h1>
          {proyectos.map((proyecto) => {
              return <Proyecto key={proyecto.id}
              name={proyecto.name} img={proyecto.img} desc={proyecto.desc} link={proyecto.link} alt={ proyecto.alt}/>;
          })}
      </div>
  )
  
}

export default Proyectos
