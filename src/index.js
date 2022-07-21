import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedComponent from "./components/ProtectedComponent";
import Login from "./containers/LoginPage";
import SignUp from "./containers/RegisterPage";
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import SelectedMovies from "./containers/SelectedMovies";
import Navbar from "./components/NavBar";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        sx={{ minHeight: "100vh", bgcolor: "black" }}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedComponent>
                <Home />
              </ProtectedComponent>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedComponent>
                <Profile />
              </ProtectedComponent>
            }
          />
          <Route
            path="movie/:movieId"
            element={
              <ProtectedComponent>
                <SelectedMovies />
              </ProtectedComponent>
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
