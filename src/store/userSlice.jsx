import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   user: JSON.parse(localStorage.getItem('user')),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        }
    }
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;