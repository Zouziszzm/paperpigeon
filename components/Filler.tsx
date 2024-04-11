import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAuthelia } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbSquareArrowDown } from "react-icons/tb";
import { GiMatterStates } from "react-icons/gi";
const Filler = () => {
  return (
    <section className="bg-white dark:bg-primary text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl text-black dark:text-white font-bold sm:text-4xl">
            How about entrusting your data to App you&apos;ve created?
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            This is a straightforward example where I&apos;ve learned to utilize
            Firebase storage for data storage –&quot; a testament to my progress, to
            say the least.&quot;
          </p>
        </div>
        <div>
          <h2 className="text-xl text-black  text-center py-4 dark:text-white font-bold sm:text-4xl">
            Tech stack used to make this.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <span className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/50 dark:hover:border-pink-500/10 hover:shadow-blue-600/10">
            <div className="flex p-2">
              {" "}
              <FaReact className="size-10 text-blue-600" />
              <TbBrandNextjs className="size-10 text-blue-600" />
            </div>

            <h2 className="mt-4 text-gray-800 dark:text-white text-xl font-bold">
              React.js/Next.js
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Used Next.js a framework of react.js used mostly for creating
              server side applications.
            </p>
          </span>

          <span className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/50 dark:hover:border-pink-500/10 hover:shadow-blue-600/10">
            <SiAuthelia className="size-10 text-blue-600" />

            <h2 className="mt-4 text-xl text-gray-800 dark:text-white font-bold">
              Clerk Authentication
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              ClerkJS is JavaScript library for building user management and
              authentication.
            </p>
          </span>

          <span className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/50 dark:hover:border-pink-500/10 hover:shadow-blue-600/10">
            <SiTailwindcss className="size-10 text-blue-600" />

            <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
              Shadcn/ TailwindCss
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable.
            </p>
          </span>

          <span className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/50 dark:hover:border-pink-500/10 hover:shadow-blue-600/10">
            <IoLogoFirebase className="size-10 text-blue-600" />
            <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
              Google Firebase
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Cloud Storage for Firebase stores your files in a Google Cloud
              Storage bucket, making them accessible through both Firebase and
              Google Cloud.
            </p>
          </span>

          <span className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/50 dark:hover:border-pink-500/10  hover:shadow-blue-600/10">
            <TbSquareArrowDown className="size-10 text-blue-600"/>

            <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
              React Drop zone
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Simple React hook to create a HTML5-compliant drag&apos;n&apos;drop zone for
              files.
            </p>
          </span>

          <span className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/50 dark:hover:border-pink-500/10 hover:shadow-blue-600/10">
            <GiMatterStates className="size-10 text-blue-600" />
            <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
              Zustand
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              A small, fast and scalable bearbones state-management solution
              using simplified flux principles. Has a comfy API based on hooks,
              isn&apos;t boilerplatey or opinionated.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Filler;
