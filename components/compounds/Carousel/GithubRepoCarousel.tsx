'use client';

import GithubRepoCard from '@/components/blocks/Cards/GithubRepoCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface GithubRepoCarouselProps {
  repositories: GitHubRepository[];
}

export default function GithubRepoCarousel({
  repositories,
}: GithubRepoCarouselProps) {
  return (
    <Carousel
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
