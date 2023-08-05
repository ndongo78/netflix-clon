import { renderBanner } from "./list.js";
$("nav").load("./navBar.html");
$(document).ready(()=>{
    const apiUrl="https://api.themoviedb.org/3/"
const api_key="api_key";

const renderCard=(list)=>{
    let template;
    list.map(movie=>{
      template +=`
     <div class="movieDetail">
      <img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}"  alt="${movie.original_title}"/>
      <h2>${movie.original_title} </h2>
      <ion-icon name="play-circle-outline" class="icon"></ion-icon>
     </div>
  `
    })
    $(".movieContainer").html(template)
}

  function fetchAllmovie() {
     fetch(`${apiUrl}discover/movie?api_key=${api_key}&language=fr&page=1`)
     .then(response => response.json())
     .then(data=>{
      renderBanner(data)
      renderCard(data.results)
     })
     .catch(err => console.error(err))
  }

  fetchAllmovie();
})
