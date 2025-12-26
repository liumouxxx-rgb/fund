import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    name: '',
    token: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.token = action.payload.token;
        },
        logout(state) {
            state.name = '';
            state.token = null;
        },
    },
});
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
