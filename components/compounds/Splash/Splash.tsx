'use client';

import anime from 'animejs';
import Image from 'next/image';
import React from 'react';

const Splash = ({ finishLoading }: { finishLoading: () => void }) => {
  const [mounted, setMounted] = React.useState(false);

  const handleAnimate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
      targets: '#splash-container',
      delay: 0,
      scale: 1,
      duration: 2000,
      easing: 'easeInOutExpo',
    });
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 1000);
    handleAnimate();
    return () => clearTimeout(timeout);
  });

  return (
    <div className='flex flex-col min-h-screen justify-center items-center duration-300 bg-background'>
      <div className='flex flex-col gap-4 p-8' id='splash-container'>
        <div className='flex flex-col justify-center items-center'>
          <Image
            alt='Loading cubes'
            src='/images/cubes.gif'
            width={750}
            height={750}
            className='pointer-events-none'
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;
