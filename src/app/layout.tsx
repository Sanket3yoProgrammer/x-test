import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const circularWeb = localFont({
  src: "./fonts/circularweb-book.woff2",
  variable: "--font-circular-web",
});

const general = localFont({
  src: "./fonts/general.woff2",
  variable: "--font-general",
});

const robertMedium = localFont({
  src: "./fonts/robert-medium.woff2",
  variable: "--font-robert-medium",
});

const robertRegular = localFont({
  src: "./fonts/robert-regular.woff2",
  variable: "--font-robert-regular",
});

const zentryRegular = localFont({
  src: "./fonts/zentry-regular.woff2",
  variable: "--font-zentry-regular",
});

export const metadata: Metadata = {
  title: "Xentry",
  description: "Created with next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${circularWeb.variable} ${general.variable} ${robertMedium.variable} ${robertRegular.variable} ${zentryRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
