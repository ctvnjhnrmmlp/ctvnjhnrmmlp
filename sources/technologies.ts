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
	SiJavascript,
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

const TECHNOLOGIES = [
	{
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		icon: SiJavascript,
	},
	{
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		icon: SiTypescript,
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
		name: 'PHP',
		url: 'https://www.php.net/',
		icon: SiPhp,
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
];

export default TECHNOLOGIES;
