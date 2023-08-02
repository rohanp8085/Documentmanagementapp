

import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RegiserUser, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const { user, isSuccess, isLoading, isError, message } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({

        name: '',
        email: '',
        password: '',
        password2: "",
    });

    const { name, email, password, password2 } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.error("password not match!!")
        } else {
            dispatch(RegiserUser(formData))
        }
    };



    useEffect(() => {
         
        if(isError){
            toast.error(message)
        }

        if (user || isSuccess) {
            navigate("/")
        }


        dispatch(reset())
        
    }, [user, isSuccess, isLoading, isError, message])
    return (
        <Container maxWidth="sm" sx={{ padding: 5 }} >

            <Typography variant="h5" component="h2" align="center">
                Register
            </Typography>
            <form onSubmit={handleSubmit} method='post'>

                <TextField
                    type="text"
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={handleChange}
                    required
                />
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
                <TextField
                    type="password"
                    name="password2"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password2}
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    fullWidth
                    size="large"
                    method="post"
                    style={{ marginTop: '1rem' }}
                >
                    Register
                </Button>
            </form>

        </Container>
    );
};

export default RegisterForm;
