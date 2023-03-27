'use client';

import { FC, useEffect } from 'react';

interface IError {
  error: Error;
  reset: () => void;
}

const Error: FC<IError> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>{'Something went wrong!'}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default Error;
