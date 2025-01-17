import React, { useState } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import YouTube from "react-youtube";

const base = "https://image.tmdb.org/t/p/w1280/";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const opts = {
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const CardMovieSelected = ({ props, ytbKey }) => {
  const [ytbVideo, setYtbVideo] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "25%",
          marginRight: "18%",
        }}>
        {ytbVideo ? (
          <YouTube videoId={ytbKey.key} opts={opts} />
        ) : (
          <>
            <ImageButton
              focusRipple
              style={{
                width: "50vw",
                height: "50vh",
              }}>
              <ImageSrc
                style={{
                  backgroundImage: `url(${base}${props.backdrop_path})`,
                }}
              />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  onClick={() => {
                    setYtbVideo(true);
                  }}
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}>
                  Play
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          </>
        )}
        <Box sx={{ marginRight: "10%" }}>
          <Typography color="white">Description</Typography>
          <Typography color="white">{props.overview}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CardMovieSelected;
