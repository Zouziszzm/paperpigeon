import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt=""
              src="/pilot.svg"
              height={1080}
              width={1920}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="h-full flex flex-col justify-center max-w-xl lg:max-w-3xl">
              <div className="py-8">
                <a
                  className="text-blue-600 flex items-center justify-center"
                  href="#"
                >
                  <Image
                    src="/Origami_b.svg"
                    alt="logo"
                    height={50}
                    width={50}
                  />
                  <h1 className=" px-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Welcome to{" "}
                    <strong className="text-primary">PaperPegion</strong>
                  </h1>
                </a>
                <p className="mt-4 leading-relaxed  text-center text-gray-500 w-full md:w-[60%] md:mx-auto">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
              <div className="flex justify-center p-3 items-center">
                <SignIn />
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
