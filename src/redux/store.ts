import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import filterReducer from "./slices/projectFilterSlice";
import darkModeReducer from "./slices/darkModeSlice";

export default configureStore({
	reducer: {
		user: userReducer, //
		filter: filterReducer,
		darkMode: darkModeReducer,
	},
});
