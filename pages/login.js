import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/store";

const Login = () => {
    const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { redirect } = router.query; //login?redirect=/shipping

  const { state, dispatch } = useContext(Store);
  const { infoMu } = state;
  useEffect(() => {
    if (infoMu) {
      router.push("/dashboard");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const info = {
      email,
      password,
    };
    const res = await axios.post("/api/admin/login", info);
    console.log(res);
    if (res) {
      dispatch({ type: "PROFILE_LOGIN", payload: res });
      Cookies.set("infoMu", res);
      router.push(redirect || "/dashboard");
      setLoading(false);
    } else {
      alert("invalid email or Password");
      setLoading(false);
    }
  };
  return (
    <div>
      <section className="h-screen">
        <div className="px-6 mt-56 grid place-items-center text-gray-800">
            <div className="shadow-2xl flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full p-6">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-1/2 mb-12 md:mb-0">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                />
                </div>
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-5/12 mb-12 md:mb-0">
                <form>
                    <Link href="/" passHref>
                    <img src="logo.jpg" alt="logo" className="my-8" />
                    </Link>

                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                    <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id=""
                        placeholder="Email address"
                        value={email}
                            onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="mb-6">
                    <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="2"
                        placeholder="Password"
                        value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                        <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                        />
                        <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="exampleCheck2"
                        >
                        Remember me
                        </label>
                    </div>
                    <a href="#!" className="text-gray-800">
                        Forgot password?
                    </a>
                    </div>

                    <div className="text-center lg:text-left">
                    <button
                        type="button"
                        onClick={submitHandler}
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Login
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
