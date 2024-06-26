import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    } catch (e) {
        dispatch(userSlice.actions.usersFetchingError('Bad request'));
    }
}

// export const fetchUsers = createAsyncThunk(
//     'user/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/user2s')
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
//         }
//     }
// )