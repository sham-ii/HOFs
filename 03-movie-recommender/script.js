// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

let output = "";

output += "The movies that have ratings >= to 8 are:<br>";
const ratings = movies.filter(movie => movie.rating >= 8);
ratings.forEach(movie => {
  output += `TITLE : ${movie.title} - GENRE : ${movie.genre} - RATINGS : ${movie.rating}<br>`;
});

output += "<br>";

movies.forEach(movie => {
  output += `${movie.title} (${movie.genre}) - ${movie.rating} ⭐<br>`;
});

output += "<br>";

const recommend = (movie, minRating = 8) => movie.rating >= minRating;
movies.forEach(movie => {
  const isRecommended = recommend(movie);
  output += `<span style="color:green;">${movie.title}, recommended?</span> : <span style="color:blue;">${isRecommended}</span><br>`;
});

const container = document.createElement("div");
container.innerHTML = `<pre>${output}</pre>`;
document.body.appendChild(container);
