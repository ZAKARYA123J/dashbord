import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

function Inscription() {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      sx={{ mt: 4 }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Nom de Service
        </Typography>
        <TextField 
          variant="outlined" 
          fullWidth 
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Nom de membre
        </Typography>
        <TextField 
          variant="outlined" 
          fullWidth 
        />
      </Box>
    </Box>
  );
}

export default Inscription;
