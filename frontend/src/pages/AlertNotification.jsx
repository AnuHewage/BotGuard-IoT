import { useState } from "react";

import { alertData } from "../data/mockData";

import AlertTable from "../components/alerts/AlertTable";
import AlertSummaryCard from "../components/alerts/AlertSummaryCard";
import AlertFilters from "../components/alerts/AlertFilters";
import AlertDetailsModal from "../components/alerts/AlertDetailsModal";

const AlertNotification = () => {
  const [search, setSearch] = useState("");

  const [severityFilter, setSeverityFilter] = useState("All");

  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = alertData.alerts;

  // Summary Data

  const summary = [
    {
      title: "Total Alerts",
      value: alerts.length,
      type: "total",
    },

    {
      title: "Critical Threats",
      value: alerts.filter((item) => item.severity === "Critical").length,
      type: "critical",
    },

    {
      title: "Investigating",
      value: alerts.filter((item) => item.status === "Investigating").length,
      type: "investigating",
    },

    {
      title: "Resolved",
      value: alerts.filter((item) => item.status === "Resolved").length,
      type: "resolved",
    },
  ];

  // Filtering

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch =
      alert.type.toLowerCase().includes(search.toLowerCase()) ||
      alert.source.toLowerCase().includes(search.toLowerCase()) ||
      alert.model.toLowerCase().includes(search.toLowerCase());

    const matchesSeverity =
      severityFilter === "All" || alert.severity === severityFilter;

    const matchesStatus =
      statusFilter === "All" || alert.status === statusFilter;

    return matchesSearch && matchesSeverity && matchesStatus;
  });

  const clearFilters = () => {
    setSearch("");

    setSeverityFilter("All");

    setStatusFilter("All");
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1
          className="
          text-3xl
          font-bold
          text-white
          "
        >
          Alert & Notification System
        </h1>

        <p
          className="
          text-slate-400
          mt-1
          "
        >
          Monitor detected IoT botnet threats and security events.
        </p>
      </div>

      {/* Summary Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
        "
      >
        {summary.map((item) => (
          <AlertSummaryCard
            key={item.title}
            title={item.title}
            value={item.value}
            type={item.type}
          />
        ))}
      </div>

      {/* Filters */}

      <AlertFilters
        search={search}
        setSearch={setSearch}
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        clearFilters={clearFilters}
      />

      {/* Table */}

      <div>
        <h2
          className="
          text-xl
          font-semibold
          text-white
          mb-4
          "
        >
          Security Alerts
        </h2>

        <AlertTable alerts={filteredAlerts} onSelectAlert={setSelectedAlert} />
      </div>

      {/* Details Modal */}

      <AlertDetailsModal
        alert={selectedAlert}
        closeModal={() => setSelectedAlert(null)}
      />
    </div>
  );
};

export default AlertNotification;
