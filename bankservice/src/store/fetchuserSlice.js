import { createSlice } from "@reduxjs/toolkit";


const initialState={
    data:[],
};

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers :{
          fetchUsers(state,action){
                 state.data=action.payload;
          }
    }
})

export const {fetchUsers}=userSlice.actions;
export default userSlice.reducer;

export function getUsers(){
    return async function getUsersThunk(dispatch,getState){
         const response = await fetch(" http://localhost:8000/users");
         const result=await response.json();
         dispatch(fetchUsers(result));
    }
}