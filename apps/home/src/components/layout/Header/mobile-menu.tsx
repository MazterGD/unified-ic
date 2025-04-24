import { NavLink } from './nav-link';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden='true'
      />

      {/* Menu */}
      <div
        className={`fixed top-[110px] right-0 bottom-0 w-full md:w-80 bg-blue-500 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <nav className='flex flex-col items-center py-6'>
          <NavLink
            href='/register'
            label='Register'
            isHeaderHovered={true}
            isMobile={true}
            onClick={closeMenu}
          />
          {/*<NavLink*/}
          {/*  href='/partner'*/}
          {/*  label='Partner'*/}
          {/*  isHeaderHovered={true}*/}
          {/*  isMobile={true}*/}
          {/*  onClick={closeMenu}*/}
          {/*/>*/}
          <NavLink
            href='/store'
            label='Store'
            isHeaderHovered={true}
            isMobile={true}
            onClick={closeMenu}
          />
          {/*<NavLink*/}
          {/*  href='/portal'*/}
          {/*  label='Login'*/}
          {/*  isHeaderHovered={true}*/}
          {/*  isMobile={true}*/}
          {/*  onClick={closeMenu}*/}
          {/*/>*/}
        </nav>
      </div>
    </>
  );
};
