import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import filterReducer from "./slices/projectFilterSlice";

export default configureStore({
	reducer: {
		user: userReducer, //
		filter: filterReducer,
	},
});
