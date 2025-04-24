'use client';

import { useEffect, useState } from 'react';
import { HeaderProps } from './types';
import { Logo } from './logo';
import { DesktopNav } from './desktop-menu';
import { MenuToggle } from './menu-toggle';
import { MobileMenu } from './mobile-menu';

export const Header = ({ transparent = true }: HeaderProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isWindowDefined: boolean = typeof window !== 'undefined';

  // Handle window resize
  useEffect(() => {
    if (!isWindowDefined) return;

    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isWindowDefined]);

  // Handle scroll
  useEffect(() => {
    if (!isWindowDefined) return;

    const handleScroll = (): void => {
      const scrollThreshold = 20;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWindowDefined]);

  // Body overflow control
  useEffect(() => {
    if (!isWindowDefined) return;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isWindowDefined]);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const headerBackground = (): string => {
    if (isMenuOpen) {
      return 'bg-blue-500 bg-opacity-95 backdrop-blur-md';
    } else if (isScrolled) {
      // True glassy effect when scrolling
      return 'bg-black/10 backdrop-blur-lg border-white/10 shadow-md';
    } else if (transparent) {
      return 'bg-transparent';
    } else {
      return 'bg-white';
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full h-[110px] flex items-center justify-between transition-all duration-300 ${headerBackground()} z-40`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Logo isActive={isHovered || isMenuOpen || isScrolled} />
        <DesktopNav isActive={isHovered || isScrolled} />
        <MenuToggle
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isActive={isHovered || isMenuOpen || isScrolled}
        />
      </header>

      <MobileMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};
