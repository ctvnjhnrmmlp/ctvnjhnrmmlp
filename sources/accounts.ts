import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaStar,
} from 'react-icons/fa';

import { SiLinktree } from 'react-icons/si';

const ACCOUNTS = [
  {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/ctvnjhnrmmlp',
    icon: FaLinkedinIn,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ctvnjhnrmmlp',
    icon: FaGithub,
  },
  {
    name: 'Google',
    url: 'mailto:johnrommel.octaviano@gmail.com',
    icon: FaGoogle,
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/ctvnjhnrmmlp',
    icon: FaFacebookF,
  },
  {
    name: 'Link Tree',
    url: 'https://linktr.ee/ctvnjhnrmmlp',
    icon: SiLinktree,
  },
  {
    name: 'The Logs',
    url: 'https://the-logs.vercel.app',
    icon: FaStar,
  },
];

export default ACCOUNTS;
