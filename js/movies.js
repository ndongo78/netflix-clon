
$("nav").load("./navBar.html");
$(document).ready(()=>{
    const apiUrl="https://api.themoviedb.org/3/"
const api_key="c9fea28ebb8e967442522ed79ad32352";

  function fetchAllmovie() {
     fetch(`${apiUrl}discover/movie?api_key=${api_key}&language=fr&page=1`)
     .then(response => response.json())
     .then(data=>console.log(data.results))
     .catch(err => console.error(err))
  }

  fetchAllmovie();
})