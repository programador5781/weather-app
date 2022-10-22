import React from 'react';

<<<<<<< Updated upstream
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div>Cards Component</div>
=======
import styles from './Cards.module.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.cards}>
      {cities.map((city) => (
        <Card 
          key={city.id}
          min={city.main.temp_min} 
          max={city.main.temp_max} 
          name={city.name} 
          img={city.weather[0].icon} 
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  )
>>>>>>> Stashed changes
};