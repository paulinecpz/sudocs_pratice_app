import React from 'react'
import logo from '../logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuDrawer from './MenuDrawer'
import { useMediaQuery } from 'react-responsive'

const MUInav = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" color="transparent" className="app-bar">
        <Toolbar className="nav-links">
          <Button color="inherit" className="nav-logo"><img src={logo} alt="logo" /></Button>
          <Button color="inherit" className="menu-link">Features</Button>
          <Button color="inherit" className="menu-link">Pricing</Button>
          <Button color="inherit" className="menu-link">About</Button>
          <Button color="inherit" className="menu-link">Login</Button>
          {isTabletOrMobile && <MenuDrawer />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default MUInav
