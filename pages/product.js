import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const Product = () => {
  return (
    <Layout>
      <section className="bg-[url('/images/course_1.jpg')] bg-no-repeat bg-cover h-screen grid place-items-center text-white md:-mt-36">
        <div>
        <h1 className="md:text-6xl sm:text-3xl sm:text-center text-orange-200 font-bold">
            Global Wear Africa Ltd
          </h1>
          <h4 className="text-xl mt-8 sm:text-center">
            <Link href="/" passHref>
              <span className="cursor-pointer hover:text-orange-200 hover:underline">
                Home /
              </span>
            </Link>{" "}
            Our Product
          </h4>
        </div>
      </section>
      <section className="flex justify-center pb-52 md:-mt-52">
        <div className="md:w-3/4 shadow-2xl bg-white md:p-8 sm:p-2">
          <div className="flex shadow-xl py-4 w-full sm:px-2 justify-center sm:space-x-2 md:space-x-20">
            <Link href="" passHref><p className="cursor-pointer overline  sm:text-xs text-primary decoration-4">ALL</p></Link>
            <Link href="" passHref><p className="cursor-pointer sm:text-xs">BOOTS</p></Link>
            <Link href="" passHref><p className="cursor-pointer sm:text-xs">UNIFORM</p></Link>
            <Link href="" passHref><p className="cursor-pointer sm:text-xs">OTHERS</p></Link>
          </div>
          <div className="my-12 grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 sm:gap-2">
            <div className="img__wrap">
              <img src="images/bg.png" alt=""/>
              <p className="img__description">This image looks super neat.</p>
              <p className="img__description">This image looks super neat.</p>
            </div>
            <div className="img__wrap">
              <img src="images/course_1.jpg" alt=""/>
              <p className="img__description">This image looks super neat.</p>
            </div>
            <div className="img__wrap">
              <img src="images/laptop.jpg" alt=""/>
              <p className="img__description">This image looks super neat.</p>
            </div>
            <div className="img__wrap">
              <img src="images/me.png" alt=""/>
              <p className="img__description">This image looks super neat.</p>
            </div>
            <div className="img__wrap">
              <img src="images/bg.png" alt=""/>
              <p className="img__description">This image looks super neat.</p>
            </div>
            <div className="img__wrap">
              <img src="images/course_1.jpg" alt=""/>
              <p className="img__description">This image looks super neat.</p>
            </div>
            <div className="img__wrap">
              <img src="images/laptop.jpg" alt=""/>
              <p className="img__description">This image looks super neat.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
