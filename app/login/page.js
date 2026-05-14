"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (username === "admin" && password === "1234") {

      localStorage.setItem("loggedIn", "true");

      router.push("/dashboard");

    } else {

      alert("Invalid Login");

    }
  };

  return (

    <div className="h-screen flex items-center justify-center bg-gray-900">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Mining Robot Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white w-full p-3 rounded"
        >
          Login
        </button>

      </div>

    </div>
  );
}