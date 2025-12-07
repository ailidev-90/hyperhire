import Image from "next/image";

import { Badge } from "@/src/components/atoms/Badge";
import { Text } from "@/src/components/atoms/Text";
import { HeroStats } from "@/src/components/molecules/HeroStats";
import { ProfileCarousel } from "@/src/components/organisms/ProfileCarousel";
import type { HeroData, ProfileCardData } from "@/src/server/getLandingData";
import { NavBar } from "@/src/components/molecules/NavBar";
import { RolesScroller } from "@/src/components/organisms/RolesScroller";
import BackgroundHero from "@/src/assets/images/Background-Hero.png";

type HeroSectionProps = {
  hero: HeroData;
  roles: string[];
  cards: ProfileCardData[];
};

export const HeroSection = ({ hero, roles, cards }: HeroSectionProps) => {
  return (
    <section className="relative overflow-x-hidden pb-16 text-white sm:pb-20">
      <div className="absolute inset-0">
        <Image
          src={BackgroundHero}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        <NavBar />

        <div className="mt-6 px-4 sm:mt-20 sm:px-10">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col">
            <Badge variant="outline" className="animate-fade-in-up mb-5 inline-block self-start">
              {hero.badge}
            </Badge>
            <Text
              as="h1"
              className="whitespace-pre-line text-[26px] font-black leading-[34px] tracking-tight text-white animate-fade-in-up"
            >
              {hero.title}
            </Text>
            <Text className="mt-4 whitespace-pre-line text-[15px] leading-[22px] font-black text-white opacity-90 animate-fade-in-up">
              {hero.subtitle}
            </Text>
            
            {/* Mobile Carousel */}
            <div className="mt-10 mb-10">
              <ProfileCarousel cards={cards} />
            </div>
            
            {/* Mobile Checkboxes - replacing roles */}
            <div className="mt-0 mb-0 grid grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-white/30">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[15px] font-black text-white">한국어 능력</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-white/30">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[15px] font-black text-white">업무 수행 능력</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-white/30">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[15px] font-black text-white">겸업 여부</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-white/30">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[15px] font-black text-white">평판 조회</span>
              </div>
            </div>
            
            {/* Mobile CTA Text */}
            <div className="my-4 text-left">
              <span className="text-[17px] font-black text-[#FBFF23]">개발자가 필요하신가요?</span>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row justify-between gap-12 items-start">
            <div className="max-w-[550px] flex-shrink-0">
              <Badge variant="outline" className="animate-fade-in-up">
                {hero.badge}
              </Badge>
              <Text
                as="h1"
                className="mt-6 whitespace-pre-line text-[48px] font-black leading-[62px] tracking-tight text-white animate-fade-in-up"
              >
                {hero.title}
              </Text>
              <Text className="mt-6 whitespace-pre-line text-[24px] leading-[34px] font-black text-white opacity-80 animate-fade-in-up">
                {hero.subtitle}
              </Text>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <HeroStats stats={hero.stats} />
              </div>
            </div>

            <div className="flex flex-1 flex-col ml-[100px] items-center items-end w-full pt-12 min-w-0">
              <ProfileCarousel cards={cards} />
            </div>
          </div>
        </div>

        {/* Roles Scroller - Desktop only */}
        <div className="hidden sm:block relative my-20">
          <div className="absolute left-0 right-[calc(-50vw+50%)] px-10">
            <RolesScroller roles={roles} />
          </div>
        </div>
      </div>
    </section>
  );
};
