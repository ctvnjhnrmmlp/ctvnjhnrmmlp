'use client';

import GithubRepoCard from '@/components/blocks/Cards/GithubRepoCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef } from 'react';

interface GithubRepoCarouselProps {
  repositories: GitHubRepository[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function GithubRepoCarousel({
  repositories,
  autoplay = false,
  autoplayInterval = 5000,
}: GithubRepoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const onSelect = () => {
    if (!emblaApi) return;
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  });

  useEffect(() => {
    if (autoplay && emblaApi) {
      const autoplayCallback = () => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      };

      const startAutoplay = () => {
        stopAutoplay();
        autoplayIntervalRef.current = setInterval(
          autoplayCallback,
          autoplayInterval
        );
      };

      const stopAutoplay = () => {
        if (autoplayIntervalRef.current) {
          clearInterval(autoplayIntervalRef.current);
          autoplayIntervalRef.current = null;
        }
      };

      startAutoplay();

      emblaApi.on('pointerDown', stopAutoplay);
      emblaApi.on('pointerUp', startAutoplay);

      return () => {
        stopAutoplay();
        emblaApi.off('pointerDown', stopAutoplay);
        emblaApi.off('pointerUp', startAutoplay);
      };
    }
  });

  return (
    <Carousel
      ref={emblaRef}
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          playOnInit: true,
          delay: 3000,
        }),
      ]}
      orientation='horizontal'
    >
      <CarouselContent className='-ml-2 md:-ml-4'>
        {repositories.map((repo, index) => (
          <CarouselItem
            key={index}
            className='pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3'
          >
            <div className='p-1'>
              <GithubRepoCard {...repo} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
