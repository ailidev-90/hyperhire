"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ProfileCardData } from "@/src/server/getLandingData";
import { ProfileCard } from "@/src/components/molecules/ProfileCard";
import CaretLeft from "@/src/assets/icons/caret-left.svg";
import CaretRight from "@/src/assets/icons/caret-right.svg";

type ProfileCarouselProps = {
  cards: ProfileCardData[];
};

export const ProfileCarousel = ({ cards }: ProfileCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = cards.length - 1;
      if (nextIndex >= cards.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const getCardIndex = (offset: number) => {
    const index = currentIndex + offset;
    if (index < 0) return cards.length + index;
    if (index >= cards.length) return index - cards.length;
    return index;
  };

  const prevIndex = getCardIndex(-1);
  const nextIndex = getCardIndex(1);

  return (
    <div className="relative flex items-center justify-center w-full h-auto sm:h-[550px] px-2 sm:px-0">
      {/* Mobile Navigation - Left */}
      <button
        type="button"
        aria-label="Previous profile"
        onClick={() => paginate(-1)}
        className="md:hidden absolute left-[-20px] top-[50%] translate-y-[-50%] z-50 flex h-10 w-10 items-center justify-center transition text-white"
      >
        <Image src={CaretLeft} alt="" className="w-8 h-8 brightness-0 invert" />
      </button>

      {/* Desktop Navigation - Left */}
      <button
        type="button"
        aria-label="Previous profile"
        onClick={() => paginate(-1)}
        className="hidden md:flex absolute left-[-140px] top-[50%] translate-y-[-50%] z-50 h-10 w-10 items-center justify-center transition hover:bg-white/30 text-white"
      >
        <Image src={CaretLeft} alt="" className="w-10 h-10 brightness-0 invert" />
      </button>

      {/* Cards Container */}
      <div className="relative w-full max-w-[234px] sm:max-w-[600px] h-full flex items-start justify-center pt-8 sm:pt-16">
        <AnimatePresence initial={false} mode="popLayout">
          {/* Left Card */}
          <motion.div
            key={`left-${prevIndex}`}
            initial={{
              x: direction > 0 ? 0 : -60,
              scale: direction > 0 ? 1 : 0.95,
              opacity: direction > 0 ? 1 : 0.7,
              zIndex: direction > 0 ? 30 : 10
            }}
            animate={{
              x: -60,
              scale: 0.95,
              opacity: 0.7,
              zIndex: 10
            }}
            exit={{
              x: direction < 0 ? 0 : -180,
              scale: direction < 0 ? 1 : 0.85,
              opacity: direction < 0 ? 1 : 0,
              zIndex: direction < 0 ? 30 : 0
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute left-0 top-12 sm:top-20 sm:left-0"
            style={{ transform: 'translateX(0)' }}
          >
            <ProfileCard data={cards[prevIndex]} active={false} />
          </motion.div>

          {/* Center Card (Active) */}
          <motion.div
            key={`center-${currentIndex}`}
            initial={{
              x: direction > 0 ? 60 : -60,
              scale: 0.95,
              opacity: 0.7,
              zIndex: 10
            }}
            animate={{
              x: 0,
              scale: 1,
              opacity: 1,
              zIndex: 30
            }}
            exit={{
              x: direction > 0 ? -60 : 60,
              scale: 0.95,
              opacity: 0.7,
              zIndex: 10
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative"
          >
            <ProfileCard
              data={cards[currentIndex]}
              active={true}
              showArrow={true}
              onNext={() => paginate(1)}
            />
          </motion.div>

          {/* Right Card */}
          <motion.div
            key={`right-${nextIndex}`}
            initial={{
              x: direction < 0 ? 0 : 60,
              scale: direction < 0 ? 1 : 0.95,
              opacity: direction < 0 ? 1 : 0.7,
              zIndex: direction < 0 ? 30 : 10
            }}
            animate={{
              x: 60,
              scale: 0.95,
              opacity: 0.7,
              zIndex: 10
            }}
            exit={{
              x: direction > 0 ? 0 : 180,
              scale: direction > 0 ? 1 : 0.85,
              opacity: direction > 0 ? 1 : 0,
              zIndex: direction > 0 ? 30 : 0
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute right-0 top-12 sm:top-20 sm:right-0"
            style={{ transform: 'translateX(0)' }}
          >
            <ProfileCard data={cards[nextIndex]} active={false} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Navigation - Right */}
      <button
        type="button"
        aria-label="Next profile"
        onClick={() => paginate(1)}
        className="md:hidden absolute right-[-20px] top-[50%] translate-y-[-50%] z-50 flex h-10 w-10 items-center justify-center transition text-white"
      >
        <Image src={CaretRight} alt="" className="w-8 h-8 brightness-0 invert" />
      </button>

      {/* Desktop Navigation - Right */}
      <button
        type="button"
        aria-label="Next profile"
        onClick={() => paginate(1)}
        className="hidden md:flex absolute right-[-140px] top-[50%] translate-y-[-50%] z-50 h-10 w-10 items-center justify-center transition hover:bg-white/30 text-white"
      >
        <Image src={CaretRight} alt="" className="w-10 h-10 brightness-0 invert" />
      </button>
    </div>
  );
};
