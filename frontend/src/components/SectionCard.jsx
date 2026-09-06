const SectionCard = ({ title, children }) => {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-6
      "
    >
      {title && (
        <h2
          className="
            text-lg
            font-semibold
            text-white
            mb-5
          "
        >
          {title}
        </h2>
      )}

      {children}
    </div>
  );
};

export default SectionCard;
