import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const roles = [
    "해외 마케팅",
    "퍼블리셔",
    "카드뉴스(제도사)",
    "해외 세일즈",
    "해외 CS"
  ];

  return NextResponse.json({ roles });
}

