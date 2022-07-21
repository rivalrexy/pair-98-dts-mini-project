import React from "react";
import { Card, Box, Typography, CardMedia } from "@mui/material";

const base = "https://image.tmdb.org/t/p/w1280/";
const CardMovieSelected = ({ props }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "17.9%",
          marginRight: "18%",
        }}>
        <Card
          sx={{
            // minWidth: 600,
            // minHeight: 150,
            // minWidth: 300,
            margin: "0.5em",
          }}>
          <CardMedia
            component="img"
            sx={{ width: 1200 }}
            image={`${base}${props.backdrop_path}`}></CardMedia>
          {/* <CardContent></CardContent> */}
        </Card>
        <Typography color="white">{props.overview}</Typography>
      </Box>
    </>
  );
};

export default CardMovieSelected;
