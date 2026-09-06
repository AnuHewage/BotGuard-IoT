import AlertBadge from "./AlertBadge";

const AlertTable = ({ alerts, onSelectAlert }) => {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        overflow-hidden
      "
    >
      <div
        className="
          overflow-x-auto
        "
      >
        <table className="w-full text-sm">
          {/* Table Header */}

          <thead
            className="
              bg-slate-800/50
              text-slate-400
            "
          >
            <tr>
              <th className="px-5 py-4 text-left">Threat Type</th>

              <th className="px-5 py-4 text-left">Severity</th>

              <th className="px-5 py-4 text-left">Source IP</th>

              <th className="px-5 py-4 text-left">Protocol</th>

              <th className="px-5 py-4 text-left">ML Model</th>

              <th className="px-5 py-4 text-left">Confidence</th>

              <th className="px-5 py-4 text-left">Status</th>

              <th className="px-5 py-4 text-left">Time</th>
            </tr>
          </thead>

          {/* Table Body */}

          <tbody>
            {alerts.map((alert) => (
              <tr
                key={alert.id}
                onClick={() => onSelectAlert(alert)}
                className="
 cursor-pointer
 border-t
 border-slate-800
 hover:bg-slate-800/40
 transition
 "
              >
                <td
                  className="
                    px-5
                    py-4
                    text-white
                    font-medium
                  "
                >
                  {alert.type}
                </td>

                <td className="px-5 py-4">
                  <AlertBadge value={alert.severity} />
                </td>

                <td
                  className="
                    px-5
                    py-4
                    text-slate-300
                  "
                >
                  {alert.source}
                </td>

                <td
                  className="
                    px-5
                    py-4
                    text-slate-300
                  "
                >
                  {alert.protocol}
                </td>

                <td
                  className="
                    px-5
                    py-4
                    text-cyan-400
                  "
                >
                  {alert.model}
                </td>

                <td
                  className="
                    px-5
                    py-4
                    text-white
                  "
                >
                  {alert.confidence}
                </td>

                <td className="px-5 py-4">
                  <AlertBadge type="status" value={alert.status || "New"} />
                </td>

                <td
                  className="
                    px-5
                    py-4
                    text-slate-400
                  "
                >
                  {alert.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}

      {alerts.length === 0 && (
        <div
          className="
            p-8
            text-center
            text-slate-400
          "
        >
          No security alerts available.
        </div>
      )}
    </div>
  );
};

export default AlertTable;
