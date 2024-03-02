"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [mobnav, setMobnav] = useState(false);

  const handelmobmenu = () => {
    if (!mobnav) {
      setMobnav(true);
    } else {
      setMobnav(false);
    }
  };
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <Image
                  src="/Origami_b.svg"
                  height={50}
                  width={50}
                  alt="Logo"
                  className=""
                />
              </a>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Home{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Services{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-[#265073]"
                  href="/uplodeliarmus"
                >
                  Get Started
                </a>
              </div>

              <div className="relative block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={handelmobmenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <motion.div
                  onClick={handelmobmenu}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: mobnav ? 1 : 0, y: mobnav ? 3 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute right-0 top-11 ${mobnav ? "visible" : "invisible"}`}
                >
                  <ul className="space-y-1 min-w-[150px] bg-[#C7C8CC]/40 p-[5px] rounded-lg">
                    <li>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 hover:text-[#265073]"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 hover:text-[#265073]"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 hover:text-[#265073]"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
