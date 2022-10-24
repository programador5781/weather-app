import React from 'react';
import CardTemp from './CardTemp';
import PropTypes from 'prop-types';
import {IoCloseCircleOutline} from 'react-icons/io5';
import icon_09d from '../assets/09d.png';
import icon_01d from '../assets/01d.png';
import icon_01n from '../assets/01n.png';
import icon_02d from '../assets/02d.png';
import icon_02n from '../assets/02n.png';
import icon_03d from '../assets/03d.png';
import icon_03n from '../assets/03n.png';
import icon_13d from '../assets/13d.png';
import icon_13n from '../assets/13n.png'

import styles from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleonClose(){
    if(typeof onClose === "function") onClose();
  }
  return(
    <div className={styles.card}>
      <button className={styles.closeButton} onClick= {handleonClose}><IoCloseCircleOutline/></button>
      <span className={styles.cityName}>{name}</span>
      <CardTemp label="Min" value={min}/>
      <CardTemp label="Max" value={max}/>
      <WeatherIcon icon={img} />
    </div>
  );
}

function WeatherIcon ({icon}){
  switch(icon){
    case "01d" : return <img src={icon_01d} alt="clear sky" />
    case "01n" : return <img src={icon_01n} alt="clear sky" />
    case "02d" : return <img src={icon_02d} alt="few clouds" />
    case "02n" : return <img src={icon_02n} alt="few clouds" />
    case "03d" : return <img src={icon_03d} alt="settered cloud" />
    case "03n": return <img src={icon_03n} alt="cloudy"/>
    case "13d": return <img src={icon_13d} alt="snow"/>
    case "13n": return <img src={icon_13n} alt="snow"/>
    default: return <img src={icon_09d} alt="shower rain"/>
  }

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

