import React from "react";
import CardProfile from "../components/CardProfile";
import { Box, Typography, Button } from "@mui/material";

const Profile = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "15%",
        }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
          }}>
          Who's watching?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "gray",
                borderRadius: "100%",
                alignItems: "center",
                padding: "30% 0px 30% 0px",
                margin: "0% 80% 0% 80%",
              }}>
              +
            </Button>
          </Box>
        </Box>
        <Button variant="outlined" sx={{ margin: "0% 40% 0% 40%" }}>
          MANAGE PROFILE
        </Button>
      </Box>
    </>
  );
};

export default Profile;
