"use client";

import { useState } from "react";
import axios from "axios";

import Input from "@components/login/Input";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    const response = await axios
      .post("https://active-servers.com/calc-api/login", {
        email,
        password,
      })
      .catch((e) => {
        const { status } = e.toJSON();
        if (status === 400) {
          setError("Incorrect Credentials");
          return;
        }
        setError("Something went wrong, try again later.");
      });

    if (response?.data?.data) {
      const { accessToken } = response.data.data;
      localStorage.setItem("accessToken", accessToken);
      //   setError("");
      router.push("/admin");
    }
  };

  return (
    <div className="bg-gray-200 min-w-[100vw] min-h-[100vh] flex justify-center items-center">
      <div className="bg-white h-[100%] p-[36px] rounded-2xl">
        <h2 className="text-5xl mb-[48px] text-center">Login</h2>
        <form>
          <Input
            label="Email"
            name="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <button
            className="px-[16px] py-[8px] text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleLogin}
            type="button"
          >
            Login
          </button>
          {error && <p className="text-red-500 my-5">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
