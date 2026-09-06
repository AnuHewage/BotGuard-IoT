import { Network, Activity, Clock, Layers } from "lucide-react";

import {
  trafficSummary,
  protocolData,
  featureData,
  trafficRecords,
} from "../data/mockData";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const iconMap = {
  "Average Packet Size": Network,
  "Packet Rate": Activity,
  "Flow Duration": Clock,
  "Packets Per Flow": Layers,
};

const TrafficAnalysis = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}

      <div>
        <h1
          className="
          text-3xl
          font-bold
          text-white
        "
        >
          Traffic Analysis
        </h1>

        <p
          className="
          text-slate-400
          mt-1
        "
        >
          Detailed analysis of IoT network traffic features used for botnet
          detection.
        </p>
      </div>

      {/* Summary Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
        "
      >
        {trafficSummary.map((item) => {
          const Icon = iconMap[item.title];

          return (
            <div
              key={item.title}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-5
              "
            >
              <div
                className="
                flex
                justify-between
                items-center
              "
              >
                <div>
                  <p
                    className="
                    text-sm
                    text-slate-400
                  "
                  >
                    {item.title}
                  </p>

                  <h2
                    className="
                    text-2xl
                    font-bold
                    text-white
                    mt-2
                  "
                  >
                    {item.value}
                  </h2>
                </div>

                <div
                  className="
                  p-3
                  rounded-lg
                  bg-cyan-500/10
                "
                >
                  <Icon size={26} className="text-cyan-400" />
                </div>
              </div>

              <p
                className="
                text-xs
                text-slate-500
                mt-4
              "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Protocol Chart */}

      <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-6
        "
      >
        <h2
          className="
          text-lg
          font-semibold
          text-white
          mb-5
        "
        >
          Protocol Distribution
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={protocolData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="protocol" stroke="#94a3b8" />

              <YAxis stroke="#94a3b8" />

              <Tooltip />

              <Bar dataKey="value" fill="#22d3ee" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Feature Analysis */}

      <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-6
        "
      >
        <h2
          className="
          text-lg
          font-semibold
          text-white
          mb-5
        "
        >
          Network Feature Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featureData.map((item) => (
            <div
              key={item.feature}
              className="
              bg-slate-800/50
              rounded-lg
              p-4
              "
            >
              <p className="text-slate-400 text-sm">{item.feature}</p>

              <p
                className="
                text-white
                font-semibold
                mt-1
              "
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic Records */}

      <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-6
        "
      >
        <h2
          className="
          text-lg
          font-semibold
          text-white
          mb-5
        "
        >
          Traffic Records
        </h2>

        <div className="overflow-x-auto">
          <table
            className="
            w-full
            text-sm
            text-left
          "
          >
            <thead
              className="
              text-slate-400
              border-b
              border-slate-700
            "
            >
              <tr>
                <th className="p-3">Protocol</th>
                <th className="p-3">Source Port</th>
                <th className="p-3">Destination Port</th>
                <th className="p-3">Packets</th>
                <th className="p-3">Prediction</th>
              </tr>
            </thead>

            <tbody>
              {trafficRecords.map((item, index) => (
                <tr
                  key={index}
                  className="
                  border-b
                  border-slate-800
                  "
                >
                  <td className="p-3 text-white">{item.protocol}</td>

                  <td className="p-3 text-slate-300">{item.sourcePort}</td>

                  <td className="p-3 text-slate-300">{item.destinationPort}</td>

                  <td className="p-3 text-slate-300">{item.packets}</td>

                  <td
                    className={
                      item.prediction === "Botnet"
                        ? "p-3 text-red-400"
                        : "p-3 text-green-400"
                    }
                  >
                    {item.prediction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrafficAnalysis;
