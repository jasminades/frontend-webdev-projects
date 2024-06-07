import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#8B0000' }}> 
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Southpaw Boxing
        </Typography>
        <Button color="inherit" component={Link} to="/Home">Home</Button>
        <Button color="inherit" component={Link} to="/Team">Team</Button>
        <Button color="inherit" component={Link} to="/Trainings">Trainings</Button>
        <Button color="inherit" component={Link} to="/About">About</Button>
        <Button color="inherit" component={Link} to="/Contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
