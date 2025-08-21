import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VLAD PECHKIN — Frontend Developer, 5+ years experience",
  description:
    "I am an experienced React Frontend Developer with over 5 years in the industry, skilled in building scalable and maintainable web applications. My journey has equipped me with a diverse skill set, including leading frontend teams and working as a full-stack developer, allowing me to contribute effectively throughout the development lifecycle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
