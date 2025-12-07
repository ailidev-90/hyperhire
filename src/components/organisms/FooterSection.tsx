import Image from "next/image";
import { Text } from "@/src/components/atoms/Text";
import LogoFooter from "@/src/assets/images/Logo-Footer.png";
import CodeBlock from "@/src/assets/images/Code-Block.png";
import Person from "@/src/assets/images/Person.png";
import Kor from "@/src/assets/images/Kor.png";
import Cog from "@/src/assets/images/Cog.png";
import ArrowRightSquare from "@/src/assets/images/Arrow-Right-Square.png";

const footerCards = [
  { label: "해외 개발자 원격 채용", description: "바로가기", icon: CodeBlock },
  { label: "외국인 원격 채용 (비개발)", description: "바로가기", icon: Person },
  { label: "한국어 가능 외국인 채용", description: "바로가기", icon: Kor },
  { label: "해외 개발자 활용 서비스", description: "바로가기", icon: Cog }
];

export const FooterSection = () => {
  return (
    <footer className="bg-hyperhire-footerBg py-16 text-sm text-hyperhire-footerText">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* First Row - Logo, Contact, Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-8 mb-12">
          {/* Left Column - Logo and Contact */}
          <div className="space-y-5">
            <Image 
              src={LogoFooter} 
              alt="Hyperhire" 
              className="h-auto w-[187px]"
            />
            <Text className="leading-relaxed text-[#5E626F] font-black text-[14px]">
              우리는 국가의 경계를 넘어 최고의 인재를 매칭해드립니다.
            </Text>
            <div className="space-y-2 text-[#343741] font-black text-[13px]">
              <div>010-0000-0000</div>
              <div>aaaaa@naver.com</div>
            </div>
          </div>

          {/* Right - Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {footerCards.map((card, index) => (
              <div key={index} className="flex flex-col justify-between rounded-xl bg-white px-4 py-4 shadow-sm h-[142px]">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#EFF1F6] p-2">
                  <Image src={card.icon} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="text-[14px] font-black text-[#343741] leading-tight">{card.label}</div>
                <button className="self-start text-[14px] font-black text-[#5E626F] flex items-center gap-1 hover:text-[#343741] transition-colors">
                  {card.description}
                  <Image src={ArrowRightSquare} alt="" className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Company Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          <div className="space-y-2">
            <div className="text-[#5E626F] font-black text-[12px]">상호명</div>
            <div className="font-black text-[#343741] text-[13px] leading-snug">하이퍼하이어</div>
            <div className="font-black text-[#343741] text-[13px] leading-snug">Hyperhire India Private Limited</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-[#5E626F] font-black text-[12px]">대표 CEO</div>
            <div className="font-black text-[#343741] text-[13px]">김주현</div>
            <div className="font-black text-[#343741] text-[13px]">Juhyun Kim</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-[#5E626F] font-black text-[12px]">사업자등록번호 CIN</div>
            <div className="font-black text-[#343741] text-[13px]">427-86-01187</div>
            <div className="font-black text-[#343741] text-[13px]">U74110DL2016PTC290812</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-[#5E626F] font-black text-[12px]">주소 ADDRESS</div>
            <div className="font-black text-[#343741] text-[13px] leading-[1.6]">서울특별시 강남구 테헤란로 479, 지하 1층 238호</div>
            <div className="font-black text-[#343741] text-[13px] leading-[1.6]">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-[13px] text-[#5E626F] font-black">© 2023 Hyperhire</div>
      </div>
    </footer>
  );
};

