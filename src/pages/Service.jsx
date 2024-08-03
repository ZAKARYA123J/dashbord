import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function Service() {
  const [nom, setNom] = useState('');

  const [IDadmin, setIdadmin] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/services', {
        nom,
        IDadmin
      });
      console.log('Response:', response.data);
      // Optionally reset the form after successful submission
      setNom('');
      setIdadmin(1);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Service Form
        </Typography> */}
        <Box 
          p={3} 
          border={1} 
          borderColor="grey.300" 
          borderRadius={2}
          bgcolor={'white'}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nom de Service"
              variant="outlined"
              fullWidth
              margin="normal"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <Box mt={2}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default Service;
