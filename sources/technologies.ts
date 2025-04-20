import { BsFillBootstrapFill, BsGit } from 'react-icons/bs';
import {
  FaAngular,
  FaJava,
  FaLaravel,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiAmazon,
  SiApollographql,
  SiArchlinux,
  SiDocker,
  SiEthereum,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiGraphql,
  SiIpfs,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPytorch,
  SiSocketdotio,
  SiSolidity,
  SiSupabase,
  SiTailwindcss,
  SiTelegram,
  SiTrpc,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

import { GrMysql } from 'react-icons/gr';

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
    name: 'Nest',
    url: 'https://nestjs.com/',
    icon: SiNestjs,
  },
  {
    name: 'Express',
    url: 'https://expressjs.com/',
    icon: SiExpress,
  },
  {
    name: 'Fastify',
    url: 'https://fastify.dev/',
    icon: SiFastify,
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
    name: 'Supabase',
    url: 'https://supabase.com/',
    icon: SiSupabase,
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
    name: 'Arch Linux',
    url: 'https://archlinux.org/',
    icon: SiArchlinux,
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
    name: 'AWS',
    url: 'https://aws.amazon.com/',
    icon: SiAmazon,
    main: false,
  },
];

export default TECHNOLOGIES;
