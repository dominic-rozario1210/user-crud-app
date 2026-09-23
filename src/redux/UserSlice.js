import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"todos",
    initialState:{
        users:[]
    },
    reducers:{
        getUsers:(state,action) =>{
            state.users=action.payload;
        },
        addUser:(state,action) => {
            state.users.push(action.payload);
        },
        updateUser:(state,action) => {
            const index = state.users.findIndex(
                user => user.id === action.payload.id
            );
            if (index !== -1){
                state.users[index]=action.payload
            }
        },
        deleteUser:(state,action) => {
            state.users=state.users.filter(
                user => user.id !== action.payload);
        }
        

    }
})
export const {getUsers,addUser,updateUser,deleteUser} = UserSlice.actions;
export default UserSlice.reducer;