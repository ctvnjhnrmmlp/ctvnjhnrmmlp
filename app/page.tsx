'use client';

import ExperienceCarousel from '@/components/compounds/Carousel/ExperienceCarousel';
import GithubRepoCarousel from '@/components/compounds/Carousel/GithubRepoCarousel';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getTotalWorkingExperience } from '@/libraries/utils';
import { Repositories } from '@/services/github/repositories';
import ACCOUNTS from '@/sources/accounts';
import PROFESSIONS from '@/sources/professions';
import TECHNOLOGIES from '@/sources/technologies';
import WEBLOGS from '@/sources/weblogs';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { FiPaperclip } from 'react-icons/fi';

export default function Home() {
  const { data: repositoriesServer } = useQuery({
    queryKey: ['getUserRepository'],
    queryFn: async () => await Repositories.readRepositories(),
  });

  return (
    <main className='sm:flex sm:flex-col sm:items-center sm:justify-between min-h-screen bg-black'>
      <section className='container max-w-screen mx-auto flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 px-1 sm:px-24 py-24'>
        <div>
          <Card className='backdrop-blur-sm bg-white/5 border-white/20 border-1 rounded-3xl w-full py-0.5 sm:py-2 md:py-4'>
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-center leading-none text-white'>
                {getTotalWorkingExperience()}+ Years Experience
              </h1>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div>
          <Card className='bg-[url(/images/self-abstract.webp)] bg-no-repeat bg-cover bg-center border-none rounded-3xl'>
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
            <CardContent className='py-16 sm:py-32'>
              <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase text-center leading-none tracking-tighter [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)] text-white'>
                John Rommel Octaviano
              </h1>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div className='flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-between'>
          {ACCOUNTS.map((account) => (
            <Link key={account.name} href={account.url} target='_blank'>
              <button className='p-3 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-lg sm:rounded-3xl text-center backdrop-blur-sm bg-white/5 border-white/20 border-1 text-white cursor-pointer'>
                <account.icon />
              </button>
            </Link>
          ))}
          <button className='py-2 px-6 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center sm:flex-grow backdrop-blur-sm bg-white/5 border-white/20 border-1 text-white'>
            <div className='flex justify-center items-center'>
              <Link
                href='/resume'
                className='flex space-x-2 lg:space-x-4 items-center'
              >
                <span>
                  <FiPaperclip />
                </span>
                <h4 className='block md:hidden lg:block'>Resume</h4>
              </Link>
            </div>
          </button>
        </div>
        <div>
          <ExperienceCarousel />
        </div>
        <div className='flex flex-col xl:flex-row flex-wrap gap-6 md:gap-4 lg:gap-6'>
          {PROFESSIONS.map((profession) => (
            <Card
              key={profession.name}
              className='rounded-3xl flex-grow shadow-none backdrop-blur-sm bg-white/5 border-white/20 border-1'
            >
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent className='py-8 md:py-16 lg:py-18 xl:py-20 flex flex-col space-y-4 xl:px-16'>
                <h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-center leading-none tracking-tight text-white'>
                  {profession.name}
                </h3>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
        <div>
          {repositoriesServer && (
            <GithubRepoCarousel repositories={repositoriesServer} />
          )}
        </div>
        <div className='flex flex-col md:flex-row flex-wrap sm:flex-nowrap md:flex-wrap gap-6 md:gap-4 lg:gap-6'>
          <Card className='rounded-3xl backdrop-blur-sm bg-white/5 border-white/20 border-1 shadow-none'>
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
            <CardContent className='py-4 flex flex-col space-y-4'>
              <div className='flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 px-2 md:px-6'>
                {TECHNOLOGIES.map((technology) => (
                  <Link
                    key={technology.name}
                    href={technology.url}
                    target='_blank'
                  >
                    <div className='p-4 rounded-xl backdrop-blur-sm bg-white/6 border-white/20 border-1'>
                      <p className='text-4xl md:text-5xl lg:text-6xl text-white'>
                        <technology.icon />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div className='flex flex-wrap space-x-2 md:space-x-6'>
          {WEBLOGS.map((weblog) => (
            <button
              key={weblog.url}
              className='p-3 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center backdrop-blur-sm bg-white/5 border-white/20 border-1 text-white'
            >
              <weblog.icon />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
