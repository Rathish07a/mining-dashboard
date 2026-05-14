
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    // DEFAULT ADMIN CREDENTIALS
    const defaultUsername = "admin";
    const defaultPassword = "mining123";

    if (
      username === defaultUsername &&
      password === defaultPassword
    ) {

      localStorage.setItem("isLoggedIn", "true");

      router.push("/dashboard");

    } else {

      setError("Invalid username or password");
    }
  };

  const forgotPassword = () => {

    alert(
      "Default Admin Credentials:\n\nUsername: admin\nPassword: mining123"
    );
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="bg-[#161b22] p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white mb-2">
            Login to Geovance
          </h1>

          <p className="text-gray-400">
            Admin Control Panel Login
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>

            <label className="block text-gray-300 mb-2">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full p-3 rounded-xl bg-[#0d1117] text-white border border-gray-600 focus:outline-none"
            />

          </div>

          <div>

            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-3 rounded-xl bg-[#0d1117] text-white border border-gray-600 focus:outline-none"
            />

          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
          >
            Login
          </button>

        </form>

        <div className="mt-6 text-center">

          <button
            onClick={forgotPassword}
            className="text-blue-400 hover:underline"
          >
            Forgot Password?
          </button>

        </div>

      </div>

    </div>
  );
}


