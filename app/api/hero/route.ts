import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const hero = {
    badge: "풀타임, 파트타임",
    title: "최고의 실력을 가진\n외국인 인재를 찾고 계신가요?",
    subtitle:
      "법률 및 인사관리 부담없이\n1주일 이내에 원격으로 채용해보세요.",
    ctaQuestion: "개발자가 필요하신가요?",
    salaryBadge: "월 100만원",
    stats: [
      {
        label: "평균 월 120만원",
        description: "임금을 해당 국가 기준으로\n으로 책정합니다."
      },
      {
        label: "최대 3회 인력교체",
        description: "인력 채용 후 한달 내에\n맞지 않으면 교체 가능합니다."
      },
      {
        label: "평균 3일, 최대 10일",
        description: "급하게 채용이 필요할수록\n우리는 빠르게 채용이 가능합니다."
      }
    ]
  };

  return NextResponse.json(hero);
}

