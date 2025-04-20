'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Experience {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className='w-full rounded-3xl backdrop-blur-sm bg-white/5 border-white/20 border-1 shadow-none overflow-hidden transition-all h-full'>
      <CardHeader className='pt-2'>
        <div className='flex items-start justify-between flex-col sm:flex-row gap-2'>
          <div className='flex items-center gap-2'>
            <div>
              <CardTitle className='text-xl text-white'>
                <h3>{experience.position}</h3>
              </CardTitle>
              <CardDescription className='text-base text-white'>
                {experience.company}
              </CardDescription>
            </div>
          </div>
          <div className='text-sm text-white'>{experience.duration}</div>
        </div>
      </CardHeader>
      <CardContent className='pb-2'>
        <div className='space-y-3'>
          {experience.achievements.map((achievement, index) => (
            <p key={index} className='text-whitelist-none text-white text-sm'>
              {achievement}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
