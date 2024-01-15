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
	SiIonic,
	SiMongodb,
	SiMongoose,
	SiNextdotjs,
	SiNuxtdotjs,
	SiPhp,
	SiPostgresql,
	SiPrisma,
	SiPwa,
	SiSocketdotio,
	SiSpringboot,
	SiTailwindcss,
	SiTrpc,
	SiTypescript,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';
import { IoLogoVue } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';

const technologies = [
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
		name: 'Nuxt',
		url: 'https://nuxt.com/',
		icon: SiNuxtdotjs,
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
		name: 'Node',
		url: 'https://nodejs.org/en',
		icon: FaNodeJs,
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
		name: 'Spring Boot',
		url: 'https://spring.io/projects/spring-boot/',
		icon: SiSpringboot,
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
		name: 'Progressive Web Apps',
		url: 'https://web.dev/explore/progressive-web-apps',
		icon: SiPwa,
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
		name: 'Socket.IO',
		url: 'https://socket.io/',
		icon: SiSocketdotio,
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
		name: 'Debian',
		url: 'https://www.debian.org/',
		icon: SiDebian,
	},
	{
		name: 'Wordpress',
		url: 'https://wordpress.com/',
		icon: FaWordpress,
	},
	{
		name: 'Git',
		url: 'https://git-scm.com/',
		icon: BsGit,
	},
	{
		name: 'AWS',
		url: 'https://aws.amazon.com/',
		icon: SiAmazonaws,
	},
];

export default technologies;
