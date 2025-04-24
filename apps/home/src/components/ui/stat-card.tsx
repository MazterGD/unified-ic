import React from 'react';

// Type definition for a single stat
export type StatCardProps = {
  value: string;
  description: string;
};

// Type for the stats container component
export type StatCardsProps = {
  stats: StatCardProps[];
  className?: string;
  compact?: boolean;
};

// Single stat card component
export const StatCard: React.FC<StatCardProps & { compact?: boolean }> = ({
  value,
  description,
  compact = false,
}) => {
  // Dynamic styles based on compact mode
  const valueFontSize = compact
    ? 'text-xl sm:text-2xl md:text-3xl'
    : 'text-2xl sm:text-3xl md:text-4xl';

  const descriptionFontSize = compact
    ? 'text-xs sm:text-sm'
    : 'text-sm sm:text-base';

  return (
    <div className='py-3 sm:py-4 px-3 sm:px-4 h-full flex flex-col justify-center bg-transparent border border-blue-100/30 rounded-lg'>
      <div
        className={`${valueFontSize} font-bold text-white mb-1 leading-none`}
      >
        {value}
      </div>
      <div className={`${descriptionFontSize} text-gray-100 leading-tight`}>
        {description}
      </div>
    </div>
  );
};

export const StatCards: React.FC<StatCardsProps> = ({
  stats,
  className = '',
  compact = false,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4'>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            description={stat.description}
            compact={compact}
          />
        ))}
      </div>
    </div>
  );
};
