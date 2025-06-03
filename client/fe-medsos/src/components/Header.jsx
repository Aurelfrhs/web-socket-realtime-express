import React from "react";
import { Box, Typography, Fade } from "@mui/material";
import { WhatshotOutlined as FireIcon } from "@mui/icons-material";

const Header = () => {
  return (
    <Fade in timeout={800}>
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 1,
            background: "linear-gradient(45deg, #1976d2, #4caf50)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <FireIcon fontSize="large" sx={{ color: "#ff5722" }} />
          Threads
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Share your thoughts with the community
        </Typography>
      </Box>
    </Fade>
  );
};

export default Header;