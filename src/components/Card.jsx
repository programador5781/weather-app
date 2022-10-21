import React from 'react';
import CardTemp from './CardTemp';

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

