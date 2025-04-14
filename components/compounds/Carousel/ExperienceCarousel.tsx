'use client';

import ExperienceCard from '@/components/blocks/Cards/ExperienceCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import EXPERIENCES from '@/sources/experiences';
import Autoplay from 'embla-carousel-autoplay';

export default function ExperienceCarousel() {
  return (
    <Carousel
      className='w-full'
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
      <CarouselContent>
        {EXPERIENCES.map((experience) => (
          <CarouselItem
            key={experience.company}
            className='basis-full lg:basis-1/2'
          >
            <div className='p-1 h-full'>
              <ExperienceCard experience={experience} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
