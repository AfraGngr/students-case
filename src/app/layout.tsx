import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
