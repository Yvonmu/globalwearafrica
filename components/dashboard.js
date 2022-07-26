import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { Store } from "../utils/store";
import Cookies from "js-cookie";
import { RiLogoutBoxLine } from "react-icons/ri";

const Dashboard = (props) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { infoMu } = state;
  const handleLogout = () => {
    dispatch({ type: "PROFILE_LOGOUT" });
    Cookies.remove("infoMu");
    router.push("/login");
  };
  useEffect(() => {
    if (!infoMu) {
      router.push("/login");
    }
  }, []);
  return (
    <section>
      <div className="flex h-screen">
        <div className="px-4 py-2 bg-primary lg:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-8 h-8 text-white lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="hidden lg:block">
            <div className="my-2 mb-6">
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            </div>
            <hr />
            <ul className="pt-8">
              <li
                className={
                  router.pathname == "/admin"
                    ? "mb-2 bg-gray-800 rounded shadow"
                    : "mb-2 rounded hover:shadow hover:bg-gray-800"
                }
              >
                <Link href="../admin/" passHref>
                  <a className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-6 h-6 mr-2 -mt-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/admin/upload"
                    ? "mb-2 bg-gray-800 rounded shadow"
                    : "mb-2 rounded hover:shadow hover:bg-gray-800"
                }
              >
                <Link href="../admin/upload" passHref>
                  <a className="inline-block flex space-x-2 w-full h-full px-3 py-2 font-bold text-white">
                    <BsFillCloudUploadFill className="text-2xl" />
                    <span>Upload</span>
                  </a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/admin/report"
                    ? "mb-2 bg-gray-800 rounded shadow"
                    : "mb-2 rounded hover:shadow hover:bg-gray-800"
                }
              >
                <Link href="../admin/report" passHref>
                  <a className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-6 h-6 mr-2 -mt-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Reports
                  </a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/admin/inbox"
                    ? "mb-2 bg-gray-800 rounded shadow"
                    : "mb-2 rounded hover:shadow hover:bg-gray-800"
                }
              >
                <Link href="../admin/inbox" passHref>
                  <a className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-6 h-6 mr-2 -mt-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Inbox
                  </a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/admin/account"
                    ? "mb-2 bg-gray-800 rounded shadow"
                    : "mb-2 rounded hover:shadow hover:bg-gray-800"
                }
              >
                <Link href="../admin/account" passHref>
                  <a className="inline-block flex space-x-2 w-full h-full px-3 py-2 font-bold text-white">
                    <AiOutlineUsergroupAdd className="text-2xl" />
                    <span>User</span>
                  </a>
                </Link>
              </li>
              <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                <a
                  onClick={handleLogout}
                  className="inline-block cursor-pointer flex space-x-2 w-full h-full px-3 py-2 font-bold text-white"
                >
                  <RiLogoutBoxLine className="text-2xl" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
