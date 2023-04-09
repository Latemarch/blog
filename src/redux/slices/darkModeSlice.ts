import { createSlice } from "@reduxjs/toolkit";
import { IDarkmodeSlice } from "../../type";

const initialState: IDarkmodeSlice = {
	isDark: true,
};

export const darkModeSlice = createSlice({
	name: "darkMode",
	initialState,
	reducers: {
		updateMode: (state) => {
			state.isDark = !state.isDark;
		},
	},
});

export const { updateMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
