import { BsFillBootstrapFill, BsGit } from 'react-icons/bs';
import {
	FaAngular,
	FaJava,
	FaLaravel,
	FaNodeJs,
	FaPython,
	FaReact,
} from 'react-icons/fa';
import {
	SiAmazonaws,
	SiApollographql,
	SiCsharp,
	SiDocker,
	SiEthereum,
	SiExpo,
	SiExpress,
	SiFastapi,
	SiFigma,
	SiGnubash,
	SiGraphql,
	SiIonic,
	SiIpfs,
	SiKubernetes,
	SiLinux,
	SiMongodb,
	SiMongoose,
	SiNextdotjs,
	SiNumpy,
	SiOpenai,
	SiPandas,
	SiPhp,
	SiPostgresql,
	SiPrisma,
	SiPwa,
	SiPytorch,
	SiSocketdotio,
	SiSolidity,
	SiTailwindcss,
	SiTelegram,
	SiTrpc,
	SiTypescript,
	SiWeb3Dotjs,
} from 'react-icons/si';
import { TbBrandReactNative, TbCurrencySolana } from 'react-icons/tb';

import { GrMysql } from 'react-icons/gr';
import { IoLogoVue } from 'react-icons/io5';

const professions = [
	{
		name: 'Applications',
		slug: 'application',
		technologies: [
			{
				name: 'Progressive Web Apps',
				url: 'https://web.dev/explore/progressive-web-apps',
				icon: SiPwa,
			},
			{
				name: 'Node',
				url: 'https://nodejs.org/en',
				icon: FaNodeJs,
			},
			{
				name: 'TypeScript',
				url: 'https://www.typescriptlang.org/',
				icon: SiTypescript,
			},
			{
				name: 'PHP',
				url: 'https://www.php.net/',
				icon: SiPhp,
			},
			{
				name: 'Java',
				url: 'https://www.java.com/en/',
				icon: FaJava,
			},
			{
				name: 'Python',
				url: 'https://www.python.org/',
				icon: FaPython,
			},
			{
				name: 'React',
				url: 'https://react.dev/',
				icon: FaReact,
			},
			{
				name: 'Next',
				url: 'https://nextjs.org/',
				icon: SiNextdotjs,
			},
			{
				name: 'Angular',
				url: 'https://angular.io/',
				icon: FaAngular,
			},
			{
				name: 'Vue',
				url: 'https://vuejs.org/',
				icon: IoLogoVue,
			},
			{
				name: 'GraphQL',
				url: 'https://graphql.org/',
				icon: SiGraphql,
			},
			{
				name: 'Apollo Client',
				url: 'https://graphql.org/',
				icon: SiApollographql,
			},
			{
				name: 'trpc',
				url: 'https://trpc.io/',
				icon: SiTrpc,
			},
			{
				name: 'Express',
				url: 'https://expressjs.com/',
				icon: SiExpress,
			},
			{
				name: 'Fast API',
				url: 'https://fastapi.tiangolo.com/',
				icon: SiFastapi,
			},
			{
				name: 'Laravel',
				url: 'https://laravel.com/',
				icon: FaLaravel,
			},
			{
				name: 'Ionic',
				url: 'https://ionicframework.com/',
				icon: SiIonic,
			},
			{
				name: 'React Native',
				url: 'https://reactnative.dev/',
				icon: TbBrandReactNative,
			},
			{
				name: 'Expo',
				url: 'https://expo.dev/',
				icon: SiExpo,
			},
			{
				name: 'Prisma',
				url: 'https://www.prisma.io/',
				icon: SiPrisma,
			},
			{
				name: 'Mongoose',
				url: 'https://mongoosejs.com/',
				icon: SiMongoose,
			},
			{
				name: 'MySQL',
				url: 'https://www.mysql.com/',
				icon: GrMysql,
			},
			{
				name: 'PostgreSQL',
				url: 'https://www.postgresql.org/',
				icon: SiPostgresql,
			},
			{
				name: 'MongoDB',
				url: 'https://www.mongodb.com/',
				icon: SiMongodb,
			},
			{
				name: 'OpenAI',
				url: 'https://openai.com/',
				icon: SiOpenai,
			},
			{
				name: 'Socket.IO',
				url: 'https://socket.io/',
				icon: SiSocketdotio,
			},
			{
				name: 'grammY',
				url: 'https://grammy.dev',
				icon: SiTelegram,
			},
			{
				name: 'Tailwind CSS',
				url: 'https://tailwindcss.com/',
				icon: SiTailwindcss,
			},
			{
				name: 'Bootstrap',
				url: 'https://getbootstrap.com/',
				icon: BsFillBootstrapFill,
			},
			{
				name: 'Figma',
				url: 'https://figma.com/',
				icon: SiFigma,
				main: true,
			},
		],
	},
	{
		name: 'Machine Learning',
		slug: 'machine-learning',
		technologies: [
			{
				name: 'Python',
				url: 'https://www.python.org/',
				icon: FaPython,
			},
			{
				name: 'PyTorch',
				url: 'https://pytorch.org/',
				icon: SiPytorch,
			},
			{
				name: 'NumPY',
				url: 'https://numpy.org/',
				icon: SiNumpy,
			},
			{
				name: 'Pandas',
				url: 'https://pandas.pydata.org/',
				icon: SiPandas,
			},
		],
	},
	{
		name: 'Blockchain',
		slug: 'blockchain',
		technologies: [
			{
				name: 'Ethereum',
				url: 'https://ethereum.org/en/',
				icon: SiEthereum,
			},
			{
				name: 'Solana',
				url: 'https://solana.com/',
				icon: TbCurrencySolana,
			},
			{
				name: 'Solidity',
				url: 'https://soliditylang.org/',
				icon: SiSolidity,
			},
			{
				name: 'IPFS',
				url: 'https://ipfs.tech/',
				icon: SiIpfs,
			},
			{
				name: 'Web3js',
				url: 'https://web3js.org/',
				icon: SiWeb3Dotjs,
			},
		],
	},
	{
		name: 'DevOps',
		slug: 'devops',
		technologies: [
			{
				name: 'Fedora',
				url: 'https://fedoraproject.org/',
				icon: SiLinux,
			},
			{
				name: 'Docker',
				url: 'https://www.docker.com/',
				icon: SiDocker,
			},
			{
				name: 'Kubernetes',
				url: 'https://kubernetes.io/',
				icon: SiKubernetes,
				main: false,
			},
			{
				name: 'Git',
				url: 'https://git-scm.com/',
				icon: BsGit,
			},
			{
				name: 'Bash',
				url: 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)',
				icon: SiGnubash,
			},
		],
	},
	{
		name: 'Cloud',
		slug: 'cloud',
		technologies: [
			{
				name: 'AWS',
				url: 'https://aws.amazon.com/',
				icon: SiAmazonaws,
				main: false,
			},
		],
	},
];

export default professions;
