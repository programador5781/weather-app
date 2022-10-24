import React from 'react';
import {IoSearchOutline} from 'react-icons/io5';

import styles from './SearchBar.module.css';

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
    // <div>
    //   <input id="search-bar-input"/>
    //   <button onClick={handleOnSearch}>Agregar</button>
    // </div>
    <form className={styles.searchBar} onSubmit={handleOnSearch}>
      <input placeholder="Buscar ciudades..." id="search-bar-input"/>
      <button type="submit">
      <IoSearchOutline/>
      </button>
    </form>
    )
};