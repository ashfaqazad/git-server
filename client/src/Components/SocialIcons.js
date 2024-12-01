// import React from 'react';
// import { NavLink } from 'react-router-dom'; // React Router for navigation
// import { Box, IconButton, Typography } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

// export default function SocialIcons() {
//   const socialLinks = [
//     { to: '/facebook', label: 'Facebook', icon: <FacebookIcon />, bgColor: '#1877F2' },
//     { to: '/whatsapp', label: 'Whatsapp', icon: <WhatsAppIcon />, bgColor: '#25D366' },
//     { to: '/twitter', label: 'Twitter', icon: <TwitterIcon />, bgColor: '#1DA1F2' },
//     { to: '/instagram', label: 'Instagram', icon: <InstagramIcon />, bgColor: '#E1306C' },
//   ];

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         left: 0,
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//       }}
//     >
//       <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 2 }}>
//         {socialLinks.map((link, index) => (
//           <Box
//             component="li"
//             key={index}
//             sx={{
//               mb: 1,
//               width: '160px',
//               borderRadius: '4px',
//               overflow: 'hidden',
//               transition: 'margin-left 0.3s ease',
//               '&:hover': { ml: -3 },
//               ml: '-120px',
//             }}
//           >
//             <NavLink to={link.to} style={{ textDecoration: 'none' }}>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   height: '40px',
//                   backgroundColor: link.bgColor,
//                   color: 'white',
//                   px: 2,
//                   py: 1,
//                 }}
//               >
//                 <Typography variant="body1">{link.label}</Typography>
//                 <IconButton size="large" sx={{ color: 'white' }}>
//                   {link.icon}
//                 </IconButton>
//               </Box>
//             </NavLink>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }
