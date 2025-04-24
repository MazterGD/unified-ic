'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
type CardCategory = {
  name: string;
  href?: string;
  imageSrc?: string; // Optional background image
  imageAlt?: string;
  paddingTop: string; // Keep original padding classes for sizing
  description?: ReactNode; // Optional description text/component
  gradientFrom?: string; // Optional custom gradient colors
  gradientTo?: string;
  showRegisterButton?: boolean; // New prop to control button visibility
};

const RegisterPage: React.FC = () => {
  const categories: Record<string, CardCategory[]> = {
    left: [
      {
        name: 'IC 2025',
        paddingTop: 'pt-[22rem]',
        href: 'https://form.typeform.com/to/m9giYiJq',
        description:
          "The International Congress 2025 is more than a conference, it's a celebration of unity, leadership, and progress toward a sustainable future. AIESEC is thrilled to bring IC 2025 to Sri Lanka, a land of breathtaking beauty and rich cultural heritage.",
        showRegisterButton: true, // Show the register button only for this card
      },
      {
        name: 'Registration Booklet',
        imageSrc: '/images/reg-booklet.webp',
        href: 'https://isu.pub/BtzJkGf',
        paddingTop: 'pt-40',
      },
    ],
    middle: [
      {
        name: 'A2030',
        imageSrc: '/images/event-7.webp',
        paddingTop: 'pt-40',
      },
    ],
    middleGrid: [
      {
        name: 'Global Village',
        imageSrc: '/images/event-2.webp',
        paddingTop: 'pt-40',
      },
      {
        name: 'YouthSpeak Forum',
        imageSrc: '/images/event-3.webp',
        href: '',
        paddingTop: 'pt-40',
      },
      {
        name: 'Sri Lankan Night',
        imageSrc: '/images/event-5.webp',
        href: '',
        paddingTop: 'pt-40',
      },
      {
        name: "World's Largest Lesson",
        imageSrc: '/images/event-4-2.webp',
        href: '',
        paddingTop: 'pt-40',
      },
    ],
    right: [
      {
        name: 'Gala Night',
        imageSrc: '/images/event-6.webp',
        href: '',
        paddingTop: 'pt-[22rem]',
      },
      {
        name: 'PAI Elections',
        imageSrc: '/images/event-8.webp',
        paddingTop: 'pt-40',
      },
    ],
  };

  // Calculate overall animation index
  let animationIndex = 0;

  // Function to render a drink category card
  const renderCard = (drink: CardCategory) => {
    // Default gradient if none provided
    const gradientFrom = drink.gradientFrom || 'from-blue-600/100';
    const gradientTo = drink.gradientTo || 'to-indigo-400/90';

    // Increment animation index for each card
    const currentIndex = animationIndex++;

    return (
      <motion.div
        key={`${drink.name}-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: currentIndex * 0.08,
          },
        }}
        whileHover={{
          scale: 1.02,
          transition: {
            type: 'spring',
            stiffness: 200,
          },
        }}
        className='h-full'
      >
        <Link
          href={drink.href ? drink.href : ''}
          className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 ${drink.paddingTop} h-full`}
        >
          {/* Background - either image or gradient */}
          <div className='absolute inset-0'>
            {drink.imageSrc ? (
              <Image
                src={`${drink.imageSrc}?q=80&w=1200&auto=format&fit=crop`}
                alt={drink.imageAlt || ''}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                priority={
                  drink.name === 'Wines' ||
                  drink.name === 'Gin' ||
                  drink.name === 'Brandy'
                }
              />
            ) : (
              <div
                className={`w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
              />
            )}
          </div>

          {/* Overlay gradient for text readability */}
          <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5' />

          {/* Title - positioned exactly as in original */}
          <h3 className='z-10 text-2xl font-semibold text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>
            {drink.name}
          </h3>

          {/* Description - positioned right below the title */}
          {drink.description && (
            <div className='z-10 text-white text-sm md:text-base absolute top-14 left-0 px-4 font-light'>
              {drink.description}
            </div>
          )}

          {/* Register Now button - only shown for cards with showRegisterButton=true */}
          {drink.showRegisterButton && (
            <div className='z-10 absolute bottom-4 left-4 right-4'>
              <button
                className='cursor-pointer w-full py-2 px-4 bg-white hover:bg-blue-500 hover:text-white text-blue-400 font-bold rounded transition-colors duration-300'
                onClick={(e) => {
                  e.preventDefault(); // Prevent the Link from navigating
                  window.location.href = drink.href || '';
                }}
              >
                Register Now
              </button>
            </div>
          )}
        </Link>
      </motion.div>
    );
  };

  return (
    <>
      <div
        className='fixed inset-0 w-full h-full z-[-1]'
        style={{
          background:
            'linear-gradient(180deg, #3952d2, #4285f4 30%, #bce0f7 100%)',
          backgroundSize: 'cover',
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

      <section className='text-white sm:pt-8 overflow-x-hidden min-h-screen'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-[130px] pb-[50px]'>
          <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
              {/* Left */}
              <div className='col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col gap-4'>
                {categories.left.map((card) => renderCard(card))}
              </div>

              {/* Middle */}
              <div className='col-span-2 sm:col-span-1 md:col-span-2 flex flex-col gap-4'>
                {categories.middle.map((card) => renderCard(card))}

                <div className='grid gap-4 grid-cols-2'>
                  {categories.middleGrid.map((card) => renderCard(card))}
                </div>
              </div>

              {/* Right */}
              <div className='col-span-2 sm:col-span-1 md:col-span-1 flex flex-col gap-4'>
                {categories.right.map((card) => renderCard(card))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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

export default RegisterPage;
