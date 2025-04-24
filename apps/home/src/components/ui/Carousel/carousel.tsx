'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselProps } from './types';
import { CarouselCard } from './carousel-card';
import './carousel.styles.css';

export const Carousel: React.FC<CarouselProps> = ({
  title,
  items,
  textColor = 'white',
  accentColor = 'white',
  cardsPerPage = 3,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [failedImages] = useState<Record<number, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const totalPages = Math.ceil(items.length / cardsPerPage);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is standard MD breakpoint
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const desktopNavigate = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setFlippedCards({});
    setIsAnimating(true);

    if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const mobileNavigate = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setFlippedCards({});
    setIsAnimating(true);

    const activeIndex = currentPage;

    if (direction === 'prev' && activeIndex > 0) {
      setCurrentPage(activeIndex - 1);
    } else if (direction === 'next' && activeIndex < items.length - 1) {
      setCurrentPage(activeIndex + 1);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (isMobile) {
      mobileNavigate(direction);
    } else {
      desktopNavigate(direction);
    }
  };

  const toggleCardFlip = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();

    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const closeAllFlippedCards = () => {
    setFlippedCards({});
  };

  const canGoBack = currentPage > 0;
  const canGoForward = isMobile
    ? currentPage < items.length - 1
    : currentPage < totalPages - 1;

  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return items.slice(startIndex, startIndex + cardsPerPage);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        carouselRef.current &&
        !carouselRef.current.contains(e.target as Node)
      ) {
        closeAllFlippedCards();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{ color: textColor }}
      className='overflow-x-hidden'
      ref={carouselRef}
    >
      <div className='container mx-auto px-4 sm:px-6 overflow-visible'>
        {/* Header with title and controls */}
        <div className='flex flex-wrap items-center justify-between mb-4 md:mb-12'>
          <div className='mb-4 md:mb-0'>
            <h2 className='text-4xl sm:text-5xl font-bold'>{title}</h2>
          </div>

          <div className='flex gap-2'>
            <button
              onClick={() => navigate('prev')}
              disabled={!canGoBack || isAnimating}
              className={`flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-300
                ${
                  canGoBack && !isAnimating
                    ? 'border-gray-50 hover:bg-sky-600 active:bg-gray-100'
                    : 'border-sky-600 text-sky-600 cursor-not-allowed'
                }`}
              style={
                accentColor && canGoBack && !isAnimating
                  ? { borderColor: accentColor, color: textColor }
                  : {}
              }
              aria-label='Previous'
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigate('next')}
              disabled={!canGoForward || isAnimating}
              className={`flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-300
                ${
                  canGoForward && !isAnimating
                    ? 'border-gray-50 hover:bg-sky-600 active:bg-gray-100'
                    : 'border-sky-600 text-sky-600 cursor-not-allowed'
                }`}
              style={
                accentColor && canGoForward && !isAnimating
                  ? { borderColor: accentColor, color: textColor }
                  : {}
              }
              aria-label='Next'
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Layout - Single card view */}
        {isMobile && (
          <div className='overflow-hidden'>
            <div
              className='flex relative transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {/* Render all cards in a row for smooth sliding */}
              {items.map((item, index) => (
                <div key={index} className='w-full flex-shrink-0'>
                  <CarouselCard
                    item={item}
                    index={index}
                    isFlipped={flippedCards[index]}
                    isMobile={isMobile}
                    toggleCardFlip={toggleCardFlip}
                    hasImageLoadError={failedImages[index]}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Layout - Dynamic paging system with animations */}
        {!isMobile && (
          <div className='hidden md:block relative overflow-visible'>
            {/* We'll render each page with proper animation states */}
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className='absolute w-full transition-all duration-500 ease-in-out'
                style={{
                  opacity: pageIndex === currentPage ? 1 : 0,
                  transform: `translateX(${
                    pageIndex === currentPage
                      ? '0%'
                      : pageIndex < currentPage
                        ? '-100%'
                        : '100%'
                  })`,
                  zIndex: pageIndex === currentPage ? 10 : 0,
                  pointerEvents: pageIndex === currentPage ? 'auto' : 'none',
                }}
              >
                {/* Previous page preview card (if available) */}
                {pageIndex > 0 && (
                  <div
                    className='absolute top-0 z-0'
                    style={{
                      left: `calc(-1 * ((100% - ${(cardsPerPage - 1) * 24}px) / ${cardsPerPage} + 24px))`,
                      width: `calc((100% - ${(cardsPerPage - 1) * 24}px) / ${cardsPerPage})`,
                      pointerEvents: 'none',
                    }}
                  >
                    <CarouselCard
                      item={items[pageIndex * cardsPerPage - 1]}
                      index={pageIndex * cardsPerPage - 1}
                      isPartial={true}
                      isFlipped={flippedCards[pageIndex * cardsPerPage - 1]}
                      isMobile={isMobile}
                      toggleCardFlip={toggleCardFlip}
                      hasImageLoadError={
                        failedImages[pageIndex * cardsPerPage - 1]
                      }
                    />
                  </div>
                )}

                {/* Main cards container */}
                <div
                  className='grid gap-6 relative z-10'
                  style={{
                    gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
                  }}
                >
                  {items
                    .slice(
                      pageIndex * cardsPerPage,
                      (pageIndex + 1) * cardsPerPage,
                    )
                    .map((item, idx) => {
                      const itemIndex = pageIndex * cardsPerPage + idx;
                      return (
                        <div key={idx} className='h-full'>
                          <CarouselCard
                            item={item}
                            index={itemIndex}
                            isFlipped={flippedCards[itemIndex]}
                            isMobile={isMobile}
                            toggleCardFlip={toggleCardFlip}
                            hasImageLoadError={failedImages[itemIndex]}
                          />
                        </div>
                      );
                    })}
                </div>

                {/* Next page preview card (if available) */}
                {(pageIndex + 1) * cardsPerPage < items.length && (
                  <div
                    className='absolute top-0 z-0'
                    style={{
                      left: 'calc(100% + 24px)',
                      width: `calc((100% - ${(cardsPerPage - 1) * 24}px) / ${cardsPerPage})`,
                      pointerEvents: 'none',
                    }}
                  >
                    <CarouselCard
                      item={items[(pageIndex + 1) * cardsPerPage]}
                      index={(pageIndex + 1) * cardsPerPage}
                      isPartial={true}
                      isFlipped={flippedCards[(pageIndex + 1) * cardsPerPage]}
                      isMobile={isMobile}
                      toggleCardFlip={toggleCardFlip}
                      hasImageLoadError={
                        failedImages[(pageIndex + 1) * cardsPerPage]
                      }
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Invisible placeholder to maintain proper height since we are using absolute positioning */}
            <div className='invisible' aria-hidden='true'>
              <div
                className='grid gap-6'
                style={{
                  gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
                }}
              >
                {getCurrentPageCards().map((item, index) => {
                  const itemIndex = currentPage * cardsPerPage + index;
                  return (
                    <div key={index} className='h-full'>
                      <CarouselCard
                        item={item}
                        index={itemIndex}
                        isFlipped={flippedCards[itemIndex]}
                        isMobile={isMobile}
                        toggleCardFlip={toggleCardFlip}
                        hasImageLoadError={failedImages[itemIndex]}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
