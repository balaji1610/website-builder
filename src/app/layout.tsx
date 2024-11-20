import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import { ApplicationProvider } from "./context/applicationContext";
export const metadata: Metadata = {
  title: "Website builder",
  description: "Create Your Powerful Website Today - No Code Necessary",
  authors: [{ name: "Balaji", url: "https://balajidev.onrender.com" }],
  keywords: ["website builder", "low-code-platform", "landing page builder"],
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
