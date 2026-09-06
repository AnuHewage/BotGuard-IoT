import { Bell, UserCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { alertData } from "../data/mockData";
import NotificationPanel from "./alerts/NotificationPanel";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="
      h-16 
      bg-slate-900/80 
      border-b 
      border-slate-800
      flex 
      items-center 
      justify-between
      px-6
      backdrop-blur
    "
    >
      {/* Left */}

      <div>
        <h1 className="text-lg font-semibold text-white">
          IoT Botnet Detection System
        </h1>

        <p className="text-xs text-slate-400">
          Research & ML Analysis Platform
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        {/* Model Status */}

        <div
          className="
          flex 
          items-center 
          gap-2
          bg-green-500/10
          text-green-400
          px-3
          py-1.5
          rounded-full
          text-sm
        "
        >
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Model Active
        </div>

        {/* Notification */}

        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="
              relative
              text-slate-300
              hover:text-white
            "
          >
            <Bell size={22} />

            <span
              className="
              absolute
              -top-1
              -right-1
              bg-red-500
              text-white
              text-[10px]
              w-4
              h-4
              rounded-full
              flex
              items-center
              justify-center
            "
            >
              {alertData.summary.active}
            </span>
          </button>

          {showNotifications && (
            <NotificationPanel closePanel={() => setShowNotifications(false)} />
          )}
        </div>

        {/* User */}

        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <UserCircle size={38} className="text-slate-300" />

          <div>
            <p className="text-sm font-medium text-white">Admin Researcher</p>

            <p className="text-xs text-slate-400">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
