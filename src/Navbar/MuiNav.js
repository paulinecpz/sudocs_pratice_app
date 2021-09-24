import React from 'react'
import logo from '../logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuDrawer from './MenuDrawer'
import { MenuItem } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import './Navbar.css'


const menuLinks = ['Features', 'Pricing', 'About', 'Login'];

const MUInav = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" color="transparent" className="app-bar">
        <Toolbar className="nav-links">
          <MenuItem color="inherit" className="nav-logo"><img src={logo} alt="logo" /></MenuItem>
          {!isTabletOrMobile && 
            <div className="menu-links">
              {menuLinks.map((link) => {
                const href = `/${link}`
                return <MenuItem to={href} color="inherit" variant="text">{link}</MenuItem>
              })}
            </div>
          }
          {isTabletOrMobile && <MenuDrawer />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default MUInav

