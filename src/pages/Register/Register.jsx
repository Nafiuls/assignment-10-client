import React, { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setError("Password Must Have 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password must have at least one uppercase letter");
    }
    if (!/[a-b]/.test(password)) {
      return setError("Password Must Have One Lowercase Letter");
    }
    setError("");
    console.log(name, email, image, password);
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-5 rounded-lg lg:w-md  bg-[#1A1E29] p-5"
      >
        <h1 className="text-2xl font-bold">Register</h1>
        <div className="w-full">
          <p className="mb-2 font-semibold">Name:</p>
          <input
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white "
            type="text"
            name="name"
            placeholder="Your name"
          />
        </div>
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
          <p className="mb-2 font-semibold">Photo URL:</p>
          <input
            className="outline-none w-full py-2 px-3 rounded-md bg-[#262B39] text-white "
            type="text"
            name="image"
            placeholder="Photo URL"
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
        <p className="text-center text-[#ffd447] text-lg">{error}</p>
        <button className=" btc font-medium textarea-lg py-2 rounded-md cursor-pointer">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
