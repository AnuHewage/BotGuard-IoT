import {
  ShieldAlert,
  BrainCircuit,
  Database,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

import { dashboardStats, mlModels, recentThreats } from "../data/mockData";
import ChartCard from "../components/ChartCard";
import { trafficData } from "../data/mockData";

const iconMap = {
  Database,
  ShieldAlert,
  CheckCircle,
  BrainCircuit,
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>

        <p className="text-slate-400 mt-1">
          An intelligent IoT security analytics platform that utilizes machine
          learning models and network traffic features to identify and classify
          botnet attacks in IoT environments.
        </p>
      </div>

      {/* Statistics Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
      "
      >
        {dashboardStats.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <div
              key={item.title}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              p-5
              hover:border-cyan-500/40
              transition
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
                  <Icon size={28} className="text-cyan-400" />
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

      {/* Analysis Section */}

      <div
        className="
  grid
  grid-cols-1
  xl:grid-cols-3
  gap-6
"
      >
        {/* Traffic Analysis */}

        <div
          className="
    xl:col-span-2
    "
        >
          <ChartCard title="IoT Network Traffic Analysis" data={trafficData} />
        </div>

        {/* ML Models */}

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
            ML Model Performance
          </h2>

          <div className="space-y-4">
            {mlModels.map((model) => (
              <div
                key={model.name}
                className="
          bg-slate-800/50
          rounded-lg
          p-3
          "
              >
                <div
                  className="
            flex
            justify-between
            text-sm
            "
                >
                  <span className="text-white">{model.name}</span>

                  <span className="text-green-400">{model.status}</span>
                </div>

                <p
                  className="
            text-cyan-400
            text-sm
            mt-2
            "
                >
                  Accuracy : {model.accuracy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threat Detection */}

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
            Recent Threat Detection
          </h2>
        </div>

        <div className="space-y-3">
          {recentThreats.map((item) => (
            <div
              key={item.source}
              className="
                flex
                justify-between
                items-center
                bg-slate-800/50
                rounded-lg
                p-4
                "
            >
              <div>
                <p className="text-white">{item.attack}</p>

                <p className="text-sm text-slate-400">Source : {item.source}</p>
              </div>

              <span className="text-red-400 text-sm">{item.confidence}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
