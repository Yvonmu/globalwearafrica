import Link from "next/link";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import Layout from "../components/Layout";
import { BsClock, BsFillTelephoneOutboundFill } from "react-icons/bs";
import axios from "axios";

const Contact = () => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      names,
      email,
      phone,
      message,
    };
    if (!email || !message) {
      alert("Please fill required field!");
    } else {
      await axios
        .post("/api/query", data)
        .then((res) => {
          setQuery([...query, res.data.data]);
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
          return alert("Sent!");
        })
        .catch((err) => {
          setLoading(false);
          alert("Error sending! Kindly resend");
        });
    }
  };
  return (
    <Layout>
      <section className="bg-[url('/images/course_1.jpg')] bg-no-repeat bg-cover h-screen grid place-items-center text-white md:-mt-36">
        <div>
          <h1 className="text-6xl text-orange-200 font-bold">
            Global Wear Africa Ltd
          </h1>
          <h4 className="text-xl mt-8">
            <Link href="/" passHref>
              <span className="cursor-pointer hover:text-orange-200 hover:underline">
                Home /
              </span>
            </Link>{" "}
            Contact Us
          </h4>
        </div>
      </section>
      <section className="flex justify-center pb-52 -mt-52">
        <div className="w-3/4 shadow-2xl bg-secondary p-8">
          <div className="w-full flex justify-center">
            <div className="flex w-3/4 space-x-20 justify-center">
              <div
                style={{ backgroundColor: "#D9D9D9" }}
                className="py-4 px-4 rounded-2xl w-1/2"
              >
                <h1 className="text-2xl pb-2 text-white text-center">
                  CONTACTS
                </h1>
                <div className="flex">
                  <div className="grid place-items-center">
                    <BsFillTelephoneOutboundFill className="w-1/4 -mt-4 text-8xl" />
                  </div>
                  <div>
                    <Link href="" passHref>
                      <p className="cursor-pointer">+84534534534 (RWANDA)</p>
                    </Link>
                    <Link href="" passHref>
                      <p className="my-2 cursor-pointer">
                        +84534534534 (RWANDA)
                      </p>
                    </Link>
                    <Link href="" passHref>
                      <p className="cursor-pointer">+84534534534 (RWANDA)</p>
                    </Link>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="flex">
                  <MdEmail className="w-1/4 text-2xl" />
                  <Link href="" passHref>
                    <p className="cursor-pointer">info@someone.com</p>
                  </Link>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#D9D9D9" }}
                className="py-4 px-4 rounded-2xl w-1/2"
              >
                <h1 className="text-2xl pb-2 text-white text-center">
                  WORK TIME
                </h1>
                <div className="flex">
                  <div className="grid place-items-center">
                    <BsClock className="w-1/4 -mt-4 text-8xl" />
                  </div>
                  <div>
                    <Link href="" passHref>
                      <p className="cursor-pointer">
                        RWANDA : Mon to Fri: 9:00 AM to 6:00 PM
                      </p>
                    </Link>
                    <Link href="" passHref>
                      <p className="my-2 cursor-pointer">
                        RWANDA : Mon to Fri: 9:00 AM to 6:00 PM
                      </p>
                    </Link>
                    <Link href="" passHref>
                      <p className="cursor-pointer">
                        RWANDA : Mon to Fri: 9:00 AM to 6:00 PM
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="text-4xl font-bold text-center underline my-8">
              Talk to Us
            </h4>
          <div className="flex justify-center my-8">
          <div className="w-3/5">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 my-4">
              <input
                type="name"
                id="name"
                className="shadow-sm gray border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="John Doe"
                value={names}
                onChange={(e) => setNames(e.target.value)}
              />
              <input
                type="email"
                id="email"
                className="shadow-sm gray border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="info@someone.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                id="number"
                className="shadow-sm gray border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="+(xxx)xxxxxxxxxx"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              id="text"
              rows="5"
              className="block p-2.5 w-full text-sm text-gray-900 gray border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-center my-8">
              {loading ? (
                <div className="flex justify-center items-center space-x-2">
                  <div
                    className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="
                          spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
                            text-purple-500
                          "
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="
                    spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
                      text-green-500
                    "
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-yellow-500
            "
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="w-1/2 hover:bg-blue-900 bg-primary text-center py-2 text-white font-bold text-xl"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
