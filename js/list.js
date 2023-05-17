import { movies } from "./main.js";

export const renderBanner=(data,balise)=>{
    data.results.slice(0,1).map((movie)=>{
        const template=`
         <img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
         <div class="detail position-absolute ">
         <h2 class="">${movie.original_title}</h2>
         <p class="description">${movie.overview}</p>
          <div class=" d-flex align-items-center border-0 buttons">
           <button class=" d-flex align-items-center">
           <ion-icon name="play-outline" class="fs-2 text-white "></ion-icon>
           <span class="text-white ms-2">play</span>
           </button>
           <button>
           <ion-icon name="information-outline" class="fs-2 text-white "></ion-icon>
           <span class="text-white ms-2">infos</span>
           </button>
          </div>
        </div>
        `
        $(`${balise}`).html(template)
    })
}