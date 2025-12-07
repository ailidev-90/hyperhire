import { getBaseUrl } from "./getBaseUrl";

export type HeroStat = {
  label: string;
  description: string;
};

export type HeroData = {
  badge: string;
  title: string;
  subtitle: string;
  ctaQuestion: string;
  salaryBadge: string;
  stats: HeroStat[];
};

export type ProfileCardData = {
  id: number;
  name: string;
  role: string;
  tags: string[];
};

export type LandingData = {
  hero: HeroData;
  roles: string[];
  cards: ProfileCardData[];
};

export const getLandingData = async (): Promise<LandingData> => {
  const baseUrl = getBaseUrl();

  const [heroRes, rolesRes, cardsRes] = await Promise.all([
    fetch(`${baseUrl}/api/hero`, { cache: "no-store" }),
    fetch(`${baseUrl}/api/roles`, { cache: "no-store" }),
    fetch(`${baseUrl}/api/profileCards`, { cache: "no-store" })
  ]);

  if (!heroRes.ok || !rolesRes.ok || !cardsRes.ok) {
    throw new Error("Failed to fetch landing data");
  }

  const hero = (await heroRes.json()) as HeroData;
  const rolesJson = (await rolesRes.json()) as { roles: string[] };
  const cardsJson = (await cardsRes.json()) as { cards: ProfileCardData[] };

  return {
    hero,
    roles: rolesJson.roles,
    cards: cardsJson.cards
  };
};

