import { Search, Filter } from "lucide-react";

const AlertFilters = ({
  search,
  setSearch,
  severityFilter,
  setSeverityFilter,
  statusFilter,
  setStatusFilter,
  clearFilters,
}) => {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-5
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          mb-4
        "
      >
        <Filter size={20} className="text-cyan-400" />

        <h2 className="text-white font-semibold">Alert Filters</h2>
      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-4
        "
      >
        {/* Search */}

        <div
          className="
            flex
            items-center
            gap-2
            bg-slate-800
            rounded-lg
            px-3
          "
        >
          <Search size={18} className="text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search alerts..."
            className="
              bg-transparent
              outline-none
              text-white
              py-2
              w-full
            "
          />
        </div>

        {/* Severity */}

        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          className="
            bg-slate-800
            text-white
            rounded-lg
            px-3
            py-2
          "
        >
          <option value="All">All Severities</option>

          <option value="Critical">Critical</option>

          <option value="High">High</option>

          <option value="Medium">Medium</option>

          <option value="Low">Low</option>
        </select>

        {/* Status */}

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="
            bg-slate-800
            text-white
            rounded-lg
            px-3
            py-2
          "
        >
          <option value="All">All Statuses</option>

          <option value="New">New</option>

          <option value="Investigating">Investigating</option>

          <option value="Blocked">Blocked</option>

          <option value="Resolved">Resolved</option>
        </select>

        {/* Clear Button */}

        <button
          onClick={clearFilters}
          className="
            bg-slate-800
            text-cyan-400
            rounded-lg
            hover:bg-slate-700
          "
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default AlertFilters;
