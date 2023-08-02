import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DocumentService from "./DocumentService";
import { STATES } from "mongoose";



const initialState = {
    documents: [],
    document: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}
const DocumentSlice = createSlice({
    name: "document",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
     builder.addCase(createDocument.pending , state =>{
        state.isLoading = true
     }).addCase(createDocument.fulfilled , (state , action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.documents = [...state.documents, action.payload]
        state.document = action.payload
     }).addCase(createDocument.rejected , (state , action) =>{
          state.isLoading = false,
          state.isError = true
          state.isSuccess = false
          state.message = action.payload
     }).addCase(getalldocuments.pending , (state) =>{
        state.isLoading = true
     }).addCase(getalldocuments.fulfilled , (state , action)=>{
         state.isLoading = false
         state.isSuccess = true
         state.documents = action.payload
     }).addCase(getalldocuments.rejected , (state , action)=>{
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
     })
    }
})

export const {reset} = DocumentSlice.actions
export default DocumentSlice.reducer



export const createDocument = createAsyncThunk("create/document" , async(userdata , thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
         return await DocumentService.create(userdata , token)
    } catch (error) {
        const message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }
})

export const getalldocuments = createAsyncThunk("getall/documents" , async( _ , thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await DocumentService.getall(token)
    } catch (error) {
        const message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }
})