import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { MdLanguage, MdMail, MdPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="p-4 z-10 bg-black flex sm:hidden fixed sticky top-0 w-full">
        <div className="w-1/2">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={150}
            height={50}
          />
        </div>
        <div className="flex text-xl font-bold space-x-6 w-3/4">
          <Link href="/" passHref>
            <p
              className={
                router.pathname == "/"
                  ? "cursor-pointer my-4 transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-pink-900 bg-pink-900 h-8 text-white font-bold px-4"
                  : "cursor-pointer my-4 transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-white hover:bg-pink-900 h-8 text-white font-bold px-4"
              }
            >
              Home
            </p>
          </Link>
          <Link href="/" passHref>
            <p
              className={
                router.pathname == "/e"
                  ? "cursor-pointer my-4 transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-pink-900 bg-pink-900 h-8 text-white font-bold px-4"
                  : "cursor-pointer my-4 transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-white hover:bg-pink-900 h-8 text-white font-bold px-4"
              }
            >
              Check-in
            </p>
          </Link>
          <Link href="/" passHref>
            <p
              className={
                router.pathname == "/d"
                  ? "cursor-pointer my-4 transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-pink-900 bg-pink-900 h-8 text-white font-bold px-4"
                  : "cursor-pointer my-4 transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-white hover:bg-pink-900 h-8 text-white font-bold px-4"
              }
            >
              Flight-status
            </p>
          </Link>
          <Link href="/" passHref>
            <p
              className={
                router.pathname == "/a"
                  ? "cursor-pointer my-4 transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-pink-900 bg-pink-900 h-8 text-white font-bold px-4"
                  : "cursor-pointer my-4 transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-white hover:bg-pink-900 h-8 text-white font-bold px-4"
              }
            >
              Cars
            </p>
          </Link>
          <div className="flex mt-4 h-7 bg-white">
            <MdLanguage className="mt-1" />
            <select className="bg-white h-8 bg-opacity-0">
              <option>EN</option>
              <option>FR</option>
            </select>
          </div>
          <div className="text-sm -mt-3">
            <div className="grid text-yellow-600 grid-cols-3 divide-x-2 divide-yellow-600 gap-x-2">
              <div className="flex ">
                <CgProfile className="text-xl" />
                <Link href="/login" passHref>
                  <p className="cursor-pointer">Login</p>
                </Link>
              </div>
              <Link href="/signup" passHref>
                <p className="cursor-pointer pl-2">SignUp</p>
              </Link>
            </div>
            <div className="text-white p-2 bg-pink-900">
              <div className="flex space-x-1">
                <MdPhone className="mt-1" />
                <Link href="tel:+250782866080" passHref>
                  <h1 className="cursor-pointer">(+250) 788 888 000</h1>
                </Link>
              </div>
              <div className="flex">
                <MdMail className="mt-1" />
                <Link href="mailto: litorisdesign@gmail.com" passHref>
                  <p className="cursor-pointer pl-2">info@kigali.co.rw</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="md:hidden fixed z-10 flex text-white w-full bg-black">
        <div className="mt-2 w-3/4">
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          {isOpen ? (
            <div className="font-bold py-4 w-full mr-8">
              <Link href="/" passHref>
                <p
                  className={
                    router.pathname == "/"
                      ? "cursor-pointer transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-pink-900 bg-pink-900 h-8 text-white font-bold px-4"
                      : "cursor-pointer transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-white hover:bg-pink-900 h-8 text-white font-bold px-4"
                  }
                >
                  Home
                </p>
              </Link>
              <Link href="/" passHref>
                <p
                  className={
                    router.pathname == "/e"
                      ? "cursor-pointer transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-pink-900 bg-pink-900 h-8 text-white font-bold px-4"
                      : "cursor-pointer transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-white hover:bg-pink-900 h-8 text-white font-bold px-4"
                  }
                >
                  Check-in
                </p>
              </Link>
              <Link href="/" passHref>
                <p
                  className={
                    router.pathname == "/d"
                      ? "cursor-pointer transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-pink-900 bg-pink-900 h-8 text-white font-bold px-4"
                      : "cursor-pointer transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-white hover:bg-pink-900 h-8 text-white font-bold px-4"
                  }
                >
                  Flight-status
                </p>
              </Link>
              <Link href="/" passHref>
                <p
                  className={
                    router.pathname == "/a"
                      ? "cursor-pointer transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-pink-900 bg-pink-900 h-8 text-white font-bold px-4"
                      : "cursor-pointer transition rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-white hover:bg-pink-900 h-8 text-white font-bold px-4"
                  }
                >
                  Cars
                </p>
              </Link>
              <div className="flex justify-center w-3/4 mb-2 text-yellow-600">
                <CgProfile className="text-xl" />
              </div>
              <div className="grid px-4 text-yellow-600 grid-cols-3 divide-x-2 divide-yellow-600 gap-x-2">
                <Link href="/login" passHref>
                  <p className="cursor-pointer">Login</p>
                </Link>
                <Link href="/signup" passHref>
                  <p className="cursor-pointer pl-2">SignUp</p>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-1/2 mt-2 px-4">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={70}
            height={50}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
