import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/user.model";

type intialState = {
   users: Array<User>;
};

const initialState: intialState = {
   users: [],
};

const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
      addNewUser: (state, action: PayloadAction<User>) => {
         state.users = [...state.users, action.payload];
      },
      deleteUser: (state, action: PayloadAction<number>) => {
         state.users = state.users.filter((user) => user.id !== action.payload);
      },
   },
});

export const { addNewUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
