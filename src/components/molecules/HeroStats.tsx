import type { HeroStat } from "@/src/server/getLandingData";
import { Text } from "@/src/components/atoms/Text";

type HeroStatsProps = {
  stats: HeroStat[];
};

export const HeroStats = ({ stats }: HeroStatsProps) => {
  return (
    <>
      {stats.map((stat) => (
        <div key={stat.label} className="animate-fade-in-up">
          <div className="border-t-2 border-white pt-2">
            <Text as="h3" className="text-[18px] font-black text-white">
              {stat.label}
            </Text>
            <Text className="mt-2 text-[16px] leading-relaxed text-white/90 whitespace-pre-line">
              {stat.description}
            </Text>
          </div>
        </div>
      ))}
    </>
  );
};

