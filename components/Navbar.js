import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { MdPhoneInTalk } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="h-8 bg-gray-400 z-10"></div>
      <nav className="shadow-2xl bg-white flex sm:hidden fixed sticky top-0 z-10 w-full">
        <div className="w-1/2 py-2 px-16">
        <Link href="/" passHref><img src="logo.jpg" alt="logo" className="h-20" /></Link>
        </div>
        <div className="flex h-full font-bold space-x-6 w-1/2 justify-end">
          <Link href="/" passHref>
            <p
              className={
                router.pathname == "/"
                  ? "bg-orange-200 text-black cursor-pointer hover:bg-orange-300 grid place-items-center px-4"
                  : "text-black cursor-pointer hover:bg-orange-200 font-bold grid place-items-center px-4"
              }
            >
              HOME
            </p>
          </Link>
          <Link href="/about" passHref>
            <a
              className={
                router.pathname == "/about"
                  ? "bg-orange-200 text-black cursor-pointer hover:bg-orange-300 grid place-items-center px-4"
                  : "text-black cursor-pointer hover:bg-orange-200 font-bold grid place-items-center px-4"
              }
            >
              ABOUT_US
            </a>
          </Link>
          <Link href="/about/#team" passHref>
            <p
              className={
                router.pathname == "/about/#team"
                  ? "bg-orange-200 text-black cursor-pointer hover:bg-orange-300 grid place-items-center px-4"
                  : "text-black cursor-pointer hover:bg-orange-200 font-bold grid place-items-center px-4"
              }
            >
              TEAM
            </p>
          </Link>
          <Link href="/product" passHref>
            <p
              className={
                router.pathname == "/product"
                  ? "bg-orange-200 text-black cursor-pointer hover:bg-orange-300 grid place-items-center px-4"
                  : "text-black cursor-pointer hover:bg-orange-200 font-bold grid place-items-center px-4"
              }
            >
              PRODUCTS
            </p>
          </Link>
          <Link href="/contact" passHref>
            <p
              className={
                router.pathname == "/contact"
                  ? "bg-orange-200 text-black cursor-pointer hover:bg-orange-300 grid place-items-center px-4"
                  : "text-black cursor-pointer hover:bg-orange-200 font-bold grid place-items-center px-4"
              }
            >
              CONTACT
            </p>
          </Link>
          <div className="h-full bg-primary px-4 text-xl text-white">
            <div className="flex w-full justify-end">
              <div className="w-1/4 text-2xl grid place-items-center">
                <MdPhoneInTalk />
              </div>
              <div className="w-3/4 px-4 mr-4 my-2">
                <Link href="" passHref>
                  <p>+84534534534</p>
                </Link>
                <Link href="" passHref>
                  <p>+84534534534</p>
                </Link>
                <Link href="tel:" passHref>
                  <p>+84534534534</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="md:hidden sticky top-0 fixed z-10 flex text-black w-full bg-white">
        <div className="mt-2 w-3/4">
          <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
          {isOpen ? (
            <div className="font-bold py-4 w-full mr-8">
              <Link href="/" passHref>
                <p
                  className={
                    router.pathname == "/"
                      ? "cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-primary bg-primary h-8 text-white font-bold px-4"
                      : "cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-black hover:bg-primary h-8 text-black font-bold px-4"
                  }
                >
                  Home
                </p>
              </Link>
              <Link href="/about" passHref>
                <p
                  className={
                    router.pathname == "/about"
                      ? "cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-primary bg-primary h-8 text-white font-bold px-4"
                      : "cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-black hover:bg-primary h-8 text-black font-bold px-4"
                  }
                >
                  About us
                </p>
              </Link>
              <Link href="/product" passHref>
                <p
                  className={
                    router.pathname == "/product"
                      ? "cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-primary bg-primary h-8 text-white font-bold px-4"
                      : "cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-black hover:bg-primary h-8 text-black font-bold px-4"
                  }
                >
                  Product
                </p>
              </Link>
              <Link href="/contact" passHref>
                <p
                  className={
                    router.pathname == "/contact"
                      ? "cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-primary bg-primary h-8 text-white font-bold px-4"
                      : "cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:text-black hover:bg-primary h-8 text-black font-bold px-4"
                  }
                >
                  Contact
                </p>
              </Link>
              <div className="h-full bg-primary px-4 text-xl text-white">
            <div className="flex w-full justify-end">
              <div className="w-full px-4 mr-4 my-2">
                <Link href="" passHref>
                  <p>+84534534534</p>
                </Link>
                <Link href="" passHref>
                  <p>+84534534534</p>
                </Link>
                <Link href="tel:" passHref>
                  <p>+84534534534</p>
                </Link>
              </div>
            </div>
          </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-1/2">
        <Link href="/" passHref><img src="logo.jpg" alt="logo" className="h-8" /></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
