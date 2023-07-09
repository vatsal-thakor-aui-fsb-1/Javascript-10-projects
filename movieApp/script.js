const APIKEY = "&api_key=26ecbf9cf0e4c478bf32ba85c3f184da";
const APITOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmVjYmY5Y2YwZTRjNDc4YmYzMmJhODVjM2YxODRkYSIsInN1YiI6IjY0NmJkZDFjYTUwNDZlMDEyNDY4ZmE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.02dJ-04cdyjjDgvC1eSmosLUydAaP-99oS9FnoJnHbk";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const APIURL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=26ecbf9cf0e4c478bf32ba85c3f184da";
const searchInput = document.getElementById("search")

getMovies(APIURL);

async function getMovies(apiurl){
  const resp = await fetch(apiurl);
  const respData = await resp.json();
  
  showMovies(respData.results);
}

function showMovies(movies){
  //claer main
  document.querySelector("main").innerHTML = "";

  movies.forEach(movie => {
    const { poster_path, title, vote_average, release_date, overview } = movie;
    const movieEl = document.createElement("div");
    const rating = 
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img src="${ IMGPATH + poster_path }" alt="${ title + " poster" }">
    <div class="movie-info">
      <h3>${ title } (${release_date.slice(0,4)}) </h3>
      <span class="${getClassByValue(vote_average)}">${ vote_average }</span>
    </div>
    <div class="overview">${ overview }</div>
    `;
    function getClassByValue(vote){
      if(vote>8){
        return "green"
      }
      else if(vote>6 && vote<8){
        return "orange"
      }
      else if(vote<6) {
        return "red"
      }
    }
    document.querySelector("main").appendChild(movieEl);
  });
}

searchInput.addEventListener("input",() => {
  let searchValue = searchInput.value;
  let serachAPIUrl = "https://api.themoviedb.org/3/search/movie?query=" + searchValue + APIKEY;
  getMovies(serachAPIUrl);
});