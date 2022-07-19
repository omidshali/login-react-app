import React from "react";
import ImgTrees from "../assets/03.jpg";

const Login3 = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] max-w-[1200px] w-[80%]  shadow-xl shadow-gray-400 ">
        <div className="hidden w-full h-[550px] md:block relative">
          <div className="bg-zinc-700/80 w-full h-full absolute"></div>
          <img
            className="w-full h-full object-cover  mix-blend-overlay"
            src={ImgTrees}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-around p-8 h-full">
          <form className=" " action="">
            <h1 className="text-center text-4xl font-bold">BRAND.</h1>
            <div className="flex w-full gap-2 justify-between mt-8">
              <input
                className="border p-2 w-full"
                type="text"
                placeholder="Username"
              />
              <input
                className="border p-2 w-full"
                type="Password"
                placeholder="Password"
              />
            </div>
            <button className="w-full bg-green-700 py-2 text-white mt-4">
              Sign in
            </button>
            <p className="mt-4">Forgot Username or Password?</p>
          </form>
          <p className="text-center">Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Login3;
