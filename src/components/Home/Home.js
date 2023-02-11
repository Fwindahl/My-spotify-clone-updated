import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { shadows } from "@mui/system";

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Typography
        sx={{
          color: "text.primary",
          textAlign: "center",
          maxWidth: "1200px",
          fontSize: "62px",
          textShadow: "3px 3px 5px black",
        }}
      >
        Welcome to my Spotify clone
      </Typography>
      <img
        src="/img/hero.jpg"
        style={{ maxWidth: "50%", borderRadius: "15px" }}
        alt="Techover"
      />
      <Button
        size="large"
        variant="contained"
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/filip-windahl-98930317a/")
        }
      >
        Kontakta mig!
      </Button>
    </Box>
  );
};

export default Home;
