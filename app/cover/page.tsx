'use client';

export default function Page() {
  return (
    <main className='flex items-center justify-center min-h-screen bg-black'>
      <section className='w-full h-screen'>
        <iframe
          src='/documents/john-rommel-octaviano-software-engineer-cover-letter.pdf'
          className='w-full h-full'
        ></iframe>
      </section>
    </main>
  );
}
