'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const StorePage = () => {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger text fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 300); // Small delay for better effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className='relative w-full h-screen overflow-hidden flex flex-col items-center justify-center'
      style={{
        background:
          'linear-gradient(180deg, #3952d2, #4285f4 30%, #bce0f7 95%)',
      }}
    >
      <div
        className='absolute inset-0 w-[120%] h-[120%] left-[-10%] top-[-10%]'
        style={{
          background:
            'linear-gradient(180deg, #3952d2, #4285f4 30%, #bce0f7 95%)',
        }}
      />

      <Cloud
        src='/images/cloud-left.webp'
        className='left-0 top-[15%] w-[38%] md:w-[30%]'
        alt='Cloud left'
        isLeft={true}
      />

      <Cloud
        src='/images/cloud-right.webp'
        className='right-0 bottom-[5%] w-[38%] md:w-[30%]'
        alt='Cloud right'
        isLeft={false}
      />

      <div
        className='relative z-10 text-center px-6 transition-all duration-1000 ease-out'
        style={{
          opacity: isTextVisible ? 1 : 0,
          transform: `translateY(${isTextVisible ? '0' : '20px'})`,
        }}
      >
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-medium mt-6 mb-8'>
          We will be opening soon. Stay tuned! 🛍️
        </p>
      </div>
    </div>
  );
};

interface CloudProps {
  src: string;
  className: string;
  alt: string;
  isLeft: boolean;
}

const Cloud: React.FC<CloudProps> = ({ src, className, alt, isLeft }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute pointer-events-none transition-all duration-1000 ease-out ${className}`}
      style={{
        transform: `translate(${!isLoaded ? (isLeft ? '-100%' : '100%') : '0'}, 0)`,
        opacity: isLoaded ? 1 : 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={150}
        className='w-full h-auto'
      />
    </div>
  );
};

export default StorePage;
