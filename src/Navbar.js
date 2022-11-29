import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import GetStartedPage from './pages/GetStarted';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import "./Navbar.css";
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from "./theme.js";
import "./pages/GetStarted.css"

const NavButtons = styled(Button)(({ theme }) => ({
  color: "black"
}));

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" style={{backgroundColor: "white", color: "black"}}>
        <Toolbar>
          <img src="https://beam.apache.org/images/beam_logo_navbar.png" className='logo'/>
          <button className="headerBtn" onClick={() => {window.open('https://beam.apache.org/about/')}} theme={theme} margin="8">About</button>
          <button 
            className="headerBtn"
            color="inherit" 
            theme={theme}
            onClick={() => {
              navigate('/')
            }}>
            Get Started
          </button>
          <button className="headerBtn" onClick={() => {window.open('https://beam.apache.org/about/')}} endIcon={<ExpandMoreIcon />} theme={theme}>Documentation</button>
          <button className="headerBtn" onClick={() => {window.open('https://beam.apache.org/about/')}} theme={theme} sx={{}}variant='outlined'>Roadmap</button>
          <button className="headerBtn" onClick={() => {window.open('https://beam.apache.org/about/')}} theme={theme}>Community</button>
          <button className="headerBtn" onClick={() => {window.open('https://beam.apache.org/about/')}} theme={theme}>Contribute</button>
          <button className="headerBtn" onClick={() => {window.open('https://beam.apache.org/about/')}} theme={theme}>Blog</button>
          <button className="headerBtn" onClick={() => {window.open('https://beam.apache.org/about/')}} theme={theme}>Case Studies</button>
          <MenuItem style={{color: "orange"}}>
            <SearchIcon />
            <EditIcon/>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}