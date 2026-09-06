import { BrainCircuit, CheckCircle, Target, TrendingUp } from "lucide-react";

import { modelPerformance } from "../data/mockData";

const ModelPerformance = () => {
  const summaryCards = [
    {
      title: "Active ML Models",
      value: "4",
      description: "Trained detection models",
      icon: BrainCircuit,
    },
    {
      title: "Best Performing Model",
      value: "Random Forest",
      description: "Highest detection accuracy",
      icon: TrendingUp,
    },
    {
      title: "Average Accuracy",
      value: "95.6%",
      description: "Overall model performance",
      icon: Target,
    },
    {
      title: "Training Status",
      value: "Completed",
      description: "Models ready for prediction",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-white">Model Performance</h1>

        <p className="text-slate-400 mt-2">
          Performance evaluation and comparison of machine learning models used
          for IoT botnet detection.
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
        {summaryCards.map((item) => {
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
                  <Icon className="text-cyan-400" size={26} />
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

      {/* Model Comparison */}

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
          ML Model Performance Comparison
        </h2>

        <div className="space-y-5">
          {modelPerformance.map((model) => (
            <div
              key={model.name}
              className="
              bg-slate-800/50
              rounded-lg
              p-4
              "
            >
              <div
                className="
                flex
                justify-between
                items-center
                mb-3
                "
              >
                <h3
                  className="
                  text-white
                  font-medium
                  "
                >
                  {model.name}
                </h3>

                <span
                  className="
                  text-cyan-400
                  font-semibold
                  "
                >
                  {model.accuracy}
                </span>
              </div>

              {/* Accuracy Bar */}

              <div
                className="
                w-full
                bg-slate-700
                rounded-full
                h-2
                "
              >
                <div
                  className="
                  bg-cyan-400
                  h-2
                  rounded-full
                  "
                  style={{
                    width: model.accuracy,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Table */}

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
          Evaluation Metrics
        </h2>

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
                <th className="text-left p-3">Model</th>

                <th className="text-left p-3">Accuracy</th>

                <th className="text-left p-3">Precision</th>

                <th className="text-left p-3">Recall</th>

                <th className="text-left p-3">F1 Score</th>
              </tr>
            </thead>

            <tbody>
              {modelPerformance.map((model) => (
                <tr
                  key={model.name}
                  className="
                  border-b
                  border-slate-800
                  text-slate-300
                  "
                >
                  <td className="p-3 text-white">{model.name}</td>

                  <td className="p-3 text-cyan-400">{model.accuracy}</td>

                  <td className="p-3">{model.precision}</td>

                  <td className="p-3">{model.recall}</td>

                  <td className="p-3">{model.f1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModelPerformance;
