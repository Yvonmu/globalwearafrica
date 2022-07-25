import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  BsClockFill,
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const About = () => {
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
            About us
          </h4>
        </div>
      </section>
      <section className="flex justify-center -mt-52">
        <div className="w-3/4 shadow-2xl bg-white p-8">
          <div className="flex sm:flex-wrap px-8 space-x-4">
            <div className=" w-1/4">
              <h1 className="md:text-3xl font-bold mr-12 text-center w-1/4">
                COMPANY OVERVIEW
              </h1>
            </div>
            <div className="w-3/4">
              <div className="shadow-2xl p-4">
                <Tabs className="Tabs">
                  <TabList className="shadow flex font-bold">
                    <Tab>OVERVIEW</Tab>
                    <Tab>MISSION</Tab>
                    <Tab>VISION</Tab>
                    <Tab>CORE VALUE</Tab>
                  </TabList>
                  <TabPanel>
                    <p className="py-8 text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>Tab 2 works!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Tab 3 works!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Tab 4 works!</p>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#808080" }}
            id="team"
            className="-mx-8 my-12 p-8"
          >
            <h2 className="text-black md:text-2xl font-bold mb-8">Our Team</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white flex space-x-8 p-4">
                <div className="h-24 w-24">
                  <img src="images/me.png" alt="me" className="rounded-full" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">JOHN DOE</h1>
                  <h4 className="py-2">Managing Director</h4>
                  <div className="flex text-secondary sm:space-x-4 md:space-x-4">
                    <BsInstagram className="text-2xl" />
                    <BsTwitter className="text-2xl" />
                    <BsWhatsapp className="text-2xl" />
                    <BsFacebook className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="bg-white flex space-x-8 p-4">
                <div className="h-24 w-24">
                  <img src="images/me.png" alt="me" className="rounded-full" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">JOHN DOE</h1>
                  <h4 className="py-2">Managing Director</h4>
                  <div className="flex text-secondary sm:space-x-4 md:space-x-4">
                    <BsInstagram className="text-2xl" />
                    <BsTwitter className="text-2xl" />
                    <BsWhatsapp className="text-2xl" />
                    <BsFacebook className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="bg-white flex space-x-8 p-4">
                <div className="h-24 w-24">
                  <img src="images/me.png" alt="me" className="rounded-full" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">JOHN DOE</h1>
                  <h4 className="py-2">Managing Director</h4>
                  <div className="flex text-secondary sm:space-x-4 md:space-x-4">
                    <BsInstagram className="text-2xl" />
                    <BsTwitter className="text-2xl" />
                    <BsWhatsapp className="text-2xl" />
                    <BsFacebook className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="bg-white flex space-x-8 p-4">
                <div className="h-24 w-24">
                  <img src="images/me.png" alt="me" className="rounded-full" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">JOHN DOE</h1>
                  <h4 className="py-2">Managing Director</h4>
                  <div className="flex text-secondary sm:space-x-4 md:space-x-4">
                    <BsInstagram className="text-2xl" />
                    <BsTwitter className="text-2xl" />
                    <BsWhatsapp className="text-2xl" />
                    <BsFacebook className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="bg-white flex space-x-8 p-4">
                <div className="h-24 w-24">
                  <img src="images/me.png" alt="me" className="rounded-full" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">JOHN DOE</h1>
                  <h4 className="py-2">Managing Director</h4>
                  <div className="flex text-secondary sm:space-x-4 md:space-x-4">
                    <BsInstagram className="text-2xl" />
                    <BsTwitter className="text-2xl" />
                    <BsWhatsapp className="text-2xl" />
                    <BsFacebook className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="bg-white flex space-x-8 p-4">
                <div className="h-24 w-24">
                  <img src="images/me.png" alt="me" className="rounded-full" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">JOHN DOE</h1>
                  <h4 className="py-2">Managing Director</h4>
                  <div className="flex text-secondary sm:space-x-4 md:space-x-4">
                    <BsInstagram className="text-2xl" />
                    <BsTwitter className="text-2xl" />
                    <BsWhatsapp className="text-2xl" />
                    <BsFacebook className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="bg-white flex space-x-8 p-4">
                <div className="h-24 w-24">
                  <img src="images/me.png" alt="me" className="rounded-full" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">JOHN DOE</h1>
                  <h4 className="py-2">Managing Director</h4>
                  <div className="flex text-secondary sm:space-x-4 md:space-x-4">
                    <BsInstagram className="text-2xl" />
                    <BsTwitter className="text-2xl" />
                    <BsWhatsapp className="text-2xl" />
                    <BsFacebook className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* working hours */}
          <div>
            <h4 className="text-4xl font-bold text-center underline mb-8">
              WORKING HOURS
            </h4>
            <p className="text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex justify-center py-8">
              <div className="grid grid-cols-2 gap-y-8 mt-8 w-3/4">
                <div className="flex space-x-4">
                  <MdLocationOn className="text-3xl text-secondary" />
                  <div>
                    <h1 className="font-bold text-xl">Head-Quater</h1>
                    <span>Kigali/Rwanda</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <BsClockFill className="text-3xl text-secondary" />
                  <div>
                    <h1 className="font-bold text-xl">OFFICE TIME</h1>
                    <p>Monday–Saturday</p>
                    <span>08:00am – 08:00pm</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <BsPhone className="text-3xl text-secondary" />
                  <div>
                    <h1 className="font-bold text-xl">Phone</h1>
                    <span>+250780000/+25729000000</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <MdEmail className="text-3xl text-secondary" />
                  <div>
                    <h1 className="font-bold text-xl">Email Address</h1>
                    <span>info@someone.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h4 className="text-4xl my-8 font-bold text-center underline mb-8">
          SITE MAP
        </h4>
        <div className="bg-gray-200 w-full rounded shadow hover:shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4634380784514!2d30.100547214224314!3d-1.9686432985647826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76b2e5951ad%3A0x8d8af363e7799732!2sLito%20Ris%20Design!5e0!3m2!1sen!2srw!4v1643460572697!5m2!1sen!2srw"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
};

export default About;
