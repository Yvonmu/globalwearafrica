import Link from "next/link";
import React from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdEmail, MdOutlineLocationCity } from "react-icons/md";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary md:py-16 text-white">
      <div className="flex sm:flex-wrap md:space-x-8 mb-16">
        <div className="md:w-1/2 md:px-8 sm:px-4">
          <img src="logo.jpg" alt="global wear" className="mb-8 sm:my-8" />
          <p className="md:w-1/2">
            Our Company is engaged in manufacturing and procuring quality
            Military and Police Garments and other corporate uniforms for
            various sectors.
          </p>
          <div className="flex text-secondary my-4 sm:space-x-4 md:space-x-4">
            <BsInstagram className="text-2xl" />
            <BsTwitter className="text-2xl" />
            <BsPinterest className="text-2xl" />
            <BsWhatsapp className="text-2xl" />
            <BsFacebook className="text-2xl" />
          </div>
        </div>
        <div className="grid md:w-3/4 mt-8 md:grid-cols-3 sm:grid-cols-1 sm:mx-2">
          <div>
            <h1 className="text-2xl pb-4 text-white font-bold">USEFUL LINKS</h1>
            <ul className="list-disc px-8 text-white">
              <Link href="/" passHref>
                <li className=" cursor-pointer">Home Page</li>
              </Link>
              <Link href="/about" passHref>
                <li className=" cursor-pointer">About Us</li>
              </Link>
              <Link href="/product" passHref>
                <li className=" cursor-pointer">Our Product</li>
              </Link>
              <Link href="/contact" passHref>
                <li className=" cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl pb-4 text-white font-bold">Support</h1>
            <ul className="list-disc px-8 text-white">
              <Link href="/">
                <li className=" cursor-pointer">Private Policies</li>
              </Link>
              <Link href="/">
                <li className=" cursor-pointer">Terms & Condition</li>
              </Link>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl pb-4 text-white font-bold">Contact</h1>
            <ul className="text-white">
              <div className="flex space-x-4 mb-4">
                <MdOutlineLocationCity className="text-2xl text-secondary" />

                  <li className=" cursor-pointer">
                    012397019 Marter, Istanbul Republic of Turkey{" "}
                  </li>
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="grid place-items-center">
                  <GiVibratingSmartphone className="text-2xl text-secondary" />
                </div>
                <div>
                  <Link href="tel:">
                    <a className=" cursor-pointer"> +905392927098 </a>
                  </Link>
                  <Link href="tel:">
                    <a className=" cursor-pointer"> +221773335750 </a>
                  </Link>
                  <Link href="tel:">
                    <a className=" cursor-pointer"> +250788313540 </a>
                  </Link>
                </div>
              </div>
              <div className="flex space-x-4 mb-4">
                <MdEmail className="text-2xl text-secondary" />

                <Link href="mailto: info@globalwear.biz">
                  <a className=" cursor-pointer">info@globalwear.biz </a>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex sm:flex-wrap mt-4 w-full text-gray-400">
        <p className="md:w-1/2 w-full md:text-center">Copyright © 2022 LimozRwanda Ltd</p>
        <p className="md:w-1/2 text-center">Copyright © 2018 LimozRwanda Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
