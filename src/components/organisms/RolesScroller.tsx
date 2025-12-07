"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Roler1 from "@/src/assets/images/Roler-1.png";
import Roler2 from "@/src/assets/images/Roler-2.png";
import Roler3 from "@/src/assets/images/Roler-3.png";
import Roler4 from "@/src/assets/images/Roler-4.png";
import Roler5 from "@/src/assets/images/Roler-5.png";

type RolesScrollerProps = {
  roles: string[];
};

const roleIcons = [Roler1, Roler2, Roler3, Roler4, Roler5];

export const RolesScroller = ({ roles }: RolesScrollerProps) => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const displayRoles = [...roles, ...roles, ...roles]; // Triple for smooth infinite scroll

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 1;
        // Reset when we've scrolled through one full set
        if (newOffset >= roles.length) {
          return 0;
        }
        return newOffset;
      });
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="overflow-hidden opacity-0 animate-fade-in">
      <div 
        ref={containerRef}
        className="flex gap-2 transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(calc(-${offset} * (180px + 0.5rem)))` // 180px item width + gap
        }}
      >
        {displayRoles.map((role, index) => {
          const iconIndex = (index % roles.length) % roleIcons.length;
          return (
            <div
              key={`${role}-${index.toString()}`}
              className="flex items-center gap-2 rounded-xl bg-white/20 backdrop-blur-sm px-6  text-base font-bold text-white whitespace-nowrap flex-shrink-0"
              style={{width:332, height:88}}
            >
              <div className="w-[56px] h-[56px]  rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                <Image 
                  src={roleIcons[iconIndex]} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              {role}
            </div>
          );
        })}
      </div>
    </div>
  );
};

