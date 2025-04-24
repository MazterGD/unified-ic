import { CongressSection } from '@/components/sections/congress-section';
import { EventsSection } from '@/components/sections/event-section';
import { RecommendationSection } from '@/components/sections/recommendation-section';
import { AttractionSection } from '@/components/sections/attraction-section';
import { TipsSection } from '@/components/sections/tips-section';
import { SecondaryHeroSection } from '@/components/sections/hero-section/hero-section-secondary';
// import { PartnerSection } from '@/components/sections/partner-section';
import { Footer } from '@/components/layout/Footer/footer';

export const metadata = {
  title: 'Discover | IC 2025',
};

export default function HomePage() {
  return (
    <>
      <SecondaryHeroSection
        title='Get ready for #TheBiggestCelebration'
        subtitle='Join us on July 5th to 13th at Citrus Waskaduwa, Sri Lanka.'
        buttonText='Register now'
        buttonLink='register'
      />
      <CongressSection />
      <EventsSection />
      <RecommendationSection />
      <AttractionSection />
      <TipsSection />
      {/* <PartnerSection >*/}
      <Footer />
    </>
  );
}
