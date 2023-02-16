let container = document.querySelector(".container");

let API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.Search.forEach((item) => {
      container.innerHTML += `<div><img src=${item.Poster} alt="Poster" class="img">
      <h3 class="title">${item.Title}</h3><p class="years">${item.Year}</p></div>
    `;
    })
  );
