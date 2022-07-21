import React from "react";
import { Card, Box, Typography, CardMedia, CardContent } from "@mui/material";

const CardProfile = ({ props }) => {
  return (
    <>
      <Card
        sx={{
          minWidth: 150,
          minHeight: 150,
          margin: "1em",
          backgroundColor: "white",
        }}>
        <CardContent></CardContent>
        <Typography
          sx={{ color: "black", textAlign: "center", paddingTop: "60%" }}>
          USER
        </Typography>
      </Card>
    </>
  );
};

export default CardProfile;
