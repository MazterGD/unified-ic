'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Parallax from 'parallax-js';
import type { ParallaxOptions } from 'parallax-js';

import styles from './hero-section.module.css';

interface HeroSectionProps {
  topLayer: string;
  middleLayer: string;
  lastLayer: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  topLayer,
  middleLayer,
  lastLayer,
}) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const parallaxInstanceRef = useRef<Parallax | null>(null);

  const checkMobile = (): void => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current || typeof window === 'undefined') return;

    if (parallaxInstanceRef.current) {
      parallaxInstanceRef.current.disable();
      parallaxInstanceRef.current = null;
    }

    const parallaxOptions: ParallaxOptions = {
      relativeInput: true,
      clipRelativeInput: false,
      hoverOnly: false,
      inputElement: null,
      scalarX: isMobile ? 8 : 10,
      scalarY: isMobile ? 8 : 10,
      limitX: isMobile ? 20 : 40,
      limitY: isMobile ? 20 : 40,
    };

    parallaxInstanceRef.current = new Parallax(
      sceneRef.current,
      parallaxOptions,
    );

    return () => {
      if (parallaxInstanceRef.current) {
        parallaxInstanceRef.current.disable();
      }
    };
  }, [isMobile]);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div ref={sceneRef} className={styles.scene}>
        {/* Last Layer */}
        <div data-depth={isMobile ? '0.2' : '0.1'} className={styles.layer}>
          <div className={styles.imageWrapper}>
            <Image
              src={lastLayer}
              alt='Last Background'
              fill
              sizes='100vw'
              style={{
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </div>

        {/* Middle layer */}
        <div data-depth={isMobile ? '0.4' : '0.3'} className={styles.layer}>
          <div className={styles.imageWrapper}>
            <Image
              src={middleLayer}
              alt='Middle layer'
              fill
              sizes='100vw'
              style={{
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </div>

        {/* Top Layer */}
        <div data-depth={isMobile ? '0.6' : '0.6'} className={styles.layer}>
          <div className={styles.imageWrapper}>
            <Image
              src={topLayer}
              alt='Foreground'
              fill
              sizes='100vw'
              style={{
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Content overlay */}
      {/*<div className={styles.content}>*/}
      {/*  <h1>Your Hero Title</h1>*/}
      {/*  <p>Your hero description or call to action</p>*/}
      {/*</div>*/}
    </div>
  );
};
