/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,tsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		screens: {
			xs: "500px",
			// => @media (min-width: 500px) { ... }

			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			backgroundColor: {
				Dbg: "000000",
				Dbg2: "#18181B",
				Dtab: "#252529",
				Dinput: "#161A22",
				BG: "#FAFAFA",
				BG2: "#FFFFFF",
				tab: "#FFFFFF",
			},
			textColor: {
				Dh1: "#F4F4F5",
				Dspan: "#9D9DA6",
				h1: "#27272A",
				span: "#52525B",
			},
		},
	},
	plugins: [],
};
