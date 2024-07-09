import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import COLORS from './configurations/colors';

const config: Config = {
	content: [
		'./(app|components|layouts)/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		backgroundImage: {
			'self-abstract': "url('/images/self-abstract.webp')",
			'application': "url('/images/application.png')",
			'blockchain': "url('/images/blockchain.png')",
			'cloud': "url('/images/cloud.png')",
			'devops': "url('/images/devops.png')",
			'machine-learning': "url('/images/machine-learning.png')",
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			defaultTheme: 'dark',
			themes: {
				light: {},
				dark: {},
				ctvnjhnrmmlp: {
					extend: 'dark',
					colors: {
						background: COLORS.alpha,
						foreground: COLORS.bravo,
					},
				},
			},
		}),
	],
};

export default config;
