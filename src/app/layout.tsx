import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import Header from "@/components/ui/sections/header";

// Configure Manrope font
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",

  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Supreme Group",
  description: "Supreme Group",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={cn(manrope.variable)}>
        <link rel="icon" href="Supreme_logos (3).svg" sizes="any" />
        <div className="flex w-full h-18 justify-between">
          <Header />
        </div>
        <main className="w-full font-sans">{children}</main>
      </body>
    </html>
  );
}
