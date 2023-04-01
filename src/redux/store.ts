import { configureStore } from "@reduxjs/toolkit";
import userReducer, { updateUser } from "./slices/userSlice";

export default configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["user/updateUser"],
			},
		}),
	reducer: { user: userReducer },
});
