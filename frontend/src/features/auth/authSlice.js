import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userexist = localStorage.getItem("user")
const initialState = {
   user: userexist ? JSON.parse(userexist) : null,
   isLoading: false,
   isSuccess: false,
   isError: false,
   message: ""
}
const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      reset: (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = false;
         state.message = ""
      },
   },
   extraReducers: (builder) => {
      builder.addCase(RegiserUser.pending, state => {
         state.isLoading = true;
      }).addCase(RegiserUser.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.user = action.payload;
      }).addCase(RegiserUser.rejected, (state, action) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
         state.message = action.payload;
         state.user = null;
         // console.log(action.payload);
      }).addCase(logoutUser.fulfilled, (state) => {
         state.user = null
      }).addCase(LoginUser.pending, state => {
         state.isLoading = true;
      }).addCase(LoginUser.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccess = true;
         state.user = action.payload;
      }).addCase(LoginUser.rejected, (state, action) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = true;
         state.message = action.payload;
         state.user = null;
         // console.log(action.payload);
      })

   }
})

export const { reset } = authSlice.actions
export default authSlice.reducer

export const RegiserUser = createAsyncThunk("register/user", async (userdata, thunkAPI) => {

   try {
      return await authService.registerUser(userdata)
   } catch (error) {
      const message = error.response.data.msg
      return thunkAPI.rejectWithValue(message)
   }

})
export const LoginUser = createAsyncThunk("login/user", async (userdata, thunkAPI) => {
   try {
      return await authService.loginUser(userdata)
   } catch (error) {
      const message = error.response.data.msg
      return thunkAPI.rejectWithValue(message)
   }
})

export const logoutUser = createAsyncThunk("logout/user", async () => {
   await authService.logout()
})


