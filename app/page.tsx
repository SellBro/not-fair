// pages/index.js
import Head from "next/head";
import Image from "next/image";

import pepe from "../public/pepes.png";
import x from "../public/twitter.svg";
import discord from "../public/discord.svg";

export default function Home() {
  return (
    <div className="bg-black bg-[url('../public/Ellipse.svg'),_url('../public/stick.svg')] flex flex-col min-h-screen bg-cover h-screen">
      <Head>
        <title>NotFair</title>
        <meta name="description" content="We're Fack'n Early Fair!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-white p-4">
        <nav className="flex justify-end">
          <div className="flex gap-4 mr-10">
            <a
              href="https://twitter.com/notFair_io"
              className="fill-white"
              target="_blank"
            >
              <Image src={x} alt="X" className="size-10"></Image>
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 p-t4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center lg:justify-start mb-4 lg:mb-0 mt-20 lg:mt-0">
            <h1 className="font-header text-6xl lg:text-9xl font-semibold mb-4 text-white">
              notFair
            </h1>
            <h2 className="font-text text-xl lg:text-2xl mb-4 text-white">
              WE'RE FACK'N <span className="line-through">EARLY</span> FAIR
            </h2>
          </div>

          <div className="w-full lg:w-1/2 h-full relative">
            <Image
              src={pepe}
              alt="notFair Mascot"
              layout="fill"
              objectFit="contain"
              className="object-bottom"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
