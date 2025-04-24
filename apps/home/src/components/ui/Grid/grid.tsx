'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define strictly typed interfaces
interface GridItem {
  id: string;
  title: string;
  size: 'large' | 'medium' | 'small' | string;
  image?: string;
  url?: string;
  isTitle?: boolean; // New property to identify title-only cards
}

interface GridProps {
  title?: string; // Make the main title optional
  items: GridItem[];
}

export const Grid: React.FC<GridProps> = ({ title, items }) => {
  return (
    <div className='w-full'>
      <div className='container mx-auto px-4 sm:px-6'>
        {/* Optional Main Heading */}
        {title && (
          <h2 className='text-4xl sm:text-5xl font-bold mb-12'>{title}</h2>
        )}

        {/* Custom Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {items.map((item) => {
            // Define custom layout classes based on item size
            let gridClasses = '';

            // Map sizes to column spans
            if (item.size === 'large') {
              gridClasses = 'md:col-span-3';
            } else if (item.size === 'medium') {
              gridClasses = 'md:col-span-2';
            } else if (item.size === 'small') {
              gridClasses = 'md:col-span-1';
            }

            // Special handling for title-only cards
            if (item.isTitle) {
              return (
                <div
                  key={item.id}
                  className={`col-span-1 ${gridClasses} flex items-start pt-2`}
                >
                  <h2 className='text-4xl sm:text-5xl font-bold'>
                    {item.title}
                  </h2>
                </div>
              );
            }

            // Regular card rendering
            return (
              <Link
                href={item.url || '#'}
                key={item.id}
                className={`col-span-1 ${gridClasses} relative overflow-hidden rounded-3xl h-96 group`}
              >
                {/* Image container with hover effect - moved above the overlay */}
                <div className='relative h-full w-full overflow-hidden'>
                  {item.image ? (
                    <div className='h-full w-full transform transition-transform duration-700 group-hover:scale-105'>
                      <Image
                        src={item.image}
                        fill
                        alt={item.title}
                        className='object-cover'
                        sizes={
                          item.size === 'large'
                            ? '100vw'
                            : item.size === 'medium'
                              ? '(max-width: 768px) 100vw, 66vw'
                              : '(max-width: 768px) 100vw, 33vw'
                        }
                      />
                    </div>
                  ) : (
                    <div className='h-full w-full bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-700 group-hover:scale-110' />
                  )}
                </div>

                {/* Overlay gradient - coming after the image but still looks like it's on top due to z-index */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none' />

                {/* Title overlay */}
                <div className='absolute bottom-0 left-0 p-6 z-20 w-full'>
                  <h3 className='font-bold text-white text-3xl'>
                    {item.title}
                  </h3>
                  {/*<p className='text-white/80 text-sm'>Learn more →</p>*/}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
