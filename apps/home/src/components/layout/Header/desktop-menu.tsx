import { NavLink } from './nav-link';

interface DesktopNavProps {
  isActive: boolean;
}

export const DesktopNav = ({ isActive }: DesktopNavProps) => {
  return (
    <div className='hidden sm:flex h-[110px] items-center mr-11'>
      <NavLink href='/register' label='Register' isHeaderHovered={isActive} />
      {/*<NavLink href='/partner' label='Partner' isHeaderHovered={isActive} />*/}
      <NavLink href='/store' label='Store' isHeaderHovered={isActive} />
      {/*<NavLink href='/portal' label='Login' isHeaderHovered={isActive} />*/}
    </div>
  );
};
