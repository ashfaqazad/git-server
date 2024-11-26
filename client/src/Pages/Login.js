import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const Login = () => {
    // State to hold form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
      event.preventDefault();
      Axios.post('http://localhost:4000/api/login', {
        email,
        password
      }).then(response => {
        if (response.data.status) {
          // JWT Token and Email stored in localStorage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userEmail', email);
  
          console.log('JWT Token:', response.data.token);
          navigate('/');
        }
      }).catch(err => {
        console.log(err);
      });
    };

    return (
        <Box 
          sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '100vh', 
            backgroundColor: '#f0f2f5'
          }}
        >
            <Paper 
              elevation={6} 
              sx={{ 
                padding: 4, 
                width: 300, 
                borderRadius: 2, 
                boxShadow: 3 
              }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Sign In
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField 
                      label="Email" 
                      variant="outlined" 
                      fullWidth 
                      margin="normal" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                    <TextField 
                      label="Password" 
                      type="password" 
                      variant="outlined" 
                      fullWidth 
                      margin="normal" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    />

                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="warning" 
                      fullWidth 
                      sx={{ marginTop: 2 }}
                    >
                      Sign In
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default Login;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';

// const Login = () => {
//     // State to hold form data
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     Axios.defaults.withCredentials = true;

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       Axios.post('http://localhost:4000/api/login', {
//         email,
//         password
//       }).then(response => {
//         if (response.data.status) {
//           // JWT Token and Email stored in localStorage
//           localStorage.setItem('token', response.data.token);
//           localStorage.setItem('userEmail', email);
  
//           console.log('JWT Token:', response.data.token);
//           navigate('/');
//         }
//       }).catch(err => {
//         console.log(err);
//       });
//     };
  


//     return (
//         <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//             <div className="bg-white p-3 rounded w-25">
//                 <form onSubmit={handleSubmit}>
//                     <h2 className="text-center">Sign In</h2>

//                     <div className="mb-2">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="Enter Email"
//                             className="form-control"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-2">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="Enter Password"
//                             className="form-control"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>

//                     <button type="submit" className="btn btn-warning rounded-0 w-100">Sign In</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;