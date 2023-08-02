import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getalldocuments } from '../features/Document/DocumentSlice'
import DocumentItem from '../components/documentItem'
import { Container, Typography } from '@mui/material'
const AllDocuments = () => {

    const { documents, isLoading, isSuccess } = useSelector(state => state.document)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getalldocuments())
    },[])
    if(isLoading){
        return(
            <h1>Loading...</h1>
        );
    }
 
    return (
        <>
           <Typography variant='h3' m={3} textAlign={"center"}>All Documents</Typography>
           <Container sx={{display:"flex" , alignItems:"center" , justifyContent:"space-evenly"  , width:"100%" , margin:10 }}>
             {
                documents.map(document => <DocumentItem key={document._id} document={document}/>)
             }
             </Container>
        </>
    )
}

export default AllDocuments
