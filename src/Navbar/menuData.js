import React from 'react';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Features from '../Pages/Features';
import Pricing from '../Pages/Pricing';
import Login from '../Pages/Login';
import Error from '../Pages/Error';

const menuLinks = [
    {
        id:1,
        url: '/features',
        text:'Features',
        icon: <FeaturedPlayListOutlinedIcon />,
        route: <Features />,
    },
    {
        id:2,
        url: '/pricing',
        text:'Pricing',
        icon: <CreditCardOutlinedIcon />,
        route: <Pricing />,
    },
   {
        id:3,
        url: '/about',
        text: 'About',
        icon: <HelpOutlineOutlinedIcon />,
        route: <About />,
    },
    {
        id:4,
        url: '/login',
        text: 'Login',
        icon: <LoginOutlinedIcon />,
        route: <Login />,
    },
     {
        id:6,
        url: '/',
        text: 'Home',
        icon: <LoginOutlinedIcon />,
        route: <Home />,
    },
    {
        id:5,
        url: '*',
        text: 'Error',
        icon: <LoginOutlinedIcon />,
        route: <Error />,
    },
   
]
export default menuLinks;