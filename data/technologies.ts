import { BsFillBootstrapFill, BsGit } from 'react-icons/bs';
import {
	FaAngular,
	FaJava,
	FaLaravel,
	FaNodeJs,
	FaPython,
	FaReact,
	FaWordpress,
} from 'react-icons/fa';
import {
	SiAmazonaws,
	SiApollographql,
	SiDebian,
	SiExpress,
	SiFastapi,
	SiGraphql,
	SiMongodb,
	SiNextdotjs,
	SiPhp,
	SiPostgresql,
	SiPrisma,
	SiSocketdotio,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';
import { IoLogoVue } from 'react-icons/io5';

const technologies = [
	{
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		color: '#3178C6',
		icon: SiTypescript,
	},
	{
		name: 'PHP',
		url: 'https://www.php.net/',
		color: '#777BB3',
		icon: SiPhp,
	},
	{
		name: 'Java',
		url: 'https://www.java.com/en/',
		color: '#EC2024',
		icon: FaJava,
	},
	{
		name: 'Python',
		url: 'https://www.python.org/',
		color: '#FFD343',
		icon: FaPython,
	},
	{
		name: 'React',
		url: 'https://react.dev/',
		color: '#149ECA',
		icon: FaReact,
	},
	{
		name: 'Next',
		url: 'https://nextjs.org/',
		color: '#DBDBDB',
		icon: SiNextdotjs,
	},
	{
		name: 'Angular',
		url: 'https://angular.io/',
		color: '#DD0031',
		icon: FaAngular,
	},
	{
		name: 'Vue',
		url: 'https://vuejs.org/',
		color: '#42B883',
		icon: IoLogoVue,
	},
	{
		name: 'GraphQL',
		url: 'https://graphql.org/',
		color: '#F6009B',
		icon: SiGraphql,
	},
	{
		name: 'Apollo Client',
		url: 'https://graphql.org/',
		color: '#805AD5',
		icon: SiApollographql,
	},
	{
		name: 'Node',
		url: 'https://nodejs.org/en',
		color: '#026E00',
		icon: FaNodeJs,
	},
	{
		name: 'Express',
		url: 'https://expressjs.com/',
		color: '#d1c5c5',
		icon: SiExpress,
	},
	{
		name: 'Laravel',
		url: 'https://laravel.com/',
		color: '#F9322C',
		icon: FaLaravel,
	},
	{
		name: 'Fast API',
		url: 'https://fastapi.tiangolo.com/',
		color: '#009485',
		icon: SiFastapi,
	},
	{
		name: 'Prisma',
		url: 'https://www.prisma.io/',
		color: '#5A67D8',
		icon: SiPrisma,
	},
	{
		name: 'MySQL',
		url: 'https://www.mysql.com/',
		color: '#00758F',
		icon: GrMysql,
	},
	{
		name: 'PostgreSQL',
		url: 'https://www.postgresql.org/',
		color: '#336791',
		icon: SiPostgresql,
	},
	{
		name: 'MongoDB',
		url: 'https://www.mongodb.com/',
		color: '#00ED64',
		icon: SiMongodb,
	},
	{
		name: 'Socket.IO',
		url: 'https://socket.io/',
		color: '#00ED64',
		icon: SiSocketdotio,
	},
	{
		name: 'Tailwind CSS',
		url: 'https://tailwindcss.com/',
		color: '#38BDF8',
		icon: SiTailwindcss,
	},
	{
		name: 'Bootstrap',
		url: 'https://getbootstrap.com/',
		color: '#6F2CF2',
		icon: BsFillBootstrapFill,
	},
	{
		name: 'Debian',
		url: 'https://www.debian.org/',
		color: '#CE0058',
		icon: SiDebian,
	},
	{
		name: 'Wordpress',
		url: 'https://wordpress.com/',
		color: '#003C56',
		icon: FaWordpress,
	},
	{
		name: 'Git',
		url: 'https://git-scm.com/',
		color: '#F64D27',
		icon: BsGit,
	},
	{
		name: 'AWS',
		url: 'https://aws.amazon.com/',
		color: '#F64D27',
		icon: SiAmazonaws,
	},
];

export default technologies;
