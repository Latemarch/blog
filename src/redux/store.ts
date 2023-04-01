import { configureStore } from "@reduxjs/toolkit";
import userReducer, { updateUser } from "./slices/userSlice";

export default configureStore({
	reducer: { user: userReducer },
});
