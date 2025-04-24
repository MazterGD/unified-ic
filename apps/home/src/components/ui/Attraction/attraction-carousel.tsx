import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface AttractionItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

interface AttractionCarouselProps {
  items: AttractionItem[];
  autoPlayInterval?: number;
}

export const AttractionCarousel: React.FC<AttractionCarouselProps> = ({
  items,
  autoPlayInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const goToNext = useCallback((): void => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goToPrev = useCallback((): void => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [goToNext, autoPlayInterval, isPaused]);

  // Animation variants for smooth transitions
  const slideVariants = {
    enter: () => ({
      opacity: 0,
    }),
    center: {
      opacity: 1,
    },
    exit: () => ({
      opacity: 0,
    }),
  };

  const CardContent = () => (
    <>
      {/* Subtitle with exact specifications */}
      <p className='text-[16px] sm:text-[18px] mb-[6px] sm:mb-[8px] font-medium'>
        Top attractions
      </p>

      {/* Title with exact specifications */}
      <h2 className='text-[24px] sm:text-[32px] md:text-[44px] font-bold mb-[12px] sm:mb-[21px] leading-tight'>
        {items[activeIndex].title}
      </h2>

      {/* Description with exact specifications */}
      <p className='text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed line-clamp-3 sm:line-clamp-none'>
        {items[activeIndex].description}
      </p>

      {/* Arrow indicator */}
      {/*<div className='mt-4 sm:mt-6'>*/}
      {/*  <svg*/}
      {/*    width='24'*/}
      {/*    height='24'*/}
      {/*    viewBox='0 0 24 24'*/}
      {/*    fill='none'*/}
      {/*    xmlns='http://www.w3.org/2000/svg'*/}
      {/*  >*/}
      {/*    <path*/}
      {/*      d='M14 5L21 12M21 12L14 19M21 12H3'*/}
      {/*      stroke='currentColor'*/}
      {/*      strokeWidth='2'*/}
      {/*      strokeLinecap='round'*/}
      {/*      strokeLinejoin='round'*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*</div>*/}
    </>
  );

  return (
    <div
      className='relative w-full mx-auto px-0 sm:px-4 md:px-8'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fixed container for mobile with min-height instead of aspect ratio */}
      <div className='w-full relative min-h-[650px] h-auto sm:aspect-[3/2] md:aspect-[1448/941] sm:h-auto rounded-none sm:rounded-3xl overflow-hidden'>
        {/* Gradient background that stays fixed */}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800'></div>

        {/* Content that changes within the fixed container */}
        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              opacity: { duration: 0.4 },
            }}
            className='absolute inset-0 w-full h-full'
          >
            {/* Image that changes */}
            {items[activeIndex].imageUrl ? (
              <div className='absolute inset-0'>
                <Image
                  src={items[activeIndex].imageUrl}
                  alt={items[activeIndex].title}
                  fill
                  sizes='100vw'
                  priority={activeIndex === 0}
                  className='object-cover'
                  onError={(e) => {
                    // If image fails to load, remove it to show the gradient
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ) : null}

            {/* Content box with exact dimensions, positioning and rounded corners */}
            {items[activeIndex].link ? (
              <Link
                href={items[activeIndex].link}
                className='absolute left-8 sm:left-[56px] bottom-[84px] sm:bottom-[56px]
                           max-w-full sm:max-w-[474.734px] w-[calc(100%-64px)] sm:w-[calc(100%-112px)] md:w-[474.734px]
                           bg-[#56C7E9] bg-opacity-80 backdrop-blur-sm text-white p-8 sm:p-6 md:p-[56px]
                           rounded-3xl block transition-transform duration-300 hover:scale-[1.02]
                           cursor-pointer'
              >
                <CardContent />
              </Link>
            ) : (
              <div
                className='absolute left-8 sm:left-[56px] bottom-[84px] sm:bottom-[56px]
                           max-w-full sm:max-w-[474.734px] w-[calc(100%-64px)] sm:w-[calc(100%-112px)] md:w-[474.734px]
                           bg-[#56C7E9] bg-opacity-80 backdrop-blur-sm text-white p-8 sm:p-6 md:p-[56px]
                           rounded-3xl'
              >
                <CardContent />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons - adjusted for mobile */}
        <div className='absolute bottom-0 right-0 flex'>
          <button
            onClick={goToPrev}
            className='bg-[#56C7E9] hover:bg-[#146582] transition-colors duration-300 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] flex items-center justify-center text-white'
            aria-label='Previous attraction'
          >
            <ChevronLeft size={24} className='sm:hidden' />
            <ChevronLeft size={32} className='hidden sm:block' />
          </button>
          <button
            onClick={goToNext}
            className='bg-[#56C7E9] hover:bg-[#146582] transition-colors duration-300 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] flex items-center justify-center text-white'
            aria-label='Next attraction'
          >
            <ChevronRight size={24} className='sm:hidden' />
            <ChevronRight size={32} className='hidden sm:block' />
          </button>
        </div>
      </div>
    </div>
  );
};
