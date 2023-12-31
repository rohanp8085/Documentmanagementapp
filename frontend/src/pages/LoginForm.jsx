import React, { useEffect, useState } from 'react'
import { TextField, Button, Container,  Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = () => {

  const { user, isSuccess, isLoading, isError, message } = useSelector(state => state.auth)


   const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
       
        email: '',
        password: '',
      });
      const {email , password} = formData

      const handleChange = (e) => {
           setFormData({
            ...formData,
            [e.target.name] : e.target.value
           })
           
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
         dispatch(LoginUser(formData))
        
      };


      useEffect(() => {
         
        if(isError){
            toast.error(message)
        }

        if (user || isSuccess) {
            navigate("/new-document")
        }


        dispatch(reset())
        
    }, [user, isSuccess, isLoading, isError, message])
     
    
  return (
    <Container maxWidth="sm" sx={{padding : 5}} >
     
    <Typography variant="h5" component="h2" align="center">
      Login
    </Typography>
    <form onSubmit={handleSubmit}>
     
      <TextField
        type="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleChange}
        required
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={handleChange}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        size="large"
        style={{ marginTop: '1rem' }}
      >
        Login
      </Button>
    </form>
  
</Container>
  )
}

export default LoginForm
