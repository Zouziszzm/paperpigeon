"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const { theme } = useTheme();

  // Define the image source based on the theme mode
  let logoSrc;
  let logoClassNames = "h-[50px] w-[50px]"; // Default class names
  let color;

  if (theme === "dark") {
    logoSrc = "/Logo/Origami_b.svg";
    color="text-white"
  } else if (theme === "light") {
    logoSrc = "/Logo/Origami_w.svg";
    color="text-black"
  } else {
    logoSrc =
      theme === "system" ? "/Logo/Origami_b.svg" : "/Logo/Origami_w.svg";
    logoClassNames += " invert"; // Add "invert" class when theme is neither dark nor light
    color="text-red-100"
  }
  return (
    <footer className="bg-gray-50 dark:bg-primary dark:border-t-[1px] border-t-white/20">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Logo"
              width={50}
              height={50}
              className={logoClassNames}
            />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          What to know more about me and my projects please check out my socials bellow
        </p>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.linkedin.com/in/al-farhaan-khan-inamdar/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">LinkeedIn</span>
              <FaLinkedin  className={`h-[25px] w-[25px] ${color}`}/>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/Zouziszzm"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Twitter</span>
              <RiTwitterXFill className={`h-[25px] w-[25px] ${color}`} />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Zouziszzm"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub  className={`h-[25px] w-[25px] ${color}`}/>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/mzzsiz/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className={`h-[25px] w-[25px] ${color}`} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
