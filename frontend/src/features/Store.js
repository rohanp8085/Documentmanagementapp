import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import documentReducer from "./Document/DocumentSlice"
const Store = configureStore({
    reducer: {
        auth: authReducer,
        document :documentReducer,

    }
})
export default Store