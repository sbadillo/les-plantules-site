"use client";

import BlogList from "components/bloglist";
import NavBar from "components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl py-8">
      <NavBar />
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-10 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-6">
            <h1 className="max-w-2xl mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              This is a catchy <br />
              <span className="italic">message</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex mx-auto">
            <Image
              src="/img/dessin1.png"
              width={1000}
              height={1000}
              alt="hero image"
              className="rounded-full w-96 h-96"
            />
          </div>
        </div>
      </section>

      <section className="bg-plantule-light px-4 py-0 mx-0">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="mx-auto mb-8 lg:mb-12">
            <h2 className="mb-4 text-3xl tracking-tight text-gray-900">
              Actualités
            </h2>
          </div>
          <BlogList />
        </div>
        <div className="mb-4 text-center text-xl tracking-tight text-gray-900">
          <Link href="#">👉 Voir toutes les actualités</Link>
        </div>
      </section>
    </div>
  );
}
