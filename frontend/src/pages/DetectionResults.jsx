import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  Target,
  AlertTriangle,
} from "lucide-react";

import { detectionResults } from "../data/mockData";

const DetectionResults = () => {
  const stats = [
    {
      title: "Total Predictions",
      value: "12,450",
      icon: Activity,
      description: "Traffic samples analyzed",
    },
    {
      title: "Botnet Detected",
      value: "324",
      icon: ShieldAlert,
      description: "Malicious traffic identified",
    },
    {
      title: "Normal Traffic",
      value: "12,126",
      icon: ShieldCheck,
      description: "Safe network activity",
    },
    {
      title: "Detection Accuracy",
      value: "98.7%",
      icon: Target,
      description: "Best model accuracy",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-white">Detection Results</h1>

        <p className="text-slate-400 mt-2">
          Machine learning based IoT botnet attack detection results and
          classification analysis.
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
        {stats.map((item) => {
          const Icon = item.icon;

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
                  <p className="text-sm text-slate-400">{item.title}</p>

                  <h2
                    className="
                  text-3xl
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
                  <Icon className="text-cyan-400" />
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

      {/* Detection Table */}

      <div
        className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-6
        "
      >
        <div
          className="
        flex
        items-center
        gap-2
        mb-5
        "
        >
          <AlertTriangle className="text-red-400" />

          <h2
            className="
          text-lg
          font-semibold
          text-white
          "
          >
            Recent Detection Results
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table
            className="
          w-full
          text-sm
          "
          >
            <thead>
              <tr
                className="
              border-b
              border-slate-800
              text-slate-400
              "
              >
                <th className="text-left p-3">Time</th>

                <th className="text-left p-3">Source IP</th>

                <th className="text-left p-3">Destination IP</th>

                <th className="text-left p-3">Protocol</th>

                <th className="text-left p-3">Prediction</th>

                <th className="text-left p-3">Confidence</th>
              </tr>
            </thead>

            <tbody>
              {detectionResults.map((item) => (
                <tr
                  key={item.timestamp}
                  className="
                  border-b
                  border-slate-800
                  text-slate-300
                  "
                >
                  <td className="p-3">{item.timestamp}</td>

                  <td className="p-3">{item.source}</td>

                  <td className="p-3">{item.destination}</td>

                  <td className="p-3">{item.protocol}</td>

                  <td className="p-3">
                    <span
                      className={
                        item.prediction === "Botnet"
                          ? "text-red-400"
                          : "text-green-400"
                      }
                    >
                      {item.prediction}
                    </span>
                  </td>

                  <td className="p-3 text-cyan-400">{item.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetectionResults;
