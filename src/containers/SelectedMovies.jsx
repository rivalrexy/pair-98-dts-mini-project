import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import CardMovieSelected from "../components/CardMovieSelected";

import axios from "axios";
import { Box } from "@mui/material";
import { useParams, Link } from "react-router-dom";
// import SendIcon from "@mui/icons-material/Send";

const SelectedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState(movies);
  let params = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=d450ebab7993dde3b191cfc42c2e0b85"
        );
        let data = response.data.results;
        setMoviesFiltered(
          data.find((movie) => movie.id === parseInt(params.movieId))
        );
        setMovies(data);
      } catch (err) {}
    };
    fetchMovies();
  }, [moviesFiltered, params.movieId]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <CardMovieSelected key={params.movieId} props={moviesFiltered} />;
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {movies.map((movie) => {
          return (
            <Link to={`/movie/${movie.id}`}>
              <CardMovie key={movie.id} props={movie} />
            </Link>
          );
        })}
      </Box>
    </>
  );
};

export default SelectedMovies;
