// import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createDocument, reset } from '../features/Document/DocumentSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const NewDocument = () => {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)

    const {isSuccess , isLoading , isError , message } = useSelector(state => state.document)
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const [name] = useState(user.name)

    const [email] = useState(user.email)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // const [profileimage, setProfileimage] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createDocument({title , description}))
        // setTitle("")
        // setDescription('')
        // setProfileimage("")
    }


    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess){
            dispatch(reset)
            navigate("/all-documents")
        }
        dispatch(reset())
    }, [dispatch , isError , isSuccess , message , navigate])

    return (
        <>
            <Container   sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: 5 , width:"100%"}} >
                <Typography variant='h5' className='newdoc' > New Document</Typography>
            </Container>
            <Container maxWidth="sm" sx={{ padding: 0 }} >
                <Typography variant='h5' color={"gray"}>Please Fill up all details below</Typography>


                <form onSubmit={handleSubmit} method='post'>

                    <TextField
                        type="text"
                        name="name"
                        // label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        // onChange={()}
                        required
                    />
                    <TextField
                        type="email"
                        name="email"
                        // label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        // onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        name="title"
                        label="title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <TextField
                        type="text"
                        name="description"
                        label="description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    {/* <TextField
                        type="file"
                        name="profileimage"
                        // label="upload photo"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={profileimage}
                        onChange={(e) => setProfileimage(e.target.value)}
                        required
                    /> */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        fullWidth
                        size="large"
                        method="post"
                        style={{ marginTop: '1rem' }}
                    >
                        Create Document
                    </Button>
                </form>

            </Container>
        </>

    )
}

export default NewDocument
