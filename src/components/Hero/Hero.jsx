import React from "react";

const Hero = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="font-extrabold text-primary sm:block">
                {" "}
                Store, share {" "}
              </strong>
              and manage files easily uploads and sharing.
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Drag and drop your file directly and share it with your friends secuarely with password and send it on email
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#265073] focus:outline-none focus:ring sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-[#265073] focus:outline-none focus:ring sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
