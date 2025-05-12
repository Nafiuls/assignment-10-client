import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../utils/CustomHooks/UseAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { handleSignIn, handleGoogle } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignIn(email, password)
      .then(() => {
        toast.success("Login successfull!");
        navigate(location.state?.from || "/");
      })
      .catch(() => {
        toast.error("Somthing went wrong");
      });
  };
  //   handle google fnc
  const handleSocial = () => {
    handleGoogle()
      .then(() => {
        toast.success("Login successfull!");
        navigate(location.state?.from || "/");
      })
      .catch(() => {
        toast.error("Somthing went wrong");
      });
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 rounded-lg lg:w-md  bg-[#1A1E29] p-5"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="w-full">
          <p className="mb-2 font-semibold">Email:</p>
          <input
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white "
            type="email"
            name="email"
            placeholder="Your email"
          />
        </div>
        <div className="w-full">
          <p className="mb-2 font-semibold">Passowrd:</p>
          <input
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white "
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        {/* social login */}
        <button
          onClick={handleSocial}
          className="border-2 capitalize hover:bg-white transition-all hover:text-black cursor-pointer flex items-center justify-center gap-3 border-[#262B39] py-2 font-medium rounded-sm"
        >
          <FcGoogle />
          <p>Sign in with google</p>
        </button>
        <button className=" btc font-medium textarea-lg py-2 rounded-md cursor-pointer">
          Login
        </button>
        <p className="text-center textarea-md">
          Have an account?{" "}
          <Link
            to={"/register"}
            className="txt underline hover:text-[#e6bd3f] "
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
