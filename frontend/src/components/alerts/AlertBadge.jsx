const AlertBadge = ({ type = "severity", value }) => {
  const severityStyles = {
    Critical: {
      bg: "bg-red-500/10",
      text: "text-red-400",
      border: "border-red-500/30",
    },

    High: {
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      border: "border-orange-500/30",
    },

    Medium: {
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
      border: "border-yellow-500/30",
    },

    Low: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "border-green-500/30",
    },
  };

  const statusStyles = {
    New: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
    },

    Investigating: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/30",
    },

    Resolved: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "border-green-500/30",
    },

    Archived: {
      bg: "bg-slate-500/10",
      text: "text-slate-400",
      border: "border-slate-500/30",
    },
  };

  const styles =
    type === "status" ? statusStyles[value] : severityStyles[value];

  if (!styles) {
    return null;
  }

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        border
        ${styles.bg}
        ${styles.text}
        ${styles.border}
      `}
    >
      {value}
    </span>
  );
};

export default AlertBadge;
