import React, { useState } from "react";
import Header from "./Header";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";

function Table({ loading, dataHeader, handleSort, direction, field, children } = {}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form Data:", formData);
    handleClose();
  };

  return (
    <div className="overflow-x-auto">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Insert Data
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Insert Data</DialogTitle>
        <DialogContent>
          {/* Add your input fields here */}
          <TextField
            autoFocus
            margin="dense"
            name="field1"
            label="Field 1"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="field2"
            label="Field 2"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
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
      <table className="block md:table w-full text-sm text-left text-gray-500">
        <Header data={dataHeader} handleSort={handleSort} direction={direction} field={field}></Header>
        <tbody className="block md:table-row-group">{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
