import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "notFair",
    description: "First coin on the first zk blockchain",
    type: "website",
    url: "www.notfair.io",
    siteName: "notFair",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>notFair</title>
        <meta
          name="description"
          property="description"
          content="First coin on the first zk blockchain"
        />
        <meta prefix="og: http://ogp.me/ns#" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
