import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  Cpu,
  LogOut,
  LayoutDashboard,
  Activity,
  ShieldAlert,
  BrainCircuit,
  Upload,
  Settings,
  BellRing,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard Overview",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Traffic Analysis",
    path: "/traffic-analysis",
    icon: Activity,
  },
  {
    name: "Detection Results",
    path: "/detection-results",
    icon: ShieldAlert,
  },
  {
    name: "Model Performance",
    path: "/model-performance",
    icon: BrainCircuit,
  },
  {
    name: "Upload Dataset",
    path: "/upload-dataset",
    icon: Upload,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    name: "Alert & Notification",
    path: "/alerts",
    icon: BellRing,
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
            BotGuard IoT
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
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
      block
      px-4
      py-3
      rounded-lg
      transition
      ${
        isActive
          ? "bg-cyan-500/20 text-cyan-400"
          : "text-slate-400 hover:text-white hover:bg-slate-800"
      }
      `
            }
          >
            <div className="flex items-center gap-3">
              {item.icon && <item.icon size={20} />}

              <span>{item.name}</span>
            </div>
          </NavLink>
        ))}
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
