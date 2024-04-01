import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt="pattern"
              height={500}
              width={500}
              src="/Patterns/pattern.svg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <Link className="block text-blue-600" href="#">
                <div className="flex items-center justify-center">
                  <Image
                    src="/Logo/Origami_b.svg"
                    alt="Logo"
                    height={200}
                    width={200}
                    className="h-[50px] w-[50px]"
                  />
                  <p className="font-bold text-lg font-mono">PaperPigeon</p>
                </div>
              </Link>

              <h1 className="mt-6 text-xl text-center font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to PaperPigeon
              </h1>

              <p className="mt-4 leading-relaxed text-center text-gray-500 px-4">
                A Simpe File storage and Sharing platform
              </p>
              <div className="p-4 flex justify-center">
                <SignUp />
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
