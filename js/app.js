// API
let films = `https://swapi.co/api/films/`;

//Accediendo a la data films
const starWars = fetch(films)
    .then(answer => answer.json())
    .then(data => console.log(data));

//creando enlaces
// function paintMovies(){
// const linksMovies = document.getElementById('link-movies');
// const nameMovies = linksMovies.appendChild(starWars);
// linksMovies.addEventListener('click', film)
// }

console.log(films.results)