import { Bell, AlertTriangle } from "lucide-react";
import { alertData } from "../../data/mockData";
import { useNavigate } from "react-router-dom";


const NotificationPanel = ({ closePanel }) => {
  const navigate = useNavigate();
  const recentAlerts = alertData.alerts.slice(0, 3);

  return (
    <div
      className="
        absolute
        right-0
        mt-3
        w-80
        bg-slate-900
        border
        border-slate-700
        rounded-xl
        shadow-xl
        overflow-hidden
        z-50
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-2
          px-4
          py-3
          border-b
          border-slate-700
        "
      >
        <Bell className="text-cyan-400" size={18} />

        <h3 className="text-white font-semibold">Notifications</h3>
      </div>

      {/* Alerts */}

      <div className="max-h-80 overflow-y-auto">
        {recentAlerts.map((alert) => (
          <div
            key={alert.id}
            className="
              px-4
              py-3
              hover:bg-slate-800
              border-b
              border-slate-800
            "
          >
            <div className="flex gap-3">
              <AlertTriangle size={20} className="text-red-400 mt-1" />

              <div>
                <p className="text-sm text-white">{alert.type}</p>

                <p className="text-xs text-slate-400">{alert.source}</p>

                <p className="text-xs text-cyan-400">
                  Confidence: {alert.confidence}
                </p>

                <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <button
        onClick={() => {
          navigate("/alerts");
          closePanel();
        }}
        className="
    w-full
    py-3
    text-sm
    text-cyan-400
    hover:bg-slate-800
  "
      >
        View All Alerts
      </button>
    </div>
  );
};

export default NotificationPanel;
