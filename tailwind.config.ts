import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config: Config = {
	content: [
		'./(app|components|containers|layouts)/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontSize: {
				'heading-one-large': 'clamp(7.27rem, 9.75rem + 2.56vw, 8.58rem)',
				'heading-two-large': 'clamp(3.27rem, 2.75rem + 2.56vw, 5.58rem)',
			},
			borderRadius: {
				xxl: '50px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
export default config;
