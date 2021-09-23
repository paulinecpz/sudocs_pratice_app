import React, { useState, useEffect } from 'react'
import logo from '../logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FaBars } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';

const MUInav = () => {
  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static" color="transparent" className="app-bar">
        <Toolbar className="nav-links">
          <Button color="inherit" className="nav-logo"><img src={logo}  alt="logo" /></Button>
          <Button color="inherit" className="menu-link">Features</Button>
          <Button color="inherit" className="menu-link">Pricing</Button>
          <Button color="inherit" className="menu-link">About</Button>
          <Button color="inherit" className="menu-link">Login</Button>
          <IconButton
          
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <FaBars className="icon-bars" /> */}
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default MUInav