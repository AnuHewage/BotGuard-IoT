import { Activity, ShieldAlert, SearchCheck, CheckCircle } from "lucide-react";

const iconMap = {
  total: Activity,
  critical: ShieldAlert,
  investigating: SearchCheck,
  resolved: CheckCircle,
};

const AlertSummaryCard = ({ title, value, type }) => {
  const Icon = iconMap[type];

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
            {title}
          </p>

          <h2
            className="
              text-3xl
              font-bold
              text-white
              mt-2
            "
          >
            {value}
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
    </div>
  );
};

export default AlertSummaryCard;
