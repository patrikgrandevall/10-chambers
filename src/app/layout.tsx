import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import StartUpAnimation from "./components/StartUpAnimation/StartUpAnimation";

const WorkSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Some of my favourite gameing experiences",
  description:
    "A site listing eight of the best gaming experiences in my life. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <body
        className={`${WorkSans.variable} antialiased bg-white text-black dark:bg-neutral-900 dark:text-white`}
      >
        {children}
        <StartUpAnimation />
      </body>
    </html>
  );
}
