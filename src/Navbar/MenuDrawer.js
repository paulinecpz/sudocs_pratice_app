import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import menuLinks from './menuData';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

export default function MenuDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuLinks.map((link) => {
          const {id, url,text,icon} = link;
          return <ListItem button key={id} component={Link} to={url}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          })}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key='right'>
            <MenuIconButton
            style={{ backgroundColor: 'transparent' }}
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
            </MenuIconButton>
          <SwipeableDrawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

const MenuIconButton = styled(IconButton)`
    transition: all 0.2s ease-in-out;

    :hover {
      background-color: transparent;
      color: #56b460;
    }
`