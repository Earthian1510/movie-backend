const express = require("express");
const {
  readAllMovies,
  readMovieByDirector,
  readMovieByGenre,
  readMovieByTitle,
  createMovie,
  deleteMovie,
  updateMovie
} = require("../controllers/movie.controller");
const router = express.Router();

router.get("/movies/:title", async (req, res) => {
  try {
    const movie = await readMovieByTitle(req.params.title);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie." });
  }
});

router.get("/movies", async (req, res) => {
  try {
    const movies = await readAllMovies();
    if (movies.length !== 0) {
      res.status(200).json(movies);
    } else {
      res.status(404).json({ error: "No movies found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all movies" });
  }
});

router.get("/movies/director/:directorName", async (req, res) => {
  try {
    const directorMovie = await readMovieByDirector(req.params.directorName);
    if (directorMovie) {
      res.status(200).json(directorMovie);
    } else {
      res.status(404).json({ error: "No movie found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie by director name" });
  }
});

router.get("/movies/genre/:genre", async (req, res) => {
  try {
    const movies = await readMovieByGenre(req.params.genre);
    if (movies.length != 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movie found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fatch movie by genre" });
  }
});

router.post("/movies", async (req, res) => {
  try {
    const savedMovie = await createMovie(req.body);
    res
      .status(201)
      .json({ message: "Movie added successfully", movie: savedMovie });
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
});

router.delete("/movies/:movieId", async (req, res) => {
  try {
    const deletedMovie = await deleteMovie(req.params.movieId);
    res
      .status(200)
      .json({ message: "Movie deleted successfully", movie: deletedMovie });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete movie" });
  }
});

router.post("/movies/:movieId", async(req, res) => {
    try{
        const updatedMovie = await updateMovie(req.params.movieId, req.body)
        if(updatedMovie){
            res.status(200).json({ message: "Movie updated successfully", movie: updatedMovie})
        }
        else{
            res.status(404).json({ error: "No movie"})
        }
    }
    catch(error){
        res.status(500).json({ error: "Failed to update movie"})
    }
})

module.exports = router;
