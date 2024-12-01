import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const socialLinks = [
    { to: "https://www.facebook.com/", icon: <FacebookIcon />, bgColor: "#1877F2" },
    { to: "https://wa.me/", icon: <WhatsAppIcon />, bgColor: "#25D366" },
    { to: "https://twitter.com/", icon: <TwitterIcon />, bgColor: "#1DA1F2" },
    { to: "https://www.instagram.com/", icon: <InstagramIcon />, bgColor: "#E1306C" },
  ];

  return (
    <Box sx={{ backgroundColor: "#000", color: "white", width: "100%" }}>
      <Container sx={{ py: 3, textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}></Box>

        {/* Social Icons Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 2,
          }}
        >
          {socialLinks.map((link, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: link.bgColor,
                color: "white",
                borderRadius: 2,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              }}
            >
              {/* Use <a> tag for external links with target="_blank" */}
              <a
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{link.label}</Typography>
                <IconButton size="small" sx={{ color: "white" }}>
                  {link.icon}
                </IconButton>
              </a>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Copyright Section */}
      <Box sx={{ backgroundColor: "#0a4275", py: 2, textAlign: "center" }}>
        <Typography variant="body6" sx={{ color: "white" }}>
          © 2024 Copyright{" "}
          <a
            href="#"
            style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
          >
            AzadDev! 💕
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;





// import React from "react";
// import { Link } from "react-router-dom";
// import { Box, Typography, Container } from "@mui/material";

// function Footer() {
//   return (
//     <Box sx={{ backgroundColor: "#0a4275", color: "white", width: "100%" }}>
//       <Container sx={{ py: 4, textAlign: "center" }}>
//         {/* Free Advertisement Section */}
//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", fontStyle: "italic" }}>
//             Free for Advertisement
//           </Typography>
//         </Box>
//       </Container>

//       {/* Copyright Section */}
//       <Box sx={{ backgroundColor: "#333", py: 2, textAlign: "center" }}>
//         <Typography variant="body2" sx={{ color: "white" }}>
//           © 2024 Copyright{" "}
//           <Link to="#" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
//             AzadDev! 💕
//           </Link>
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default Footer;
