import {
  LayoutDashboard,
  Activity,
  ShieldCheck,
  Cpu,
  Upload,
  Settings,
  Database,
  BrainCircuit,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Traffic Analysis",
    icon: Activity,
  },
  {
    name: "Detection Results",
    icon: ShieldCheck,
  },
  {
    name: "ML Model Performance",
    icon: BrainCircuit,
  },
  {
    name: "Dataset Management",
    icon: Database,
  },
  {
    name: "Upload Dataset",
    icon: Upload,
  },
];

const Sidebar = () => {
  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-slate-900
        border-r
        border-slate-800
        flex
        flex-col
        p-5
      "
    >
      {/* Logo Section */}
      <div
        className="
          flex
          items-center
          gap-3
          mb-8
        "
      >
        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-cyan-500/10
            border
            border-cyan-500/30
            flex
            items-center
            justify-center
          "
        >
          <ShieldCheck size={28} className="text-cyan-400" />
        </div>

        <div>
          <h1
            className="
              text-xl
              font-bold
              text-white
            "
          >
            BotGuard AI
          </h1>

          <p
            className="
              text-xs
              text-slate-400
            "
          >
            IoT Security Research
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className="
          flex-1
          space-y-2
        "
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  transition

                  ${
                    index === 0
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }
                `}
            >
              <Icon size={20} />

              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Info */}
      <div
        className="
          mt-auto
          bg-slate-800/50
          rounded-xl
          p-4
          border
          border-slate-700
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            mb-2
          "
        >
          <Cpu size={18} className="text-green-400" />

          <span
            className="
              text-sm
              text-green-400
              font-medium
            "
          >
            ML Engine Active
          </span>
        </div>

        <p
          className="
            text-xs
            text-slate-400
          "
        >
          Real-time IoT botnet threat monitoring enabled
        </p>
      </div>
      {/* Logout Button */}
      <button
        className="
    mt-4
    w-full
    flex
    items-center
    gap-3
    px-4
    py-3
    rounded-lg
    text-sm
    text-red-400
    hover:bg-red-500/10
    transition
  "
      >
        <LogOut size={20} />

        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
