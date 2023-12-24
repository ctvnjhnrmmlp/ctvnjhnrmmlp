'use client';

import applications from '@/data/applications';
import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ApplicationSwiper = () => {
	return (
		<>
			<div className='hidden xl:block'>
				<Swiper
					loop={true}
					grabCursor={true}
					effect={'creative'}
					creativeEffect={{
						prev: {
							shadow: true,
							translate: [0, 0, -400],
						},
						next: {
							translate: ['100%', 0, 0],
						},
					}}
					modules={[EffectCreative]}
					className='swiper-application w-[1440px] h-[920px] rounded-xxl'
				>
					{applications.map((application) => {
						return (
							<SwiperSlide
								className='swiperslide-application rounded-xxl'
								key={application.url}
							>
								<Link href={application.url} target='_blank' className='block'>
									<Image
										alt={application.name}
										src={`/images/${_.replace(
											_.lowerCase(application.name),
											/\s/g,
											'-'
										)}.webp`}
										width={100}
										height={100}
										className='rounded-xxl w-screen'
										unoptimized
									/>
								</Link>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className='flex flex-col gap-8 block xl:hidden w-screen px-2'>
				{applications.map((application) => {
					return (
						<Link href={application.url} target='_blank' className='block'>
							<Image
								alt={application.name}
								src={`/images/${_.replace(
									_.lowerCase(application.name),
									/\s/g,
									'-'
								)}.webp`}
								width={100}
								height={100}
								className='rounded-xl md:rounded-xxl w-screen'
								unoptimized
							/>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default ApplicationSwiper;
