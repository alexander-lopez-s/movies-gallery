const createPoster = (movieData) => {
      // create a div to contain the movie
    const posterContainer = document.createElement('div');
      // create the image
    const image = document.createElement('img');
          image.src = movieData.src;
      // create the title of the movie
    const movieName = document.createElement('p');
          movieName.innerText = movieData.movieName;
      // append the image and the title to the container
          posterContainer.append(image, movieName);
          return posterContainer;
}        
export default createPoster;