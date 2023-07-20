import filterMovies from "../handlers/filterMoviesHandler.js"
import {dom} from "../data.js"

dom.searchBox.addEventListener('keyup', filterMovies);