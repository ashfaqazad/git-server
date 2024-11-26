import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0a4275", color: "white", width: "100%" }}>
      <Container sx={{ py: 4, textAlign: "center" }}>
        {/* Free Advertisement Section */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontStyle: "italic" }}>
            Free for Advertisement
          </Typography>
        </Box>
      </Container>

      {/* Copyright Section */}
      <Box sx={{ backgroundColor: "#333", py: 2, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "white" }}>
          © 2024 Copyright{" "}
          <Link to="#" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
            AzadDev! 💕
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
