'use client';

import React from 'react';
import { SectionLayout } from '@/components/layout/section-layout';
import { AttractionCarousel } from '@/components/ui/Attraction/attraction-carousel';

interface Attraction {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export const AttractionSection: React.FC = () => {
  const attractions: Attraction[] = [
    {
      id: 'sigiriya',
      title: 'Sigiriya',
      imageUrl: '/images/att-5.webp',
      description:
        'An iconic rock fortress rising 200 meters above the surrounding jungle, Sigiriya boasts breathtaking views, ancient frescoes, and landscaped gardens. Climb the Lion Rock to explore the remains of King Kashyapa’s palace and marvel at the ingenuity of this UNESCO World Heritage site.',
      link: '',
    },
    {
      id: 'temple-of-tooth',
      title: 'Temple of Tooth',
      imageUrl: '/images/att-1.webp',
      description:
        'Located in the heart of Kandy, the Temple of the Tooth is one of Buddhism’s most sacred sites. Housing a revered tooth relic of Lord Buddha, this magnificent temple complex offers stunning architecture, cultural rituals, and tranquil surroundings by Kandy Lake.',
      link: '',
    },
    {
      id: 'polonnaruwa-city',
      title: 'Polonnaruwa Ancient City',
      imageUrl: '/images/att-2.webp',
      description:
        'Step back in time at Polonnaruwa, a sprawling ancient city filled with well-preserved ruins of palaces, temples, and statues. A UNESCO World Heritage site, this historic treasure offers a glimpse into Sri Lanka’s golden age of art, culture, and architecture.',
      link: '',
    },
    {
      id: 'nine-arches',
      title: 'Nine Arches Bridge',
      imageUrl: '/images/att-3.webp',
      description:
        'A scenic marvel nestled in the lush hills of Ella, the Nine Arches Bridge is a testament to colonial-era engineering. Surrounded by tea plantations and dense greenery, this picturesque railway bridge offers breathtaking views and photo opportunities, especially when trains pass by.',
      link: '',
    },
    {
      id: 'galle-fort',
      title: 'Galle Dutch Fort',
      imageUrl: '/images/att-4.webp',
      description:
        'A charming coastal fortress blending European architecture with South Asian culture, the Galle Dutch Fort is a UNESCO World Heritage site. Its cobblestone streets, colonial buildings, boutique shops, and ocean views make it a must-visit destination for history and culture enthusiasts.',
      link: '',
    },
  ];

  return (
    <>
      <SectionLayout>
        <div className='w-full max-w-screen-2xl mx-auto'>
          <AttractionCarousel items={attractions} />
        </div>
      </SectionLayout>
    </>
  );
};
