import React from 'react';

export const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='text-white sm:pt-8 pb-12 sm:pb-20 overflow-x-hidden'>
      {children}
    </section>
  );
};
