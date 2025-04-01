'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

function GlobalError() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center items-center bg-black'>
      <section className='flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 justify-center items-center'>
        <main className='flex min-h-screen flex-col items-center justify-center items-center bg-black'>
          <section className='flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 justify-center items-center'>
            <Card className='backdrop-blur-sm bg-white/5 border-white/20 border-1 rounded-3xl w-full py-0.5 sm:py-2 md:py-4'>
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col space-y-8 py-16 sm:py-24 px-24'>
                <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase text-center leading-none tracking-tight  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)] text-white'>
                  Error
                </h1>
                <button className='py-2 px-6 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center sm:flex-grow text-background backdrop-blur-sm bg-white/6 border-white/20 border-1'>
                  <div className='flex justify-center items-center'>
                    <Link
                      href='/'
                      className='flex space-x-2 lg:space-x-4 items-center'
                    >
                      <h4>Back Home</h4>
                    </Link>
                  </div>
                </button>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </section>
        </main>
      </section>
    </main>
  );
}

export default GlobalError;
