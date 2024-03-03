import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="flex items-center flex-col w-full p-4 gap-2 border-[2px] border-t-primary/20 border-b-transparent border-r-transparent border-l-transparent bottom-0">
        <div className="flex items-center justify-center">
          <Image src="/Origami_b.svg" height={50} width={50} alt="Logo" />
          <p className="font-semibold text-base text-primary">Paper Pigeions</p>
        </div>
        <div className="h-full">
          <p className="mx-auto  max-w-md text-center leading-relaxed text-gray-500">
            A project made to share small files. please fell free to check it
            out. Made with passion and love.
          </p>

          <ul className="p-4 flex justify-center gap-6 md:gap-8">
            <li>
              <Link
                href="https://www.instagram.com/mzzsiz"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Instagram</span>
                <div className="h-6 w-6">
                  <IoLogoInstagram className="h-6 w-6" />
                </div>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.x.com/Zouziszzm"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">Twitter</span>
                <div className="h-6 w-6">
                  <RiTwitterXFill className="h-6 w-6" />
                </div>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.github.com/Zouziszzm"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                <span className="sr-only">GitHub</span>
                <div className="h-6 w-6">
                  <FaGithub className="h-6 w-6" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
