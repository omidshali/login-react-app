import React from "react";
import loginImg from "../assets/01.jpg";

const Login = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block">
        <img className="h-full w-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-gray-100 w-full h-full flex flex-col justify-center">
        <form className=" bg-white max-w-[400px] w-full mx-auto p-4">
          <h2 className="text-3xl font-bold text-center py-6">BRAND</h2>
          <div className="flex flex-col py-2">
            <label htmlFor="username">Username</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="password">Password</label>
            <input className="border p-2" type="password" />
          </div>
          <button className="w-full border py-2 my-5 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me{" "}
            </p>
            <p>Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
