import { configureStore } from "@reduxjs/toolkit";
import userSlice from './fetchuserSlice'

const store=configureStore({
    reducer :{
        users:userSlice,
    }
});

export default store