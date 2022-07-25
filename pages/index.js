import React from "react";
import Layout from "../components/Layout";
import { GiEarthAfricaEurope, GiGlobe, GiTruck } from "react-icons/gi";
import { RiGovernmentFill } from "react-icons/ri";

const Home = () => {
  return (
    <Layout>
      <section className="bg-[url('/images/bg.png')] bg-no-repeat bg-cover h-screen md:-mt-36">
        
      </section>
      <section className="mx-32 md:-mt-24">
        <div className="grid md:grid-cols-3 sm:hidden gap-x-32">
          <div className="bg-primary p-6 grid place-items-center">
            <GiGlobe className="text-6xl text-secondary" />
            <p className="font-serif font-bold text-3xl text-white mt-4">
              GOVERNMENT
            </p>
          </div>
          <div
            className="p-6 grid place-items-center"
            style={{ backgroundColor: "#00AEEA" }}
          >
            <RiGovernmentFill className="text-6xl text-secondary" />
            <p className="font-serif font-bold text-xl text-white">
              NON-GOVERNMENT
            </p>
          </div>
          <div className="bg-primary p-6 grid place-items-center">
            <GiTruck className="text-6xl text-secondary" />
            <p className="font-serif text-xl text-white">COMPANIES</p>
          </div>
        </div>
      </section>
      {/* popular wear */}
      <section className="my-12 w-full flex flex-wrap justify-center">
        <h1 className="text-center pt-12 md:text-2xl w-full font-bold underline decoration-8 decoration-orange-200">
          POPULAR WEAR
        </h1>
        <div className="flex sm:flex-wrap mt-12 w-3/5 space-x-28">
          <div className="w-1/3 bg-black">
            <div className="h-56">adf</div>
            <div className="bg-primary text-center p-2">
              <h1 className="uppercase text-2xl py-2 font-serif text-white">
                military wear
              </h1>
              <p className="text-gray-400 text-sm">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur,
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-black">
            <div className="h-56">adf</div>
            <div className="bg-primary text-center p-2">
              <h1 className="uppercase text-2xl py-2 font-serif text-white">
                military wear
              </h1>
              <p className="text-gray-400 text-sm">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur,
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-black">
            <div className="h-56">adf</div>
            <div className="bg-primary text-center p-2">
              <h1 className="uppercase text-2xl py-2 font-serif text-white">
                military wear
              </h1>
              <p className="text-gray-400 text-sm">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur,
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* about us */}
      <section className="flex sm:flex-wrap w-full">
        <div
          className="w-3/4 text-center text-white py-24 px-16"
          style={{ backgroundColor: "#272F07" }}
        >
          <h1 className="md:text-5xl sm:text-2xl mb-4">
            Welcome to Global Wear Africa
          </h1>
          <div className="w-full flex justify-center mb-6">
            <hr className="h-4 w-1/2" />
          </div>
          <p>
            GLOBAL WEAR AFRICA is a Global company registered under the register
            of companies in the Republic of Rwanda, with our partner company
            INFOGROUP GLOBAL registered in Turkey, Belgium Italy and a sister
            company registered in Tanzania. Our main ambition of becoming a Pan
            African company passionately dedicated into defense garment industry
            so that we manufacture and procure quality clothing for African
            Defence market.{" "}
          </p>
          <div className="flex sm:flex-wrap w-full md:space-x-12">
            <div className="w-1/3 my-12">
              <h2 className="underline font-bold text-xl">MISSION</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque error sit voluptatem accusantium
                doloremque{" "}
              </p>
            </div>
            <div className="w-1/3 my-12">
              <h2 className="underline font-bold text-xl">VISION</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque error sit voluptatem accusantium
                doloremque{" "}
              </p>
            </div>
            <div className="w-1/3 my-12">
              <h2 className="underline font-bold text-xl">CORE VALUES</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque error sit voluptatem accusantium
                doloremque{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#101010",
            backgroundImage:
              "linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)),url(images/laptop.jpg)",
          }}
          className="w-1/2 bg-fixed bg-no-repeat bg-cover text-white pt-12"
        >
          <h1 className="text-center">General Query</h1>
          <div className="w-full flex justify-center">
            <hr className="h-2 w-1/2" />
          </div>
          <form className="mx-24 my-8">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-gray-300"
              >
                Full Names
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="info@someone.com"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="+(xxx)xxxxxxxxxx"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="text"
                rows="3"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button className="w-full hover:bg-blue-900 bg-primary text-center py-2 font-bold text-xl">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section style={{ backgroundColor: "#8EADD0" }} className="py-16">
      <h1 className="text-center md:text-2xl pb-8 w-full font-bold underline decoration-8 decoration-orange-200">
          HAPPY CLIENTS
        </h1>
              <div className="flex justify-center my-8">
              <div className="grid grid-cols-5 w-3/4 gap-y-8">
                <div className="bg-white h-28 w-48"></div>
                <div className="bg-white h-28 w-48"></div>
                <div className="bg-white h-28 w-48"></div>
                <div className="bg-white h-28 w-48"></div>
                <div className="bg-white h-28 w-48"></div>
                <div className="bg-white h-28 w-48"></div>
                <div className="bg-white h-28 w-48"></div>
                <div className="bg-white h-28 w-48"></div>
              </div>
              </div>
      </section>
    </Layout>
  );
};
export default Home;
