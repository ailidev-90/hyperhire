"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/src/components/atoms/Button";
import Logo from "@/src/assets/images/Logo.png";

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex w-full items-center justify-between px-4 pt-4 sm:px-10 sm:pt-8">
      <div className="flex items-center gap-2 text-white">
        <Image
          src={Logo}
          alt="Hyperhire"
          className="h-6 sm:h-7 w-auto"
          priority
        />
      </div>
      <nav className="hidden items-center gap-12 text-sm font-semibold text-white md:flex">
        <div className="relative">
          <button 
            className="flex items-center gap-1 transition-colors hover:text-white/80"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>채용</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div 
              className="absolute left-0 top-full mt-2 w-[240px] bg-white rounded-lg shadow-lg overflow-hidden z-50"
            >
              <ul className="py-2">
                <li>
                  <button className="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
                    채용
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
                    해외 개발자 원격 채용
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
                    외국인 원격 채용 (비개발 직군)
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 transition-colors">
                    한국어 가능 외국인 채용
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="transition-colors hover:text-white/80">
          해외 개발자 활용 서비스
        </button>
      </nav>
      <Button variant="nav" className="lg:block hidden ml-3 px-7 !rounded-md">
        문의하기
      </Button>
    </header>
  );
};
