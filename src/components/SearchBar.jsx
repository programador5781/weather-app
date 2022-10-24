import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnSearch(event){
    event.preventDefault();
    if(typeof onSearch === "function"){
      const input = document.getElementById("search-bar-input");
      onSearch(input.value);
      input.value = " ";
    }
  }
  
  return (
<<<<<<< Updated upstream
    <div>
      <input id="search-bar-input"/>
      <button onClick={handleOnSearch}>Agregar</button>
    </div>
=======
    <form className={styles.searchBar} onSubmit={handleOnSearch}>
      <input placeholder="Buscar ciudades..." id="search-bar-input"/>
      <button type="submit">
      <IoSearchOutline/>
      </button>
    </form>
>>>>>>> Stashed changes
    )
};