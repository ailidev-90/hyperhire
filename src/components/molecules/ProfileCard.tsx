import { Text } from "@/src/components/atoms/Text";
import Image from "next/image";
import type { ProfileCardData } from "@/src/server/getLandingData";
import ProfileCardIcon from "@/src/assets/images/Profile-Picture.png";
import Flag from "@/src/assets/images/Flag.png";

type ProfileCardProps = {
  data: ProfileCardData;
  active?: boolean;
  showArrow?: boolean;
  onNext?: () => void;
};

export const ProfileCard = ({ data, active, showArrow, onNext }: ProfileCardProps) => {
  return (
    <div className="relative flex flex-col items-center w-full pointer-events-auto">
      {/* Tooltip - only show on active card */}
      {active && (
        <div className="absolute lg:top-[-80px] top-[-65px] left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="relative flex flex-col items-center">
            <div className="rounded-xl bg-white px-5 py-3 shadow-xl whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-xs font-bold text-white">
                  $
                </span>
                <span className="text-lg font-black text-emerald-600">월 100만원</span>
              </div>
            </div>
            <div className="h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white mt-[-1px]"></div>
          </div>
        </div>
      )}

      {/* Card */}
      <div className="relative flex w-full max-w-[234px] sm:max-w-[340px] h-[311px] sm:h-[460px] flex-col items-center justify-start rounded-[20px] sm:rounded-[24px] bg-white px-4 sm:px-9 pb-5 sm:pb-9 pt-5 sm:pt-12 shadow-lg">
        {/* Profile Image */}
        <div className="relative">
          <div className="relative flex h-[80px] w-[80px] sm:h-[130px] sm:w-[130px] items-center justify-center overflow-hidden rounded-full border-3 sm:border-4 border-white bg-gray-50 shadow-md mb-3 sm:mb-5">
            <Image 
              src={ProfileCardIcon} 
              alt={data.name}
              className="w-full h-full object-cover"
            />
          </div>
            {/* Flag Badge */}
            <div className="absolute lg:bottom-6 bottom-5 lg:right-3 right-1 lg:h-[18px] lg:w-[25px] shadow-sm overflow-hidden">
              <Image 
                src={Flag} 
                alt="Flag"
                className="w-full h-full object-cover"
              />
            </div>
        </div>
       

        {/* Name and Role */}
        <div className="text-center mb-3 sm:mb-7">
          <Text as="h3" className="text-[18px] sm:text-[26px] font-black text-gray-900 leading-tight">
            {data.name}
          </Text>
          <Text className="mt-0.5 sm:mt-2 text-[14px] sm:text-lg font-black text-[#00A8E8]">{data.role}</Text>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md sm:rounded-lg border border-gray-300 bg-white px-2 py-1 sm:px-4 sm:py-2.5 text-[11px] sm:text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
