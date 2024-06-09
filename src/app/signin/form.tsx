import React from "react";
import Link from "next/link";

const SignInForm = () => {
  return (
    <div className="">
      <div className="p-5 h-screen place-content-center space-y-8">
        <form className="max-w-[400px] mx-auto text-center space-y-4 border border-slate-300 rounded-lg shadow-lg p-5">
          <input
            name="email"
            type="text"
            className="w-full block border border-slate-300 focus-visible:outline-none focus-visible:bg-slate-100 rounded-lg px-4 py-2"
            placeholder="enter your email"
            required={true}
          />
          <input
            name="password"
            type="password"
            className="w-full block border border-slate-300 focus-visible:outline-none focus-visible:bg-slate-100 rounded-lg px-4 py-2"
            placeholder="enter your password"
            required={true}
          />
          <button className="w-full block border-none bg-slate-600 hover:bg-slate-700 text-white transition-colors duration-100 ease-linear rounded-lg px-4 py-2">
            Sign In
          </button>
        </form>
        <h2 className="w-fit mx-auto text-sm font-medium capitalize">
          No Account created yet,{" "}
          <Link href="/signup" className="underline text-cyan-600">
            create an account
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default SignInForm;
