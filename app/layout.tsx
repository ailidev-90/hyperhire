import type { Metadata } from "next";
import "./globals.css";
import "./swiper-custom.css";

export const metadata: Metadata = {
  title: "Hyperhire Landing",
  description: "Hyperhire hiring service landing page"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

