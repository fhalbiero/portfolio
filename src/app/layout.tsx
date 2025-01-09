import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono", 
});

export const metadata: Metadata = {
  title: "Fabio Albiero Portfolio",
  description: "Fabio Albiero Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition >
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
