import { Grid } from '@/components/ui/Grid';
import { SectionLayout } from '@/components/layout/section-layout';

const recommendationItems = [
  {
    id: '0',
    title: 'Discover Sri Lanka',
    size: 'small',
    isTitle: true,
  },
  {
    id: '1',
    title: 'Iconic Kandy-Ella Train',
    image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9',
    size: 'medium',
  },
  {
    id: '2',
    title: 'Yala National Park',
    image: 'https://images.unsplash.com/photo-1566708627877-859df13ae63e',
    size: 'medium',
  },
  {
    id: '3',
    title: 'Surfing in Arugambay',
    image: 'https://images.unsplash.com/photo-1579862119081-69d8ebc2e748',
    size: 'small',
  },
  {
    id: '4',
    title: 'Mirissa Whale Watching',
    image: '/images/recom-1.webp',
    size: 'small',
  },
  {
    id: '5',
    title: 'Explore the Cultural Triangle',
    image: 'https://images.unsplash.com/photo-1651509596589-a6bfbc855347',
    size: 'medium',
  },
  {
    id: '6',
    title: "Colombo's Vibrant Life",
    image: 'https://images.unsplash.com/photo-1653151106233-8e928c21bc1a',
    size: 'medium',
  },
  {
    id: '7',
    title: 'Nuwara Eliya Ceylon Tea',
    image: 'https://images.unsplash.com/photo-1507499155415-696f83e0e828',
    size: 'small',
    url: '#',
  },
  {
    id: '8',
    title: 'Jaffna Peninsula',
    image: 'https://images.unsplash.com/photo-1591410448119-1b49cbb3b83e',
    size: 'small',
    url: '#',
  },
];

export const RecommendationSection = () => {
  return (
    <SectionLayout>
      <Grid items={recommendationItems} />
    </SectionLayout>
  );
};
