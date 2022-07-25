import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { MdFacebook, MdPhone } from "react-icons/md";

const Footer = () => {
  var [dateTime, setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <footer className="bg-black md:p-8 text-white">
      <div className="flex justify-center space-x-16 mb-8 w-full">
        <p className="sm:hidden cursor-default text-5xl text-pink-900 sm:px-6 font-serif text-left md:w-1/4 pr-4">
          {" "}
          Date : {dateTime.toLocaleDateString()}
        </p>
        <div className="w-1/2 flex justify-center">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={200}
            height={150}
          />
        </div>
        <div className="sm:hidden cursor-default text-5xl text-pink-900 sm:px-6 font-serif text-right md:w-1/4 pr-4">
          {" "}
          Time : {dateTime.toLocaleTimeString()}
        </div>
      </div>
      <div className="grid mt-8 md:grid-cols-4 sm:grid-cols-1 gap-4 sm:mx-8">
        <div>
          <h1 className="text-2xl pb-4 text-pink-900 font-bold">Quick Links</h1>
          <ul className="list-disc px-8 text-gray-600">
            <Link href="/">
              <li className=" cursor-pointer">Home Page</li>
            </Link>
            <Link href="/">
              <li className=" cursor-pointer">Check-in</li>
            </Link>
            <Link href="/">
              <li className=" cursor-pointer">Flight-status</li>
            </Link>
            <Link href="/cars">
              <li className=" cursor-pointer">Cars</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl pb-4 text-pink-900 font-bold">About Us</h1>
          <ul className="list-disc px-8 text-gray-600">
            <Link href="/aboutus/#overview">
              <li className=" cursor-pointer">Overview</li>
            </Link>
            <Link href="/aboutus/#mission">
              <li className=" cursor-pointer">Mission & Vision</li>
            </Link>
            <Link href="/">
              <li className=" cursor-pointer">Our Locations</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl pb-4 text-pink-900 font-bold">Support</h1>
          <ul className="list-disc px-8 text-gray-600">
            <Link href="/">
              <li className=" cursor-pointer">Private Policies</li>
            </Link>
            <Link href="/">
              <li className=" cursor-pointer">Terms & Condition</li>
            </Link>
          </ul>
        </div>
        <div className="sm:text-sm">
          <h1 className="text-2xl pb-4 text-pink-900 font-bold">
            Contact Info
          </h1>
          <div className="flex text-gray-600 font-bold ml-4 space-x-2">
            <MdPhone />
            <Link href="tel:+250782866080" passHref>
              <h1 className="cursor-pointer">+250 788 888 000 (Rwanda)</h1>
            </Link>
          </div>
          <div className="flex my-4 text-gray-600 font-bold ml-4 space-x-2">
            <MdPhone />
            <Link href="tel:+250782866080" passHref>
              <h1 className="cursor-pointer">+250 788 888 000 (Cameroon)</h1>
            </Link>
          </div>
          <div className="flex my-4 text-gray-600 font-bold ml-4 space-x-2">
            <MdPhone />
            <Link href="tel:+250782866080" passHref>
              <h1 className="cursor-pointer">+250 788 888 000 (Cameroon)</h1>
            </Link>
          </div>
          <div className="flex md:text-4xl sm:text-2xl px-4 rounded-full space-x-10 sm:space-x-6 text-pink-900 mt-4">
            <Link href="" passHref>
              <a>
                <AiFillTwitterCircle className="hover:text-blue-600 cursor-pointer" />
              </a>
            </Link>
            <Link href="" passHref>
              <a>
                <MdFacebook className="hover:text-blue-600 cursor-pointer" />
              </a>
            </Link>
            <Link href="" passHref>
              <a>
                <FiInstagram className="hover:text-blue-600 cursor-pointer" />
              </a>
            </Link>
            <Link href="" passHref>
              <a>
                <AiFillLinkedin className="hover:text-blue-600 cursor-pointer" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex mt-4 w-full bg-black text-gray-400 py-2">
        <p className="w-1/2 text-center">Copyright © 2022 LimozRwanda Ltd</p>
        <p className="w-1/2 text-center">Copyright © 2018 LimozRwanda Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
