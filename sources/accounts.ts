import {
	FaFacebookF,
	FaGithub,
	FaGoogle,
	FaLinkedinIn,
	FaStackOverflow,
} from 'react-icons/fa';

import { BsTwitterX } from 'react-icons/bs';

const accounts = [
	{
		name: 'Facebook',
		url: 'https://facebook.com/ctvnjhnrmmlp',
		icon: FaFacebookF,
	},
	{
		name: 'X',
		url: 'https://twitter.com/ctvnjhnrmmlp',
		icon: BsTwitterX,
	},
	{
		name: 'Google',
		url: 'mailto:johnrommel.octaviano@gmail.com',
		icon: FaGoogle,
	},
	{
		name: 'GitHub',
		url: 'https://github.com/ctvnjhnrmmlp',
		icon: FaGithub,
	},
	{
		name: 'Stack Overflow',
		url: 'https://stackoverflow.com/users/16833816/john-rommel-octaviano',
		icon: FaStackOverflow,
	},
	{
		name: 'Linkedin',
		url: 'https://linkedin.com/in/ctvnjhnrmmlp',
		icon: FaLinkedinIn,
	},
];

export default accounts;
