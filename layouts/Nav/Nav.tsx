'use client';

import sections from '@/data/sections';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function Nav() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Navbar className='fixed shadow rounded-none sm:rounded-xl sm:w-10/12 md:w-7/12 mx-auto mt-0 sm:mt-4 sm:dark:border sm:dark:border-[#3F3F46]'>
			<NavbarContent className='flex gap-8 mx-auto' justify='center'>
				{sections.map((section) => {
					return (
						<NavbarItem key={section.url}>
							<Link key={section.url} href={section.url}>
								<section.icon className='text-lg md:text-2xl' />
							</Link>
						</NavbarItem>
					);
				})}
				<NavbarItem className='pointer'>
					{theme && theme === 'dark' ? (
						<FaSun
							className='text-lg md:text-2xl'
							onClick={() => setTheme('light')}
						/>
					) : (
						<FaMoon
							className='text-lg md:text-2xl'
							onClick={() => setTheme('dark')}
						/>
					)}
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}

export default Nav;
