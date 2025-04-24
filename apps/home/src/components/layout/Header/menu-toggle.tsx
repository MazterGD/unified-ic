interface MenuToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
  isActive: boolean;
}

export const MenuToggle = ({ isOpen, toggleMenu }: MenuToggleProps) => {
  return (
    <div className='sm:hidden mr-4 md:mr-6'>
      <button
        onClick={toggleMenu}
        className='p-2 focus:outline-none'
        aria-label='Toggle menu'
        aria-expanded={isOpen}
      >
        <svg
          className={`w-8 h-8 text-white`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>
    </div>
  );
};
