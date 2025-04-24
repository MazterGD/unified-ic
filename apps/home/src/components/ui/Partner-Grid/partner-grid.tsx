import React from 'react';
import Image from 'next/image';

interface Partner {
  id: string;
  name: string;
  logo?: string;
  url: string;
}

export interface PartnerCategory {
  id: string;
  title: string;
  partners: Partner[];
}

interface PartnersGridProps {
  categories: PartnerCategory[];
}

export const PartnersGrid: React.FC<PartnersGridProps> = ({ categories }) => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-4xl sm:text-5xl font-bold mb-8 sm:mb-12'>
        Our Partners
      </h2>

      {categories.map((category) => (
        <div key={category.id} className='mb-16'>
          <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
            <div className='lg:col-span-1'>
              <h3 className='text-xl font-semibold text-white'>
                {category.title}
              </h3>
            </div>
            <div className='lg:col-span-5'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
                {category.partners.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.url}
                    className={`flex items-center justify-center rounded-2xl p-4 h-24 transition-transform duration-300 hover:scale-105 ${
                      partner.logo ? 'bg-gray-100' : 'bg-white'
                    }`}
                    title={partner.name}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {partner.logo ? (
                      <div className='relative w-full h-full'>
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw'
                          style={{ objectFit: 'contain' }}
                          priority={false}
                        />
                      </div>
                    ) : (
                      <span className='text-blue-400 text-lg font-medium text-center'>
                        {partner.name}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
