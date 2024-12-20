import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

const latoFont = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Maryam Nasir",
  description:
    "I am a front-end developer with a strong foundation in building responsive and highly interactive web applications using modern technologies like React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Redux",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${latoFont.variable} ${montserratFont.variable} antialiased`}
      >
        {children}
        <div id="mobile-navigation-portal"></div>
      </body>
    </html>
  );
}
