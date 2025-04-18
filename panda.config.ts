import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import bronze from "@park-ui/panda-preset/colors/bronze";
import neutral from "@park-ui/panda-preset/colors/neutral";
export default defineConfig({
	// Whether to use css reset
	preflight: true,

	presets: [
		"@pandacss/preset-base",
		createPreset({
			accentColor: bronze,
			grayColor: neutral,
			radius: "lg",
		}),
	],

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",

	jsxFramework: "solid",
});
