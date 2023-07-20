import createPoster from "../components/createPoster.js";
import {data, dom} from "../data.js"

const movies = () => {
 
data.movies.forEach((element) => {
    const createMovie = createPoster(element);
    dom.moviesContainer.append(createMovie);
})
}

export default movies;