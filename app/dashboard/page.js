"use client";

import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  FaTemperatureHigh,
  FaTint,
  FaSmog,
  FaRobot,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Dashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetchData();

    const interval = setInterval(() => {

      fetchData();

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const fetchData = async () => {

    try {

      const res = await fetch(
        "https://osvogm9118.execute-api.ap-south-1.amazonaws.com"
      );

      const result = await res.json();

      setData(result);

    } catch (error) {

      console.log(error);
    }
  };

  const latest = data[data.length - 1] || {};

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}

      <div className="w-72 bg-black text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          Swarm Mining
        </h1>

        <ul className="space-y-6 text-lg">

          <li className="bg-gray-800 p-3 rounded-xl">
            Dashboard
          </li>

          <li>
            Robots
          </li>

          <li>
            Gas Monitoring
          </li>

          <li>
            Alerts
          </li>

          <li>
            Settings
          </li>

        </ul>

      </div>

      {/* MAIN CONTENT */}

      <div className="flex-1 p-8">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              Underground Mining Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Real-Time Swarm Robot Monitoring
            </p>

          </div>

          <div className="bg-green-500 text-white px-6 py-3 rounded-2xl">
            SYSTEM ACTIVE
          </div>

        </div>

        {/* ALERT */}

        {(latest.gas > 2000) && (

          <div className="bg-red-500 text-white p-5 rounded-2xl mb-6 flex items-center gap-4">

            <FaExclamationTriangle size={35} />

            <div>

              <h2 className="text-2xl font-bold">
                Hazardous Gas Alert
              </h2>

              <p>
                Dangerous gas level detected in underground zone.
              </p>

            </div>

          </div>

        )}

        {/* SENSOR CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <div className="flex items-center gap-3">

              <FaTemperatureHigh size={30} />

              <h2 className="text-xl font-bold">
                Temperature
              </h2>

            </div>

            <p className="text-5xl mt-5 font-bold">
              {latest.temperature || 0}°C
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <div className="flex items-center gap-3">

              <FaTint size={30} />

              <h2 className="text-xl font-bold">
                Humidity
              </h2>

            </div>

            <p className="text-5xl mt-5 font-bold">
              {latest.humidity || 0}%
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <div className="flex items-center gap-3">

              <FaSmog size={30} />

              <h2 className="text-xl font-bold">
                Gas Level
              </h2>

            </div>

            <p className="text-5xl mt-5 font-bold">
              {latest.gas || 0}
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <div className="flex items-center gap-3">

              <FaRobot size={30} />

              <h2 className="text-xl font-bold">
                Active Robots
              </h2>

            </div>

            <p className="text-5xl mt-5 font-bold">
              4
            </p>

          </div>

        </div>
{/* SWARM ROBOTS */}

<div className="mb-8">

  <h2 className="text-3xl font-bold mb-5">
    Swarm Robot Status
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-bold">
            Robot 1
          </h3>

          <p className="text-green-600 font-semibold">
            ONLINE
          </p>

        </div>

        <FaRobot size={45} />

      </div>

      <div className="mt-5 space-y-2">

        <p>
          Gas Level: 1850
        </p>

        <p>
          Battery: 87%
        </p>

        <p>
          Zone: Tunnel A
        </p>

      </div>

    </div>

    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-bold">
            Robot 2
          </h3>

          <p className="text-green-600 font-semibold">
            ONLINE
          </p>

        </div>

        <FaRobot size={45} />

      </div>

      <div className="mt-5 space-y-2">

        <p>
          Gas Level: 1620
        </p>

        <p>
          Battery: 74%
        </p>

        <p>
          Zone: Tunnel B
        </p>

      </div>

    </div>

    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-2xl font-bold">
            Robot 3
          </h3>

          <p className="text-red-600 font-semibold">
            OFFLINE
          </p>

        </div>

        <FaRobot size={45} />

      </div>

      <div className="mt-5 space-y-2">

        <p>
          Gas Level: --
        </p>

        <p>
          Battery: 0%
        </p>

        <p>
          Zone: Unknown
        </p>

      </div>

    </div>

  </div>

</div>
        {/* GRAPH */}

        <div className="bg-white p-6 rounded-2xl shadow-lg h-[500px]">

          <h2 className="text-2xl font-bold mb-5">
            Live Gas Monitoring
          </h2>

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="gas"
                stroke="#ff0000"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}