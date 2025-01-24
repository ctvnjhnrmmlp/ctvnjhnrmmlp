'use client';

import ACCOUNTS from '@/sources/accounts';
import TECHNOLOGIES from '@/sources/technologies';
import WEBLOGS from '@/sources/weblogs';
import getTotalWorkingExperience from '@/utilities/getTotalWorkingExperience';
import { Card, CardBody, Chip } from '@nextui-org/react';
import Link from 'next/link';
import { FiPaperclip } from 'react-icons/fi';

import EXPRIENCES from '@/sources/experiences';
import PROFESSIONS from '@/sources/professions';
import { GoDotFill } from 'react-icons/go';
import { RiSparkling2Fill } from 'react-icons/ri';

export default function Home() {
  return (
    <main className='sm:flex sm:flex-col sm:items-center sm:justify-between min-h-screen bg-[#050505]'>
      <section className='flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 px-1 sm:px-24 py-24'>
        <div className='px-2 sm:px-0'>
          <Card
            classNames={{
              base: 'backdrop-blur-sm bg-white/5 border-white/20 border-1 rounded-3xl shadow-none',
              body: 'py-6 sm:py-8',
            }}
          >
            <CardBody>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-center leading-none'>
                {getTotalWorkingExperience()}+ Year Experience
              </h1>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card
            classNames={{
              base: 'rounded-3xl bg-self-abstract bg-no-repeat bg-cover bg-center shadow-none',
              body: 'py-16 sm:py-32 outline px-0',
            }}
          >
            <CardBody>
              <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase text-center leading-none tracking-tighter [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]'>
                John Rommel Octaviano
              </h1>
            </CardBody>
          </Card>
        </div>
        <div className='flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-between'>
          {ACCOUNTS.map((account) => (
            <button
              key={account.name}
              className='p-3 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center backdrop-blur-sm bg-white/5 border-white/20 border-1 '
            >
              <Link href={account.url} target='_blank'>
                <account.icon />
              </Link>
            </button>
          ))}
          <button className='py-2 px-6 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center sm:flex-grow backdrop-blur-sm bg-white/5 border-white/20 border-1 '>
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
        <div className='grid xl:grid-cols-2 gap-6 md:gap-4 lg:gap-6'>
          {EXPRIENCES.map((experience) => (
            <Card
              key={experience.company}
              classNames={{
                base: 'backdrop-blur-sm bg-white/5 border-white/20 border-1 rounded-3xl shadow-none overflow-hidden',
                body: 'py-12 sm:py-20 px-12 flex items-center flex-col space-y-4 outline outline-white',
              }}
            >
              <CardBody>
                <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-center leading-none tracking-tight'>
                  {experience.position}
                </h2>
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-none font-extralight text-balance'>
                  {experience.company}
                </p>
                <Chip
                  variant='bordered'
                  size='lg'
                  radius='md'
                  className='text-xs sm:text-sm md:text-lg border-1 p-2 sm:px-4 sm:py-5 font-extralight leading-none block flex items-center justify-center backdrop-blur-sm bg-white/6'
                  startContent={
                    <p className='p-1'>
                      {experience.current && <RiSparkling2Fill />}
                      {!experience.current && <GoDotFill />}
                    </p>
                  }
                >
                  {experience.current && (
                    <span className='block leading-none'>Current</span>
                  )}
                  {!experience.current && (
                    <span className='block leading-none'>Former</span>
                  )}
                </Chip>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className='flex flex-col xl:flex-row flex-wrap gap-6 md:gap-4 lg:gap-6'>
          {PROFESSIONS.map((profession) => (
            <Card
              key={profession.name}
              classNames={{
                base: `rounded-3xl flex-grow shadow-none backdrop-blur-sm bg-white/5 border-white/20 border-1`,
                body: 'py-20 sm:py-24 flex flex-col space-y-4',
              }}
            >
              <CardBody>
                <h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-center leading-none tracking-tight'>
                  {profession.name}
                </h3>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className='flex flex-col md:flex-row flex-wrap sm:flex-nowrap md:flex-wrap gap-6 md:gap-4 lg:gap-6'>
          <Card
            classNames={{
              base: `rounded-3xl backdrop-blur-sm bg-white/5 border-white/20 border-1 shadow-none`,
              body: 'py-12 flex flex-col space-y-4',
            }}
          >
            <CardBody>
              <div className='flex flex-wrap justify-center gap-4 px-2 md:px-6'>
                {TECHNOLOGIES.map((technology) => (
                  <Link
                    key={technology.name}
                    href={technology.url}
                    target='_blank'
                  >
                    <div className='p-4 rounded-xl backdrop-blur-sm bg-white/6 border-white/20 border-1'>
                      <p className='text-4xl md:text-5xl lg:text-6xl'>
                        <technology.icon />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
        <div className='flex flex-wrap justify-center space-x-2 md:space-x-6'>
          {WEBLOGS.map((weblog) => (
            <button
              key={weblog.url}
              className='p-3 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center backdrop-blur-sm bg-white/5 border-white/20 border-1'
            >
              <weblog.icon />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
