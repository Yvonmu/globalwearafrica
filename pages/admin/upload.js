import axios from "axios";
import React, { useState } from "react";
import Dashboard from "../../components/dashboard";

export default function Index() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [title1, setTitle1] = useState("");
  const [details, setDetails] = useState("");
  const [img, setImg] = useState("");
  const [clientImg, setClientImg] = useState("");
  const [clientHandler, setClientHandler] = useState([]);
  const [handler, setHandler] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [img1, setImg1] = useState("");
  const projectSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading1(true);
    const mainImage = new FormData();
    mainImage.append("file", img);
    mainImage.append("upload_preset", "jl05a008");

    const mainRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dbqwmndns/image/upload",
      mainImage
    );
    const image = await mainRes.data.secure_url;
    const info = { title, details, image };
    await axios
      .post("../api/project", info)
      .then((res) => {
        setHandler([...handler, res.data.data]);
        setTitle("");
        setDetails("");
        setLoading1(false);
        return alert("project Member uploaded successful");
      })
      .catch((err) => {
        setLoading1(false);
        alert(err);
      });
  };
  const clientSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading2(true);
    const mainImage = new FormData();
    mainImage.append("file", clientImg);
    mainImage.append("upload_preset", "jl05a008");

    const mainRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dbqwmndns/image/upload",
      mainImage
    );
    const image = await mainRes.data.secure_url;
    const info = { image };
    await axios
      .post("../api/clients", info)
      .then((res) => {
        setClientHandler([...clientHandler, res.data.data]);
        setLoading2(false);
        return alert("Client Uploaded");
      })
      .catch((err) => {
        setLoading2(false);
        alert(err);
      });
  };
  const teamSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const mainImage = new FormData();
    mainImage.append("file", img1);
    mainImage.append("upload_preset", "jl05a008");

    const mainRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dbqwmndns/image/upload",
      mainImage
    );
    const image = await mainRes.data.secure_url;
    const info = { name, title: title1, image, instagram, linkedin, twitter };
    await axios
      .post("../api/team", info)
      .then((res) => {
        setHandler([...handler, res.data.data]);
        setName("");
        setTitle1("");
        setInstagram("");
        setLinkedin("");
        setTwitter("");
        setLoading(false);
        return alert("Team Member uploaded successful");
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };
  return (
    <>
      <Dashboard>
        <div className="bg-white md:p-10">
          <div className="container py-8 flex sm:flex-wrap">
            <div className="sm:w-full md:w-1/2 bg-white rounded shadow-xl">
              <div className="py-4 text-center bg-gray-400 px-8 text-black text-xl border-b border-grey-lighter">
                Create Product
              </div>
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-full mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="first_name"
                    >
                      Title
                    </label>
                    <select
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="first_name"
                      type="text"
                      placeholder="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    >
                      <option></option>
                      <option>Boots</option>
                      <option>Uniforms</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-7 sm:col-span-3">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    {" "}
                    Project Description
                  </label>
                  <textarea
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    placeholder="Description"
                    rows="3"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm w-full font-medium text-gray-700">
                    Project photo
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-3 pb-4 w-full -mr-4 border-2 border-gray-300 border-dashed rounded-md ">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-6 w-6 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="True"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            onChange={(e) => setImg(e.target.files[0])}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button
                    onClick={projectSubmitHandler}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Upload Project
                  </button>
                </div>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 bg-white rounded shadow-xl">
              <div className="py-4 text-center bg-primary px-8 text-white text-xl border-b border-grey-lighter">
                Upload others
              </div>
              <div className="p-4 flex space-x-4">
                <label className="text-xl w-1/2 font-bold">Upload Client</label>
                <input
                  onChange={(e) => setClientImg(e.target.files[0])}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                />
                <div className="px-3 hover:bg-green-600 text-3xl bg-primary text-center text-center">
                  <button onClick={clientSubmitHandler}>+</button>
                </div>
              </div>
              <hr />
              <div className="p-4 ">
                <label className="text-xl font-bold mb-4">Upload Team</label>
                <div className="py-4 px-8">
                  <div className="mb-4">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="name"
                      type="text"
                      placeholder="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex mb-4">
                    <div className="w-full mr-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="first_name"
                      >
                        Title
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={title1}
                        onChange={(e) => setTitle1(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/3">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="IG"
                      >
                        IG
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="IG"
                        type="url"
                        placeholder="https://"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    </div>
                    <div className="w-1/3">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="Linkedin"
                      >
                        Linkedin
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="Linkedin"
                        type="url"
                        placeholder="https://"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </div>
                    <div className="w-1/3">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="Twitter"
                      >
                        Twitter
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="Twitter"
                        type="url"
                        placeholder="https://"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm w-full font-medium text-gray-700">
                      Profile photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-3 pb-4 w-full -mr-4 border-2 border-gray-300 border-dashed rounded-md ">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-6 w-6 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="True"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              onChange={(e) => setImg1(e.target.files[0])}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-8">
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
                        type="submit"
                        onClick={teamSubmitHandler}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Upload
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
}
