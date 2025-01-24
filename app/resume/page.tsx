'use client';

import { useEffect, useRef } from 'react';

export default function App() {
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;

    (async function () {
      // @ts-expect-error: must be corrected properly
      const pdfJS = await import('pdfjs-dist/build/pdf');

      pdfJS.GlobalWorkerOptions.workerSrc =
        window.location.origin + '/pdf.worker.min.mjs';

      const pdf = await pdfJS.getDocument(
        '/document/john-rommel-octaviano-software-engineer.pdf'
      ).promise;

      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 2 });
      const canvas = canvasRef.current;
      // @ts-expect-error: must be corrected properly
      const canvasContext = canvas?.getContext('2d');

      // @ts-expect-error: must be corrected properly
      canvas.height = viewport.height;
      // @ts-expect-error: must be corrected properly
      canvas.width = viewport.width;

      if (renderTaskRef.current) {
        // @ts-expect-error: must be corrected properly
        await renderTaskRef.current.promise;
      }

      const renderContext = { canvasContext, viewport };
      const renderTask = page.render(renderContext);

      renderTaskRef.current = renderTask;

      try {
        await renderTask.promise;
      } catch (error) {
        // @ts-expect-error: must be corrected properly
        if (error.name === 'RenderingCancelledException') {
          console.log('Rendering cancelled.');
        } else {
          console.error('Render error:', error);
        }
      }

      if (!isCancelled) {
        console.log('Rendering completed');
      }
    })();

    return () => {
      isCancelled = true;
      if (renderTaskRef.current) {
        // @ts-expect-error: must be corrected properly
        renderTaskRef.current.cancel();
      }
    };
  }, []);

  return (
    <main className='sm:flex sm:flex-col sm:items-center sm:justify-between min-h-screen bg-[#050505]'>
      <section className='flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 px-1 sm:px-24 py-24'>
        <div>
          <div>
            <canvas ref={canvasRef} className='pointer-events-none' />
          </div>
        </div>
      </section>
    </main>
  );
}
