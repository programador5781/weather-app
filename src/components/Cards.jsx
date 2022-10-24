import React from 'react';
import Card from './Card';

export default function Cards({cities, onRemove}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {cities.map((city) => (
        <Card 
          key={city.id}
          min={city.min} 
          max={city.max} 
          name={city.name} 
          img={city.img} 
          onClose={() => onRemove(city.id)}
        />
      ))}
    </div>
  )
};