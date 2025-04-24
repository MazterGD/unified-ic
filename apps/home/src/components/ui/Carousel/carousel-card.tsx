'use client';

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { CardProps } from './types';
import { getDefaultGradient } from './utils';

type CarouselCardProps = {
  item: CardProps;
  index: number;
  isPartial?: boolean;
  isFlipped: boolean;
  isMobile: boolean;
  toggleCardFlip: (index: number, e: React.MouseEvent) => void;
  hasImageLoadError: boolean;
};

export const CarouselCard: React.FC<CarouselCardProps> = ({
  item,
  index,
  isPartial = false,
  isFlipped,
  isMobile,
  toggleCardFlip,
  hasImageLoadError,
}) => {
  const useGradient = hasImageLoadError || !item.imageSrc;
  const gradient = item.gradient || getDefaultGradient(index);

  // Mobile: Fade transition
  if (isMobile) {
    return (
      <div
        className={`rounded-3xl ${isPartial ? 'opacity-40' : 'opacity-100'} 
        relative h-full cursor-pointer overflow-hidden`}
        onClick={(e) => !isPartial && toggleCardFlip(index, e)}
      >
        <div className='relative w-full aspect-square'>
          {/* Front content - fades out when active */}
          <div
            className='absolute inset-0 w-full h-full rounded-3xl transition-opacity duration-300'
            style={{
              opacity: isFlipped ? 0 : 1,
              background: useGradient ? gradient : undefined,
              zIndex: isFlipped ? 1 : 2,
            }}
          >
            {!useGradient && (
              <Image
                src={item.imageSrc!}
                alt={item.title}
                fill
                className='object-cover'
                priority={index < 3}
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
            <div className='absolute inset-0 flex flex-col justify-end'>
              <div className='p-6'>
                <h3 className='text-white text-3xl font-bold mb-1'>
                  {item.title}
                </h3>
                <p className='text-white/80 text-sm'>Learn more →</p>
              </div>
            </div>
          </div>

          {/* Back content - fades in when active */}
          <div
            className='absolute inset-0 w-full h-full rounded-3xl transition-opacity duration-300 overflow-y-auto'
            style={{
              opacity: isFlipped ? 1 : 0,
              background: gradient,
              zIndex: isFlipped ? 2 : 1,
            }}
          >
            {/* Close button */}
            <button
              className='absolute top-4 right-4 z-20 p-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors'
              onClick={(e) => {
                e.stopPropagation();
                toggleCardFlip(index, e);
              }}
              aria-label='Close'
              style={{ display: isFlipped ? 'block' : 'none' }}
            >
              <X size={24} color='white' />
            </button>

            <div className='p-6'>
              <h3 className='text-white text-2xl font-bold mb-4'>
                {item.title}
              </h3>
              <div className='text-white'>
                {item.description || 'No description available for this card.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop: 3D flip effect
  return (
    <div
      className={`rounded-3xl ${isPartial ? 'opacity-40' : 'opacity-100'} 
      relative perspective-1000 h-full cursor-pointer`}
      onClick={(e) => !isPartial && toggleCardFlip(index, e)}
    >
      <div
        className={`relative w-full aspect-square transition-transform duration-500 transform-style-preserve-3d
        ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of card */}
        <div
          className='absolute w-full h-full backface-hidden overflow-hidden rounded-3xl'
          style={useGradient ? { background: gradient } : {}}
        >
          {!useGradient && (
            <Image
              src={item.imageSrc!}
              alt={item.title}
              fill
              className='object-cover'
              priority={index < 3}
            />
          )}
          <div className='absolute inset-0 flex flex-col justify-end'>
            <div className='p-6'>
              <h3 className='text-white text-3xl font-bold mb-1'>
                {item.title}
              </h3>
              <p className='text-white/80 text-sm'>Learn more →</p>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className='absolute w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden'
          style={{ background: gradient }}
        >
          {/* Close button for the flipped card */}
          <button
            className='absolute top-4 right-4 z-20 p-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors'
            onClick={(e) => {
              e.stopPropagation();
              toggleCardFlip(index, e);
            }}
            aria-label='Close'
          >
            <X size={24} color='white' />
          </button>

          <div className='absolute inset-0 p-6 overflow-y-auto flex flex-col'>
            <h3 className='text-white text-2xl font-bold mb-4'>{item.title}</h3>
            <div className='text-white flex-grow overflow-y-auto'>
              {item.description || 'No description available for this card.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
