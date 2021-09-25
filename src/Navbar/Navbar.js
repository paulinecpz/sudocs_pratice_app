import React from 'react'
import logo from '../logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuDrawer from './MenuDrawer';
import menuLinks from './menuData';
import { MenuItem } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import './Navbar.css'
import { styled } from '@mui/material/styles';

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" color="transparent" className="app-bar">
        <Toolbar className="nav-links">
          <MyMenuItem disableRipple component={Link} to='/' color="inherit" className="nav-logo"><img src={logo} alt="logo" /></MyMenuItem>
          {!isTabletOrMobile && 
            <div className="menu-links">
              {menuLinks.map((link) => {
                const {id, url,text} = link;
                return <MyMenuItem disableRipple component={Link} to={url} color="inherit" variant="text" key={id}>{text}</MyMenuItem>
              })}
            </div>
          }
          {isTabletOrMobile && <MenuDrawer />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar

const MyMenuItem = styled(MenuItem)`
    transition: all 0.2s ease-in-out;

    :hover {
      background-color: transparent;
      color: #56b460;
    }
`