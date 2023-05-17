

$(document).ready(()=>{
    const item=localStorage.getItem('item');
    const movie=JSON.parse(item);
 
$(".container-fluid").html(`
 <div class="row text-white">
 <div class=" col-3">
<img src="https://images.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
</div>
  <div class=" col-8">
     <h2 class=" fs-1 m-3"><span>Titre:</span> ${movie.original_title}</h2>
     <div class=" fs-4"><span class="fs-1 ms-3 me-3">Résumé:</span>${movie.overview}</div>
     <p class="fs-2"><span class="fs-1 ms-3 me-3">Date de sortie:</span> ${movie.release_date} </p>
     <p class="fs-2"><span class="fs-1 ms-3 me-3">Avis:</span> ${movie.vote_average} <ion-icon name="star-half-outline" style="color:yellow;"></ion-icon></p>
     <p class="fs-2"><span class="fs-1 ms-3 me-3">Nombre de vues:</span> ${movie.vote_count} </p>
      <div>
        <button class="bande">Bande annonce</button>
        <button class="voir">Regarder le film</button>
      </div>
     </div>
 </div>
`);
window.addEventListener("beforeunload",()=>localStorage.clear())
})