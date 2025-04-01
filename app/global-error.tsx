'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

function GlobalError() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center items-center bg-[#181818]'>
      <section className='flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 justify-center items-center'>
        {/* <Card
          classNames={{
            base: 'rounded-3xl bg-background shadow-none',
            body: 'flex space-y-8 py-16 sm:py-24 px-12',
          }}
        >
          <CardBody>
            <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase text-center leading-none tracking-tight  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]'>
              Error
            </h1>
            <button className='py-2 px-6 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center sm:flex-grow bg-foreground text-background'>
              <div className='flex justify-center items-center'>
                <Link
                  href='/'
                  className='flex space-x-2 lg:space-x-4 items-center'
                >
                  <h4>Back Home</h4>
                </Link>
              </div>
            </button>
          </CardBody>
        </Card> */}
      </section>
    </main>
  );
}

export default GlobalError;
