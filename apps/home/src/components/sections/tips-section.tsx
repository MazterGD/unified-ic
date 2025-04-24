import { CardItem, InfoGrid } from '@/components/ui/Info-Grid';
import { SectionLayout } from '@/components/layout/section-layout';

export const TipsSection = () => {
  // Sample data with strict typing
  const expertTips: CardItem[] = [
    {
      id: '1',
      title: 'Best National Parks in Sri Lanka',
      description:
        'Discover the most stunning wildlife sanctuaries, home to elephants, leopards, and exotic birds, surrounded by lush greenery and diverse landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1676720372520-293c14dbf29b',
      linkUrl:
        'https://www.lonelyplanet.com/articles/best-national-parks-sri-lanka',
    },
    {
      id: '2',
      title: "Winter's Hottest Destination",
      description:
        'While Sri Lanka isn’t a winter destination, the hill country offers cool climates, misty views, and cozy getaways perfect for unwinding.',
      imageUrl: 'https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7',
      linkUrl: 'https://www.vogue.com/article/sri-lanka-south-coast-travel',
    },
    {
      id: '3',
      title: 'Things to do in Colombo',
      description:
        'Dive into the vibrant city life of Colombo, where modern attractions blend with cultural sites, shopping, and a dynamic food scene.',
      imageUrl: 'https://images.unsplash.com/photo-1740812517868-8fb72a20a090',
      linkUrl:
        'https://www.yamu.lk/highlights/7-things-to-do-at-colombo-city-center/',
    },
    {
      id: '4',
      title: 'Hiking in Sri Lanka',
      description:
        'Explore breathtaking trails through tea plantations, rainforests, and mountain peaks, offering scenic views and adventurous experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1593282227454-060e5aa052ca',
      linkUrl:
        'https://thisremotecorner.com/hiking-in-sri-lanka-guide-to-best-treks/',
    },
    {
      id: '5',
      title: "Sri Lanka's Cultural Triangle",
      description:
        'Journey through ancient cities and sacred sites, where history, art, and spirituality come together in remarkable archaeological wonders.',
      imageUrl: 'https://images.unsplash.com/photo-1582103517762-613cc237349b',
      linkUrl:
        'https://www.onthegotours.com/Sri-Lanka/Guides/Visiting-the-Cultural-Triangle',
    },
    {
      id: '6',
      title: 'Best Beaches in Sri Lanka',
      description:
        'Relax on pristine sandy shores with crystal-clear waters, swaying palms, and vibrant marine life, perfect for both relaxation and adventure.',
      imageUrl: 'https://images.unsplash.com/photo-1649923113200-732d6fefbb6a',
      linkUrl: 'https://www.lonelyplanet.com/articles/best-beaches-sri-lanka',
    },
  ];

  return (
    <SectionLayout>
      <InfoGrid items={expertTips} />
    </SectionLayout>
  );
};
