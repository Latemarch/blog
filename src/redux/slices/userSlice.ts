import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../type";

export interface IAuth {
	user?: IUser;
}
const initialState: IAuth = {
	user: undefined,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<IUser | undefined>) => {
			state.user = action.payload;
		},
	},
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
