import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home(){
  //para a busca const [pokemonName, setPokemonsNames] = useState("pikachu")
  const [pokemons, setPomemons ] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10')
      .then(response => { setPomemons(response.data.results) })


  
  }, [])

  //

  return(
    <>
      {pokemons.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </>
  )
}