import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import axios from "axios";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=d450ebab7993dde3b191cfc42c2e0b85"
        );
        setMovies(response.data.results);
      } catch (err) {}
    };
    fetchMovies();
  });
  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`}>
            <CardMovie key={movie.id} props={movie} />
          </Link>
        );
      })}
    </Box>
  );
};

export default Home;
