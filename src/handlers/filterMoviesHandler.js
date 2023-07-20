import { data, dom } from "../data.js";
import createPoster from "../components/createPoster.js";

const filterMovies = () => {
  const searchTerm = dom.searchBox.value.toLowerCase();
  // dom.moviesContainer.innerHTML = ''; 
  while(dom.moviesContainer.firstChild) {
    dom.moviesContainer.firstChild.remove();
  }

  for (const movie of data.movies) {
    const movieName = movie.movieName.toLowerCase();
    if (movieName.includes(searchTerm)) {
      const createMovie = createPoster(movie);
      dom.moviesContainer.append(createMovie);
    } 
  }
};

export default filterMovies;
