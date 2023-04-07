import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type projectFilter = null | "React" | "ES6" | "ETC";

export interface IProjectFilter {
	projectFilter: projectFilter;
}
const initialState: IProjectFilter = {
	projectFilter: null,
};

export const projectFilterSlice = createSlice({
	name: "projectFilter",
	initialState,
	reducers: {
		updateFilter: (state, action: PayloadAction<projectFilter>) => {
			state.projectFilter = action.payload;
		},
	},
});

export const { updateFilter } = projectFilterSlice.actions;
export default projectFilterSlice.reducer;
