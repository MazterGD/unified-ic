import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CardItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; // Make optional to support gradient fallback
  linkUrl: string;
}

interface InfoGridProps {
  items: CardItem[];
  title?: string;
}

export const InfoGrid: React.FC<InfoGridProps> = ({
  items,
  title = 'Recommendations',
}) => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-4xl sm:text-5xl font-bold mb-8 sm:mb-12'>{title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.linkUrl}
            className='flex flex-col rounded-lg overflow-hidden group transition-colors'
          >
            <div className='relative h-[210px] w-full overflow-hidden rounded-2xl'>
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover w-full transition-transform duration-300 group-hover:scale-105'
                />
              ) : (
                <div className='w-full h-full bg-gradient-to-br from-blue-500 to-purple-600'></div>
              )}
            </div>

            <div className='py-4 px-0 flex flex-col'>
              <h3 className='text-xl sm:text-2xl font-bold mb-2'>
                {item.title}
              </h3>
              <p className='text-base mb-2.5'>{item.description}</p>
              <div className='font-semibold text-base text-black group-hover:text-gray-700 flex items-center transition-colors'>
                Learn more
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 ml-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
