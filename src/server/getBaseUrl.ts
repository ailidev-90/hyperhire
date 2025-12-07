import { headers } from "next/headers";

export const getBaseUrl = (): string => {
  const h = headers();
  const host = h.get("host") ?? "localhost:3000";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  return `${protocol}://${host}`;
};

