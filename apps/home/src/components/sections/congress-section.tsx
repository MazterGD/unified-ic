import { StatCardProps, StatCards } from '@/components/ui/stat-card';
import { SectionLayout } from '@/components/layout/section-layout';

export const CongressSection = () => {
  const conferenceStats: StatCardProps[] = [
    { value: '5th - 13th July', description: 'Conference Dates' },
    { value: '350+', description: 'Delegates' },
    { value: '6+', description: 'Special Events' },
    { value: 'A2030', description: 'Vision Launch' },
  ];

  return (
    <SectionLayout>
      <div className='container mx-auto mt-8 sm:mt-12 px-4 sm:px-6'>
        <h2 className='text-3xl sm:text-4xl md:text-[45px] font-bold mb-6 sm:mb-8'>
          International Congress 2025
        </h2>
        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
          <div className='lg:w-1/2'>
            <p className='text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8'>
              The International Congress 2025 is more than a conference,
              it&#39;s a celebration of unity, leadership, and progress toward a
              sustainable future. AIESEC is thrilled to bring IC 2025 to Sri
              Lanka, a land of breathtaking beauty and rich cultural heritage.
            </p>
            <p className='text-base sm:text-lg md:text-xl mb-6 sm:mb-8'>
              This year, young leaders from over 100 countries will come
              together to share diverse perspectives, build meaningful
              connections, and drive impactful conversations that inspire
              change.
            </p>
          </div>
          <div className='lg:w-1/2 flex items-center'>
            <StatCards stats={conferenceStats} className='w-full' />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
