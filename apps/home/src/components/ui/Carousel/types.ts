export type CardProps = {
  title: string;
  imageSrc?: string;
  gradient?: string;
  description?: string;
};

export type CarouselProps = {
  title: string;
  items: CardProps[];
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  cardsPerPage?: number;
};
