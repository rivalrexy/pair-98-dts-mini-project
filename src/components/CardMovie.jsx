import React from "react";
import { Card, Box, Typography, CardMedia, CardContent } from "@mui/material";

const base = "https://image.tmdb.org/t/p/w400/";
const CardMovie = ({ props }) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "50%" }}>
        <Card
          sx={{
            minWidth: 150,
            minHeight: 200,
            margin: "0.5em",
          }}>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 200 }}
            image={`${base}${props.poster_path}`}></CardMedia>
          {/* <CardContent>
            <Typography>{props.description}</Typography>
          </CardContent> */}
        </Card>
      </Box>
    </>
  );
};

export default CardMovie;
