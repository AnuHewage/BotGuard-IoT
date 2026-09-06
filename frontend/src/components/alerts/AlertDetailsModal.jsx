import { X, Network, BrainCircuit, Activity } from "lucide-react";

const AlertDetailsModal = ({ alert, closeModal }) => {
  if (!alert) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/60
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          w-full
          max-w-xl
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          p-6
        "
      >
        {/* Header */}

        <div
          className="
            flex
            justify-between
            items-center
            mb-5
          "
        >
          <h2 className="text-xl text-white font-semibold">Alert Details</h2>

          <button onClick={closeModal}>
            <X className="text-slate-400" />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-white text-lg">{alert.type}</p>

          <div className="grid grid-cols-2 gap-4">
            <Info icon={<Network />} title="Protocol" value={alert.protocol} />

            <Info icon={<BrainCircuit />} title="Model" value={alert.model} />

            <Info
              icon={<Activity />}
              title="Confidence"
              value={alert.confidence}
            />

            <Info title="Source IP" value={alert.source} />

            <Info
              title="Packet Rate"
              value={alert.packetRate || "450 packets/sec"}
            />

            <Info title="Flow Duration" value={alert.duration || "120 sec"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon, title, value }) => (
  <div
    className="
      bg-slate-800/50
      rounded-lg
      p-3
    "
  >
    <div className="flex gap-2 items-center">
      {icon}

      <span className="text-xs text-slate-400">{title}</span>
    </div>

    <p className="text-white mt-2">{value}</p>
  </div>
);

export default AlertDetailsModal;
