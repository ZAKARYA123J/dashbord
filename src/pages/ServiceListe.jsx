import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Chip,
  Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Navbar from "../components/Navbar/Index";
import Service from './Service';
function ServiceList() {
  const [service, setService] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/services');
        setService(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    // Handle form submission
    console.log("Form Data:");
    handleClose();
  };
  return (
    <>
   <Navbar/>
   <br/>
   <Button variant="contained" color="primary"  onClick={handleClickOpen}>
        Insert Data
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Insert Data</DialogTitle>
        <DialogContent>
          {/* Add your input fields here */}
         <Service/>
        
  
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nom</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {service.map((row) => (
            <TableRow key={row.NumS}>
              <TableCell>{row.NumS}</TableCell>
              <TableCell>{row.NomS}</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default ServiceList;
