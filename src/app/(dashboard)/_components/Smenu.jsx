import { UserButton, SignOutButton } from "@clerk/nextjs";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
const Smenu = () => {
  return (
    <>
      <div className="flex justify-center p-2">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/Origami_b.svg" alt="Logo" height={50} width={50} />
          <p className="text-gray-500">Paper Pigeon</p>
        </Link>
      </div>
      <div className="flex justify-between p-3 border-b-gray-200 border-b-[1px]">
        <div className="flex items-center">
          <div className="p-1 bg-gray-200 rounded-lg">
            <UserButton />
          </div>
        </div>
        <div>
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <Link
              href="/upload"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Upload
            </Link>
            <Link
              href="/Files"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Files
            </Link>
            <Link
              href="/"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Upgrade
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-3 bg-gray-200 rounded-lg flex items-center justify-center ">
            <SignOutButton>
              <button>
                <IoIosLogOut />
              </button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smenu;
