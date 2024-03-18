"use client";
import { useState } from "react";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  // State variable to track whether the SignUp component has loaded
  const [signUpLoaded, setSignUpLoaded] = useState(false);

  // Simulate loading of the SignUp component
  setTimeout(() => {
    setSignUpLoaded(true);
  }, 300); // Adjust the time as needed

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="#">
                <span className="sr-only">Home</span>
                <div className="flex items-center justify-center p-4">
                  <Image
                    src="/Origami_b.svg"
                    alt="Logo"
                    height={50}
                    width={50}
                  ></Image>
                  <h0 className=" text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Welcome to Squid 🦑
                  </h0>
                </div>
              </a>
              <p className="m-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
              <div className="w-full flex justify-center my-5 py-5">
                {signUpLoaded ? <SignUp /> : <div>Loading Sign Up...</div>}
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}