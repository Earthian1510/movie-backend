const Movie = require("../models/movie.model");

async function readMovieByTitle(movieTitle) {
  try {
    const movie = await Movie.findOne({ title: movieTitle });
    return movie;
  } catch (error) {
    throw error;
  }
}

async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    return allMovies;
  } catch (error) {
    console.log(error);
  }
}

async function readMovieByDirector(directorName) {
  try {
    const movieByDirector = await Movie.find({ director: directorName });
    return movieByDirector;
  } catch (error) {
    console.log(error);
  }
}

async function readMovieByGenre(genreName) {
  try {
    const movies = await Movie.find({ genre: genreName });
    return movies;
  } catch (error) {
    console.log(error);
  }
}

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const saveMovie = await movie.save();
    return saveMovie;
  } catch (error) {
    throw error;
  }
}

async function deleteMovie(movieId) {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    return deletedMovie;
  } catch (error) {
    throw error;
    console.log(error);
  }
}

async function updateMovie(movieId, dataToUpdate) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {
      new: true,
    });
    return updatedMovie;
  } catch (error) {
    console.log("Error in updating movie", error);
  }
}

module.exports = {
  readMovieByTitle,
  readAllMovies,
  readMovieByDirector,
  readMovieByGenre,
  createMovie,
  deleteMovie,
  updateMovie,
};
