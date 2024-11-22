import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import { ApplicationProvider } from "./context/applicationContext";
export const metadata: Metadata = {
  title:
    "Website Builder | Create Your Powerful Website Today - No Code Necessary",
  description:
    "Build a powerful website today with the help of our website builder, and there's no code required..",
  authors: [{ name: "Balaji", url: "https://balajidev.onrender.com" }],
  keywords: ["website builder", "low-code-platform", "landing page builder"],
  icons: {
    icon: "/icons8-world-96.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApplicationProvider> {children}</ApplicationProvider>
      </body>
    </html>
  );
}
