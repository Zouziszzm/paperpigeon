const Hero = () => {
  return (
    <div className="h-[65%]">
      <section className=" bg-secondary dark:bg-primary text-white pt-[50px]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[65%] lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Upload, Save and easily share
              <span className="sm:block"> Files in one place. </span>
            </h1>

            <p className="mx-auto mt-4 text-black dark:text-primary max-w-xl sm:text-xl/relaxed">
              Drag and drop your files on our cloud and Save it on to you own cloud space.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
