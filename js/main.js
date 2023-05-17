import { renderBanner } from "./list.js";

const user=localStorage.getItem("user");
 if(!user){
   window.location.href="../pages/login.html";
 }


$("nav").load("../pages/navBar.html");

const apiUrl="https://api.themoviedb.org/3/"
const api_key="c9fea28ebb8e967442522ed79ad32352";

function redirect(item) {
  const itemParsed=JSON.stringify(item);
  localStorage.setItem("item", itemParsed)
   window.location.href="../pages/detail.html";
}
const renderList=(list,balise)=>{
  let template;
  list.map((movie,index)=>{
    template +=`
       <div class="listItems" key="${index}">
       <img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
       </div>
   `;
  })
  $(`${balise}`).html(template)
  $(".listItems").click(function(e){
    console.log(this)
    // const movies = list[$(this).index()]
    // redirect(movies)
  });
  
}



export let movies=[];
 function getMovies(){
    fetch(`${apiUrl}movie/popular/?api_key=${api_key}`)
    .then(res=>res.json())
    .then(data=>{
        movies=data.results;
        renderBanner(data,".banner");
    })
    .catch(err=>console.log(err))
 }
//get new movies
const getNewMovie =()=>{
  fetch(`${apiUrl}trending/all/week?api_key=${api_key}`)
  .then(res=>res.json())
  .then(data=>{
    let template;
    data.results.map((movie,index)=>{
      template +=`
         <div class="listItems" key="${index}">
         <img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
         </div>
     `;
    })
    $(`.nouveaute`).html(template)
    $(".listItems").click(function(e){
      //console.log(this)
      const movies = data.results[$(this).index()]
      redirect(movies)
    });
  })
  .catch(err=>console.log(err))
}
getNewMovie()
//get tendance movies
const getTendancesMovie =()=>{
  fetch(`${apiUrl}trending/all/day?api_key=${api_key}`)
  .then(res=>res.json())
  .then(data=>{
    let template;
    data.results.map((movie,index)=>{
      template +=`
         <div class="listItems" key="${index}">
         <img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
         </div>
     `;
    })
    $(`.tendances`).html(template)
    $(".listItems").click(function(e){
      //console.log(this)
      const movies = data.results[$(this).index()]
      redirect(movies)
    });
  })
  .catch(err=>console.log(err))
}
getTendancesMovie()

//get poular
const getPopularMovie =()=>{
  fetch(`${apiUrl}movie/popular?api_key=${api_key}`)
  .then(res=>res.json())
  .then(data=>{
    let template;
    data.results.map((movie,index)=>{
      template +=`
         <div class="listItems" key="${index}">
         <img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
         </div>
     `;
    })
    $(`.itemContainer`).html(template)
    $(".listItems").click(function(e){
      //console.log(this)
      const movies = data.results[$(this).index()]
      redirect(movies)
    });
  })
  .catch(err=>console.log(err))
}
getPopularMovie();
 getMovies();

