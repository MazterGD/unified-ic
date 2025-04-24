export type NavLinkProps = {
  href: string;
  label: string;
};

export type NavLinkWithHoverProps = NavLinkProps & {
  isHeaderHovered: boolean;
  isMobile?: boolean;
  onClick?: () => void;
};

export type HeaderProps = {
  transparent?: boolean;
};
