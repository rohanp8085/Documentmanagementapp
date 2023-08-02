import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/auth/authSlice';

const Navbar = () => {
     
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector(state=>state.auth)

  const handleLogout = () =>{
    dispatch(logoutUser())
    navigate("/login")
  }

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" color='success'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={"/"}>
                            Home</Link>
                    </Typography>
                    {
                      user ? ( 

                           <Button  sx={{bgcolor:"white" ,color:"black"}} className='logout-btn' onClick={handleLogout}>Logout</Button>
                     ):( 
                    <>
                        <Button color="inherit">
                            <Link to={"/login"}>Login</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to={"/register"}>Register</Link>
                        </Button>
                    </>
                     )
                    } 
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
