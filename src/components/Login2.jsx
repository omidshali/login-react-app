import React from "react";
import ImgDeveloper from "../assets/02.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

const Login2 = () => {
  return (
    <div className="w-full h-screen bg-zinc-800/90 relative">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={ImgDeveloper}
        alt=""
      />
      <div className="relative flex justify-center items-center w-full h-full">
        <form
          className="bg-white flex flex-col max-w-[400px] w-full p-8"
          action=""
        >
          <h1 className="text-4xl font-bold text-center py-4">BRAND.</h1>
          <div className="flex justify-between py-4">
            <p className="flex items-center gap-2 border px-6 py-2 shadow-lg">
              <AiFillFacebook />
              FaceBook
            </p>
            <p className="flex items-center gap-2 border px-6 py-2 shadow-lg">
              <FcGoogle />
              Google
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Username</label>
            <input className="border py-2 " type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">password</label>
            <input className="border py-2 " type="password" />
          </div>
          <button className="bg-indigo-600 mt-6 py-2 text-white hover:bg-indigo-500">
            Sighn in
          </button>
          <p className="flex items-center gap-2">
            <input type="checkbox" />
            Remmember Me
          </p>
          <p className="text-center mt-6">Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  );
};

export default Login2;
