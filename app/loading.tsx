'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

const Loading = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      {segment ? (
        <div className="p-4">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
