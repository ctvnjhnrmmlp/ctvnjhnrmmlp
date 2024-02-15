import { BsFillBootstrapFill, BsGit, BsUnity } from 'react-icons/bs';
import {
	FaAngular,
	FaJava,
	FaLaravel,
	FaNodeJs,
	FaPython,
	FaReact,
	FaWordpress,
} from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import {
	SiAmazonaws,
	SiAndroidstudio,
	SiApollographql,
	SiAstro,
	SiCss3,
	SiDebian,
	SiDocker,
	SiExpress,
	SiFastapi,
	SiFigma,
	SiGnubash,
	SiGraphql,
	SiHtml5,
	SiIonic,
	SiJavascript,
	SiKubernetes,
	SiMongodb,
	SiMongoose,
	SiNextdotjs,
	SiNuxtdotjs,
	SiPhp,
	SiPostgresql,
	SiPrisma,
	SiPwa,
	SiSass,
	SiSocketdotio,
	SiSolidity,
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
		name: 'HTML5',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		icon: SiHtml5,
		main: true,
	},
	{
		name: 'CSS3',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		icon: SiCss3,
		main: true,
	},
	{
		name: 'Sass',
		url: 'https://sass-lang.com/',
		icon: SiSass,
		main: true,
	},
	{
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		icon: SiJavascript,
		main: true,
	},
	{
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		icon: SiTypescript,
		main: true,
	},
	{
		name: 'PHP',
		url: 'https://www.php.net/',
		icon: SiPhp,
		main: true,
	},
	{
		name: 'Java',
		url: 'https://www.java.com/en/',
		icon: FaJava,
		main: true,
	},
	{
		name: 'Golang',
		url: 'https://go.dev/',
		icon: FaGolang,
		main: false,
	},
	{
		name: 'Python',
		url: 'https://www.python.org/',
		icon: FaPython,
		main: true,
	},
	{
		name: 'Solidity',
		url: 'https://soliditylang.org/',
		icon: SiSolidity,
		main: false,
	},
	{
		name: 'React',
		url: 'https://react.dev/',
		icon: FaReact,
		main: true,
	},
	{
		name: 'Next',
		url: 'https://nextjs.org/',
		icon: SiNextdotjs,
		main: true,
	},
	{
		name: 'Angular',
		url: 'https://angular.io/',
		icon: FaAngular,
		main: true,
	},
	{
		name: 'Vue',
		url: 'https://vuejs.org/',
		icon: IoLogoVue,
		main: false,
	},
	{
		name: 'Nuxt',
		url: 'https://nuxt.com/',
		icon: SiNuxtdotjs,
		main: false,
	},
	{
		name: 'Astro',
		url: 'https://astro.build/',
		icon: SiAstro,
		main: true,
	},
	{
		name: 'GraphQL',
		url: 'https://graphql.org/',
		icon: SiGraphql,
		main: true,
	},
	{
		name: 'Apollo Client',
		url: 'https://graphql.org/',
		icon: SiApollographql,
		main: true,
	},
	{
		name: 'trpc',
		url: 'https://trpc.io/',
		icon: SiTrpc,
		main: true,
	},
	{
		name: 'Node',
		url: 'https://nodejs.org/en',
		icon: FaNodeJs,
		main: true,
	},
	{
		name: 'Express',
		url: 'https://expressjs.com/',
		icon: SiExpress,
		main: true,
	},
	{
		name: 'Fast API',
		url: 'https://fastapi.tiangolo.com/',
		icon: SiFastapi,
		main: true,
	},
	{
		name: 'Laravel',
		url: 'https://laravel.com/',
		icon: FaLaravel,
		main: true,
	},
	{
		name: 'Spring Boot',
		url: 'https://spring.io/projects/spring-boot/',
		icon: SiSpringboot,
		main: false,
	},
	{
		name: 'Ionic',
		url: 'https://ionicframework.com/',
		icon: SiIonic,
		main: false,
	},
	{
		name: 'React Native',
		url: 'https://reactnative.dev/',
		icon: TbBrandReactNative,
		main: false,
	},
	{
		name: 'Android Studio',
		url: 'https://developer.android.com/studio',
		icon: SiAndroidstudio,
		main: false,
	},
	{
		name: 'Progressive Web Apps',
		url: 'https://web.dev/explore/progressive-web-apps',
		icon: SiPwa,
		main: true,
	},
	{
		name: 'Prisma',
		url: 'https://www.prisma.io/',
		icon: SiPrisma,
		main: true,
	},
	{
		name: 'Mongoose',
		url: 'https://mongoosejs.com/',
		icon: SiMongoose,
		main: true,
	},
	{
		name: 'MySQL',
		url: 'https://www.mysql.com/',
		icon: GrMysql,
		main: true,
	},
	{
		name: 'PostgreSQL',
		url: 'https://www.postgresql.org/',
		icon: SiPostgresql,
		main: true,
	},
	{
		name: 'MongoDB',
		url: 'https://www.mongodb.com/',
		icon: SiMongodb,
		main: true,
	},
	{
		name: 'Socket.IO',
		url: 'https://socket.io/',
		icon: SiSocketdotio,
		main: true,
	},
	{
		name: 'Tailwind CSS',
		url: 'https://tailwindcss.com/',
		icon: SiTailwindcss,
		main: true,
	},
	{
		name: 'Bootstrap',
		url: 'https://getbootstrap.com/',
		icon: BsFillBootstrapFill,
		main: true,
	},
	{
		name: 'Debian',
		url: 'https://www.debian.org/',
		icon: SiDebian,
		main: true,
	},
	{
		name: 'Docker',
		url: 'https://www.docker.com/',
		icon: SiDocker,
		main: true,
	},
	{
		name: 'Kubernetes',
		url: 'https://kubernetes.io/',
		icon: SiKubernetes,
		main: false,
	},
	{
		name: 'Wordpress',
		url: 'https://wordpress.com/',
		icon: FaWordpress,
		main: false,
	},
	{
		name: 'Git',
		url: 'https://git-scm.com/',
		icon: BsGit,
		main: true,
	},
	{
		name: 'Bash',
		url: 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)',
		icon: SiGnubash,
		main: true,
	},
	{
		name: 'AWS',
		url: 'https://aws.amazon.com/',
		icon: SiAmazonaws,
		main: false,
	},
	{
		name: 'Figma',
		url: 'https://figma.com/',
		icon: SiFigma,
		main: true,
	},
	{
		name: 'Unity',
		url: 'https://unity.com/',
		icon: BsUnity,
		main: false,
	},
];

export default technologies;
