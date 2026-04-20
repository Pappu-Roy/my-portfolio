import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import NavbarWrapper from "@/components/NavbarWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pappu Roy | Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-background text-slate-900 dark:text-white transition-colors duration-300`}>
        <Providers>
          <NavbarWrapper />
          
          <div className="min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}