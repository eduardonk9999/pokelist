import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home(){
  //para a busca const [pokemonName, setPokemonsNames] = useState("pikachu")
  const [pokemons, setPokemons ] = useState([])
  const [namePoke, setNamePoke ] = useState([])
  const [imgPoke, setimgPoke] = useState('')



  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
      .then(function(res) {
        console.log(res)
      })    
  }, [])



  


  return(
    <>
      {
       
      
      }

      
    </>
  )
}