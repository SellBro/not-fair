import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>notFair</title>
        <meta prefix="og: http://ogp.me/ns#" />
        <meta
          name="description"
          content="First coin on the first zk blockchain"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
