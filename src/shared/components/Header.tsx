import {ReactNode} from 'react';

export const Header = ({children}: {children: ReactNode}): JSX.Element => {
  return (
    <div className='bg-white w-100 p-4 position-fixed border-bottom z-index-1 d-flex align-items-center justify-content-center'>
      {children}
    </div>
  );
};
