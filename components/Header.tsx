"use client";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ThemeToggler } from "./ThemeToggler";
import { Button } from "@/components/ui/button";
const Header = () => {
  const { theme } = useTheme();

  // Define the image source based on the theme mode
  let logoSrc;
  let logoClassNames = "h-[50px] w-[50px]"; // Default class names

  if (theme === "dark") {
    logoSrc = "/Logo/Origami_b.svg";
  } else if (theme === "light") {
    logoSrc = "/Logo/Origami_w.svg";
  } else {
    logoSrc =
      theme === "system" ? "/Logo/Origami_b.svg" : "/Logo/Origami_w.svg";
    logoClassNames += " invert"; // Add "invert" class when theme is neither dark nor light
  }

  return (
    <>
      <div className={`flex px-4 justify-between !bg-transparent backdrop-blur-md z-10 fixed w-full border-b-[1px] ${theme == "dark" ? "border-b-white": "border-b-black"} `}>
        <Link href="/">
          <div className="flex justify-center items-center gap-2 p-1">
            <Image
              src={logoSrc}
              alt="Logo"
              width={50}
              height={50}
              className={logoClassNames}
            />
            <p className="font-semibold font-mono">PaperPigeon</p>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-2">
          <div className="p-2">
            <ThemeToggler />
          </div>
          <div className="">
            <SignedIn>
              <Button
                variant="outline"
                className="border-[1px] p-2"
                size="icon"
              >
                <UserButton afterSignOutUrl="/" />
              </Button>
            </SignedIn>
            <SignedOut>
              <Button variant="outline" className="border-[1px]">
                <SignInButton afterSignInUrl="/dashboard" />
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
