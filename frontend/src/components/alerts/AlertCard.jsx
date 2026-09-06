import { AlertTriangle, Network, BrainCircuit, Clock } from "lucide-react";

import AlertBadge from "./AlertBadge";

const AlertCard = ({ alert }) => {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-5
        hover:border-cyan-500/30
        transition
      "
    >
      {/* Header */}

      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div
            className="
              p-3
              rounded-lg
              bg-red-500/10
            "
          >
            <AlertTriangle size={24} className="text-red-400" />
          </div>

          <div>
            <h3 className="text-white font-semibold">{alert.type}</h3>

            <p className="text-sm text-slate-400 mt-1">
              Source: {alert.source}
            </p>
          </div>
        </div>

        <AlertBadge value={alert.severity} />
      </div>

      {/* Details */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
          mt-5
        "
      >
        <div className="flex items-center gap-2">
          <BrainCircuit size={18} className="text-cyan-400" />

          <div>
            <p className="text-xs text-slate-500">Detection Model</p>

            <p className="text-sm text-white">{alert.model}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Network size={18} className="text-cyan-400" />

          <div>
            <p className="text-xs text-slate-500">Protocol</p>

            <p className="text-sm text-white">{alert.protocol}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-500">Confidence Score</p>

          <p className="text-sm text-cyan-400">{alert.confidence}</p>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} className="text-slate-400" />

          <div>
            <p className="text-xs text-slate-500">Detected</p>

            <p className="text-sm text-white">{alert.time}</p>
          </div>
        </div>
      </div>

      {/* Status */}

      <div
        className="
          mt-5
          pt-4
          border-t
          border-slate-800
          flex
          justify-between
          items-center
        "
      >
        <span className="text-xs text-slate-400">Alert Status</span>

        <AlertBadge type="status" value={alert.status || "New"} />
      </div>
    </div>
  );
};

export default AlertCard;
