import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    value: AuthState
}
type AuthState = {
    isAuth: boolean,
    username: string,
    uid: string,
    isModerator: boolean,
}
const initialState: InitialState = {
    value:{
        isAuth: false,
        username: '',
        uid: '',
        isModerator: false,
    } as AuthState
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logOut: () => { return initialState; },
        logIn:  (state, action: PayloadAction) => { return initialState }
    }
});

export const { logOut, logIn } = auth.actions;
export default auth.reducer;