let search = document.querySelector(".searchBtn");
let input = document.querySelector(".lookingFor");
let enable = function () {
search.onclick=input.classList.toggle("lookingFor")
};
search.addEventListener("click",enable)

const movies=[
    {
        title:"unorthodox",
        immage:"./assets/imgs/movies/1.png",
    },
    {
        title:"after life",
        immage:"./assets/imgs/movies/2.png",
    },
    {
        title:"vis a vis",
        immage:"./assets/imgs/movies/3.png",
    },
    {
        title:"the place",
        immage:"./assets/imgs/movies/4.png",
    },
    {
        title:"summertime",
        immage:"./assets/imgs/movies/5.png",
    },
    {
        title:"i delitti di valhalla",
        immage:"./assets/imgs/movies/6.png",
    },
    {
        title:"l altra grace",
        immage:"./assets/imgs/movies/7.png",
    },
    {
        title:"virgin river",
        immage:"./assets/imgs/movies/8.png",
    },
    {
        title:"the english game",
        immage:"./assets/imgs/movies/9.png",
    },
    {
        title:"il metodo kominsky",
        immage:"./assets/imgs/movies/10.png",
    },
    {
        title:"patto d amore",
        immage:"./assets/imgs/movies/11.png",
    },
    {
        title:"casa flores",
        immage:"./assets/imgs/movies/12.png",
    },
    {
        title:"collateral beauty",
        immage:"./assets/imgs/movies/13.png",
    },
    {
        title:"self-made",
        immage:"./assets/imgs/movies/14.png",
    },
    {
        title:"freud",
        immage:"./assets/imgs/movies/15.png",
    },
    {
        title:"grace and frankie",
        immage:"./assets/imgs/movies/16.png",
    },
    {
        title:"lasciati andare",
        immage:"./assets/imgs/movies/17.png",
    },
    {
        title:"dogman",
        immage:"./assets/imgs/movies/18.png",
    },
]
let carousel=document.querySelectorAll(".carousel-inner")
  for(let y=0;y<carousel.length;y++){
      let carousels=carousel[y]
      for(let i=0;i<movies.length;i++){
            carousels.innerHTML+=
          `<div class="carousel-item ${i===0?"active":""} d-flex">
          <div class="cards">
          <img src="${movies[Math.floor(Math.random()*i)].immage}" class="d-block w-100" alt="...">
          </div>
          <div class="cards">
          <img src="${movies[Math.floor(Math.random()*i)].immage}" class="d-block w-100" alt="...">
          </div>
          <div class="cards">
          <img src="${movies[Math.floor(Math.random()*i)].immage}" class="d-block w-100" alt="...">
          </div>
          <div class="cards">
          <img src="${movies[Math.floor(Math.random()*i)].immage}" class="d-block w-100" alt="...">
          </div>
          <div class="cards">
          <img src="${movies[Math.floor(Math.random()*i)].immage}" class="d-block w-100" alt="...">
          </div>
          <div class="cards">
          <img src="${movies[Math.floor(Math.random()*i)].immage}" class="d-block w-100" alt="...">
          </div>
          </div>`
        }
}
///------WORK IN PROGRESS\\\


let find=function(){
    const foundMovies=document.querySelector("#found")
    const foundTitle=document.querySelector("#result")
    let inputValue=input.value.toLowerCase()
    for (let i = 0; i < movies.length; i++) {
        let findMovies=movies[i]

        if(findMovies.title===inputValue){
            foundMovies.innerHTML=`<div class="cards"><img src="${findMovies.immage}" alt=""> </div>`;
            foundTitle.innerHTML=`<h4>${findMovies.title}</h4>`
        }
    }
}
