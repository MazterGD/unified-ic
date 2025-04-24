import Link from 'next/link';
import { NavLinkWithHoverProps } from './types';

export const NavLink = ({
  href,
  label,
  isHeaderHovered,
  isMobile,
  onClick,
}: NavLinkWithHoverProps) => {
  const isRegister = label === 'Register';

  return (
    <div
      className={`${isMobile ? 'w-full py-3' : 'h-[110px] w-full'} flex items-center justify-center px-4`}
    >
      <Link
        href={href}
        className={`flex items-center font-medium transition-colors ${
          isRegister
            ? `bg-white hover:bg-[#c13a3e] text-black hover:text-white ${isMobile ? 'text-lg p-3' : 'text-xl px-5 py-2'} rounded-xl`
            : `text-white hover:text-black ${isMobile ? 'text-lg' : 'text-xl'}`
        }`}
        style={{
          textShadow: isRegister
            ? 'none'
            : isHeaderHovered
              ? 'none'
              : '0 1px 2px rgba(0,0,0,0.1)',
        }}
        onClick={onClick}
      >
        {label}
      </Link>
    </div>
  );
};
