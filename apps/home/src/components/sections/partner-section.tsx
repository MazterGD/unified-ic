import { PartnerCategory, PartnersGrid } from '@/components/ui/Partner-Grid';
import { SectionLayout } from '@/components/layout/section-layout';

export const PartnerSection: React.FC = () => {
  const partnerCategories: PartnerCategory[] = [
    {
      id: 'global',
      title: 'Global',
      partners: [
        {
          id: 'pwc',
          name: 'PwC',
          url: 'https://www.pwc.com',
        },
        {
          id: 'nexans',
          name: 'Nexans',
          url: 'https://www.nexans.com',
        },
        {
          id: 'international',
          name: 'International',
          url: 'https://www.international.com',
        },
        {
          id: 'husqvarna',
          name: 'Husqvarna Group',
          url: 'https://www.husqvarnagroup.com',
        },
        {
          id: 'alfa',
          name: 'Alfa Laval',
          url: 'https://www.alfalaval.com',
        },
      ],
    },
    {
      id: 'regional',
      title: 'Regional',
      partners: [
        {
          id: 'infosys',
          name: 'Infosys',
          url: 'https://www.infosys.com',
        },
        {
          id: 'eaton',
          name: 'Eaton',
          url: 'https://www.eaton.com',
        },
        {
          id: 'dhl',
          name: 'DHL',
          url: 'https://www.dhl.com',
        },
        {
          id: 'terrawind',
          name: 'Terrawind',
          url: 'https://www.terrawind.com',
        },
        {
          id: 'schneider',
          name: 'Schneider Electric',
          url: 'https://www.se.com',
        },
      ],
    },
  ];

  return (
    <SectionLayout>
      <PartnersGrid categories={partnerCategories} />
    </SectionLayout>
  );
};
