import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const cards = [
    {
      id: 1,
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      tags: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]
    },
    {
      id: 2,
      name: "Sofia Martinez",
      role: "디자인 · 3y+",
      tags: ["브랜딩 디자인", "웹/모바일 UI", "프로토타입 제작", "디자인 시스템"]
    },
    {
      id: 3,
      name: "Michael Kim",
      role: "세일즈 · 4y+",
      tags: ["B2B 세일즈", "리드 발굴", "CRM 관리", "세일즈 피치 제작"]
    }
  ];

  return NextResponse.json({ cards });
}

