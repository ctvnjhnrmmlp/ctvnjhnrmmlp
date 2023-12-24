'use client';

import weblogs from '@/data/weblogs';
import { getBlogs } from '@/libraries/axios/axios';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

function WeblogSection() {
	const {
		data: blogs,
		error: blogsError,
		status: blogsStatus,
		fetchStatus: blogsFetchStatus,
		refetch: refetchBlogs,
	} = useQuery({
		queryKey: ['weblogs'],
		queryFn: () => getBlogs(),
	});

	return (
		<section id='weblogs' className='min-h-screen'>
			<div className='flex flex-col gap-24'>
				<div className='flex flex-col gap-10'>
					{blogsStatus === 'success' &&
						blogs.data.map((blog: BlogType) => (
							<Link key={blog.id} href={blog.canonical_url} target='_blank'>
								<Card
									className='rounded-xxl'
									style={{
										background: `url('${blog.cover_image}')`,
										backgroundAttachment: 'scroll',
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'center',
									}}
								>
									<CardHeader className='flex gap-3 p-8'>
										<div className='flex flex-col'>
											<h2 className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase'>
												{blog.title}
											</h2>
										</div>
									</CardHeader>
									<CardBody className='px-8'>
										<p className='text-2xl md:text-3xl font-light text-white font-extralight'>
											{blog.published_timestamp}
										</p>
									</CardBody>
									<CardFooter></CardFooter>
								</Card>
							</Link>
						))}
				</div>

				<div className='flex justify-center mx-auto gap-6 sm:gap-12'>
					{weblogs.map((weblog) => {
						return (
							<Link
								key={weblog.url}
								href={weblog.url}
								target='_blank'
								className='text-4xl sm:text-6xl'
							>
								<weblog.icon />
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default WeblogSection;
