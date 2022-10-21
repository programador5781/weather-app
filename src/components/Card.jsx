import React from 'react';
import CardTemp from './CardTemp';
import PropTypes from 'prop-types';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleonClose(){
    if(typeof onClose === "function") onClose();
  }
  return(
    <div>
      <button onClick= {handleonClose}>X</button>
      <span>{name}</span>
      <CardTemp label="Min" value={min}/>
      <CardTemp label="Max" value={max}/>
      <img src={` http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima"/>
    </div>
  );
}

// De la siguiente manera hacemos validación de datos de que tipo de dato es la propiedad.
// Para esto instalamos con npm i prop-types y luego importamos import PropTypes from 'prop-types';
// Los errores los podemos ver en consola.

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func
}

