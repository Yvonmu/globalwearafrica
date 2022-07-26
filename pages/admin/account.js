import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/store";
import Dashboard from "../../components/dashboard"

const Account = () => {
    const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { redirect } = router.query;
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
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      setLoading(false);
      // enqueueSnackbar("Passwords don't match", { variant: 'error' });
      return;
    } else {
      const info = {
        username,
        email,
        password,
      };
      try {
        const res = await axios
          .post("../api/admin/register", info)
          .catch((data) => {
            if (data.message == "Request failed with status code 409")
              alert("Email already Exists.");
            else alert("check your internet connection.");
          });
        if (res) {
          if (res.status == 201) {
            dispatch({ type: "PROFILE_LOGIN", payload: res });
            Cookies.set("infoMu", JSON.stringify(res));
            router.push(redirect || "./");
          }
        }
        setLoading(false);
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    }
  };
  return (
    <Dashboard>
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Create Account</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" value={username}
                        onChange={(e) => setUserName(e.target.value)} />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />

{loading ? (
                  <svg
                    role="status"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <button
                    onClick={submitHandler}
                    className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  >
                    Create Account
                  </button>
                )}

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By Creating Account, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Dashboard>
  )
}

export default Account