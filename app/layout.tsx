import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Providers } from "./components/theme/providers";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🌎 World Flags",
  description: "Flags around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
