import React, { useEffect, useState } from 'react'
import { getPokemon, getAllPokemon } from '../../services/api'


export default function Home(){
  const [pokemonData, setokemonData] = useState([])
  const pokeURL = 'https://pokeapi.co/api/v2/pokemon'


  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(pokeURL)
      await loadPokemons(response.results)

    }
    fetchData()
  }, [])


  // funcao asincrona que retorna o Promise.all
  const loadPokemons = async (data) => {
    let pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setokemonData(pokemonData)
  }
  


  return(
    <>
      {
        console.log(pokemonData)
      }
    </>
  )
}