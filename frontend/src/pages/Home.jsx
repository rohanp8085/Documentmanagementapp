import { Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

// import { makeStyles } from '@mui/styles';




const Home = () => {

    

    return (
        <Container sx={{ padding: 10 }}>

            <Typography variant="h3"   component="h2" sx={{ textAlign: "center", margin: 2 }} >
                Welcome to the Document Management App!
            </Typography>
            <Typography variant='body1'fontSize={25}  sx={{ textAlign: "center" , }}>
                This is a web application that allows you to manage your documents easily.<br/> You can create,  view, edit, and delete your documents with just a few clicks.
            </Typography>
            <Container>
            <Link to={"/new-document"}><Button variant="contained" color="success" sx={{width : "100%" , margin :5}}>
                Create Document
            </Button>
            </Link>
            </Container>

        </Container>
    )
}

export default Home
