'use client';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { Swiper, SwiperSlide } from 'swiper/react';

import artworks from '@/sources/artworks';
import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { EffectCards } from 'swiper/modules';

const ArtworkSwiper = () => {
	return (
		<>
			<div className='hidden lg:block'>
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					loop={true}
					className='swiper-artwork w-[700px] bg-none shadow-none'
				>
					{artworks.map((artwork) => {
						return (
							<SwiperSlide
								key={artwork.url}
								className='swiperslide-artwork bg-none shadow-none rounded-xxl'
							>
								<Link href={artwork.url} target='_blank'>
									<Image
										unoptimized
										alt={artwork.name}
										src={`/images/${_.replace(
											_.lowerCase(artwork.name),
											/\s/g,
											'-'
										)}.webp`}
										width={100}
										height={100}
										className='rounded-xxl w-screen'
									/>
								</Link>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
			<div className='flex flex-col gap-8 lg:hidden w-screen px-2'>
				{artworks.map((artwork) => {
					return (
						<Link key={artwork.name} href={artwork.url} target='_blank'>
							<Image
								unoptimized
								alt={artwork.name}
								src={`/images/${_.replace(
									_.lowerCase(artwork.name),
									/\s/g,
									'-'
								)}.webp`}
								width={100}
								height={100}
								className='rounded-xxl w-screen'
							/>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default ArtworkSwiper;
