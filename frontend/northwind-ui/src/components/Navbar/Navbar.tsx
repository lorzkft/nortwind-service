import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import './Navbar.scss';
import DeviceContext from '../../contexts/DeviceContext/DeviceContext';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavItem {
  to?: string;
  label: string;
}

const menuItems: NavItem[] = [  
  { label: 'Products', to: '/' },
  { label: 'Product summary', to: '/product-summary' }
];

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#b0aceb' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Northwind UI
        </Typography>
        {menuItems.map((item, index) => (
          <Button key={index} color="inherit" component={Link} to={item.to || '#'}>
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
