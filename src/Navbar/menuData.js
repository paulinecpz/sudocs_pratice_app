import React from 'react';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const menuLinks = [
    {
        id:1,
        url: '/features',
        text:'Features',
        icon: <FeaturedPlayListOutlinedIcon />,
    },
    {
        id:2,
        url: '/pricing',
        text:'Pricing',
        icon: <CreditCardOutlinedIcon />,
    },
   {
        id:3,
        url: '/about',
        text: 'About',
        icon: <HelpOutlineOutlinedIcon />,
    },
    {
        id:4,
        url: '/login',
        text: 'Login',
        icon: <LoginOutlinedIcon />,
    },
]
export default menuLinks;