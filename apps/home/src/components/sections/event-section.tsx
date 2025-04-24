import React from 'react';
import { Carousel } from '@/components/ui/Carousel';
import { SectionLayout } from '@/components/layout/section-layout';

export const EventsSection: React.FC = () => {
  const eventsData = [
    {
      title: 'Opening Ceremony',
      imageSrc: '/images/event-1.webp',
      description:
        'The opening ceremony is the inauguration event of this conference which will display the grand Sri Lankan culture and diversity to the entire delegation.',
    },
    {
      title: 'Global Village',
      imageSrc: '/images/event-2.webp',
      gradient: 'linear-gradient(135deg, #ff0f7b, #f89b29)',
      description:
        'Global Village, the ultimate cultural experience of more than 100 countries on one platform. An event that will provide space for each nation to celebrate their uniqueness.',
    },
    {
      title: 'YouthSpeak Forum',
      imageSrc: '/images/event-3.webp',
      gradient: 'linear-gradient(135deg, #00b09b, #96c93d)',
      description:
        'The focal point that brings together both young and entrepreneurs to form a diverse and multi generational space for inspiring conversions about global issues and effective solutions.',
    },
    {
      title: "World's Largest Lesson",
      imageSrc: '/images/event-4.webp',
      gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
      description:
        'This is a movement initiated by AIESEC to reach out for the youth to educate them about Sustainable Development Goals and engage them in our vision to develop future leaders.',
    },
    {
      title: 'Sri Lankan Night',
      imageSrc: '/images/event-5.webp',
      gradient: 'linear-gradient(135deg, #f857a6, #ff5858)',
      description:
        'Sri Lankan Night is an event organized solely on the purpose of promoting and showcasing the Sri Lankan culture and it’s cuisines to the international delegates.',
    },
    {
      title: 'Gala Night',
      imageSrc: '/images/event-6.webp',
      gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
      description:
        'Gala Night is the awards night of the event. This event will be done in collaboration with a Global Partner.',
    },
    {
      title: 'A2030',
      imageSrc: '/images/event-7.webp',
      gradient: 'linear-gradient(135deg, #0061ff, #60efff)',
      description:
        'The AIESEC A2030 Mid-Term Launch marks an exciting milestone, setting the course for our organization’s future impact.',
    },
    {
      title: 'PAI Elections',
      imageSrc: '/images/event-8.webp',
      gradient: 'linear-gradient(135deg, #ff0f7b, #f89b29)',
      description:
        'The election of the AIESEC International President is a pivotal moment where delegates, united by a vision for change, help shape AIESEC’s global future.',
    },
    {
      title: 'Partners Dinner',
      imageSrc: '/images/event-9.webp',
      gradient: 'linear-gradient(135deg, #00b09b, #96c93d)',
      description:
        'IC Partners and esteemed guests, this event is a tribute to the incredible success AIESEC achieves each year, made possible by the unwavering support of our partners.',
    },
  ];

  return (
    <SectionLayout>
      <Carousel
        title='Events'
        items={eventsData}
        backgroundColor='#23A6D4'
        accentColor='#FFFFFF'
      />
    </SectionLayout>
  );
};
