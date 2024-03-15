import Link from 'next/link'
const Banner = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Upload , save and easily Share your Files in
              <strong className="font-extrabold text-gray-400 sm:block">
                {" "}
                one place.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-gray-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-400/80  sm:w-auto"
                href="#"
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-gray-400 sm:w-auto"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
