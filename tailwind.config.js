/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,tsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		screens: {
			xs: "500px",
		},
		extend: {
			backgroundColor: {
				Dbg: "#000000",
				Dbg2: "#18181B",
				Dtab: "#252529",
				Dinput: "#161A22",
			},
			textColor: {
				Dh1: "#F4F4F5",
				Dspan: "#9999A2",
			},
		},
	},
	plugins: [],
};
