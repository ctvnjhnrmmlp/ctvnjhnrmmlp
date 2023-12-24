'use client';

import artworks from '@/data/artworks';
import _ from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
										alt={artwork.name}
										src={`/images/${_.replace(
											_.lowerCase(artwork.name),
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
			<div className='flex flex-col gap-8 block lg:hidden w-screen px-2'>
				{artworks.map((artwork) => {
					return (
						<Link href={artwork.url} target='_blank'>
							<Image
								alt={artwork.name}
								src={`/images/${_.replace(
									_.lowerCase(artwork.name),
									/\s/g,
									'-'
								)}.webp`}
								width={100}
								height={100}
								className='rounded-xxl w-screen'
								unoptimized
							/>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default ArtworkSwiper;
