import Home from "./containers/Home";
import Profile from "./containers/Profile";
import React from "react";
import { Box } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import SelectedMovies from "./containers/SelectedMovies";

const App = () => {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        sx={{ minHeight: "100vh", bgcolor: "black" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="movie/:movieId" element={<SelectedMovies />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
