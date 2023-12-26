// pages/index.js
import Head from "next/head";
import Image from "next/image";

import pepe from "../public/pepe.svg";
import x from "../public/twitter.svg";
import discord from "../public/discord.svg";

export default function Home() {
  return (
    <div className="bg-black bg-[url('../public/Ellipse.svg'),_url('../public/stick.svg')] flex flex-col min-h-screen bg-cover">
      <Head>
        <title>NotFair</title>
        <meta name="description" content="We're Fack'n Early Fair!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-white p-4">
        <nav className="flex justify-end">
          <div className="flex gap-4 mr-10">
            <a href="https://twitter.com" className="fill-white">
              <Image src={x} alt="X" className="size-10"></Image>
            </a>
            <a href="https://discord.com" className="hover:underline">
              <Image src={discord} alt="Discord" className="size-10"></Image>
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="container mx-auto flex items-start justify-between">
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="font-header text-9xl font-semibold mb-4 text-white">
              notFair
            </h1>
            <h2 className="font-text text-2xl mb-4 text-white">
              WE'RE FACK'N <span className="line-through">EARLY</span> FAIR
            </h2>
          </div>
          <div className="w-1/2 self-start">
            <Image
              src={pepe}
              alt="notFair Mascot"
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
