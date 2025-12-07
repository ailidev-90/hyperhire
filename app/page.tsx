import { LandingPage } from "@/src/components/templates/LandingPage";
import { getLandingData } from "@/src/server/getLandingData";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await getLandingData();

  return <LandingPage {...data} />;
}

