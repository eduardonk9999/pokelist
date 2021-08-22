// Function que retorna url, essa FC tem que retorna um new Promise do fetch
export function getPokemon({ url }){
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
  })
} 


// FC Assincrona que também retorna uma new Promise do fetch
export function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data)
      })
  })
}