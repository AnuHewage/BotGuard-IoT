import { Upload, FileText, Database, CheckCircle } from "lucide-react";

import PageHeader from "../components/PageHeader";
import SectionCard from "../components/SectionCard";

import { datasetInfo, datasetFeatures } from "../data/mockData";

const UploadDataset = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Upload Dataset"
        description="Upload and validate IoT network traffic datasets for machine learning based botnet detection."
      />

      {/* Upload Section */}

      <SectionCard title="Dataset Upload">
        <div
          className="
          border-2
          border-dashed
          border-slate-700
          rounded-xl
          p-10
          text-center
          hover:border-cyan-500
          transition
          "
        >
          <Upload
            size={48}
            className="
            mx-auto
            text-cyan-400
            mb-4
            "
          />

          <h3
            className="
            text-xl
            font-semibold
            text-white
            "
          >
            Drag & Drop Dataset
          </h3>

          <p
            className="
            text-slate-400
            mt-2
            "
          >
            Upload your IoT network traffic dataset
          </p>

          <button
            className="
            mt-6
            px-6
            py-3
            rounded-lg
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            font-medium
            transition
            "
          >
            Browse CSV File
          </button>

          <div
            className="
            mt-6
            text-sm
            text-slate-500
            "
          >
            Supported Format : CSV <br />
            Maximum File Size : 20 MB
          </div>
        </div>
      </SectionCard>

      {/* Dataset Information */}

      <SectionCard title="Dataset Information">
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          "
        >
          <InfoCard
            icon={<FileText size={20} />}
            label="Dataset Name"
            value={datasetInfo.name}
          />

          <InfoCard
            icon={<Database size={20} />}
            label="Records"
            value={datasetInfo.records}
          />

          <InfoCard
            icon={<Database size={20} />}
            label="Features"
            value={datasetInfo.features}
          />

          <InfoCard
            icon={<Database size={20} />}
            label="File Size"
            value={datasetInfo.size}
          />

          <InfoCard
            icon={<CheckCircle size={20} />}
            label="Status"
            value={datasetInfo.status}
          />
        </div>
      </SectionCard>

      {/* Feature Preview */}

      <SectionCard title="Dataset Feature Preview">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr
                className="
                border-b
                border-slate-800
                text-slate-400
                "
              >
                <th className="text-left p-3">No</th>

                <th className="text-left p-3">Feature Name</th>
              </tr>
            </thead>

            <tbody>
              {datasetFeatures.map((feature, index) => (
                <tr
                  key={feature}
                  className="
                  border-b
                  border-slate-800
                  "
                >
                  <td className="p-3 text-cyan-400">{index + 1}</td>

                  <td className="p-3 text-white">{feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Validation */}

      <SectionCard title="Dataset Validation">
        <div className="space-y-4">
          <ValidationItem text="Missing Values Check" />

          <ValidationItem text="Duplicate Records Check" />

          <ValidationItem text="Invalid Data Type Check" />

          <ValidationItem text="Feature Consistency Check" />
        </div>
      </SectionCard>
    </div>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div
    className="
    bg-slate-800/50
    rounded-lg
    p-4
    flex
    items-center
    gap-4
    "
  >
    <div className="text-cyan-400">{icon}</div>

    <div>
      <p
        className="
        text-sm
        text-slate-400
        "
      >
        {label}
      </p>

      <p
        className="
        text-white
        font-semibold
        "
      >
        {value}
      </p>
    </div>
  </div>
);

const ValidationItem = ({ text }) => (
  <div
    className="
    flex
    items-center
    gap-3
    bg-slate-800/40
    rounded-lg
    p-4
    "
  >
    <CheckCircle className="text-green-400" />

    <span className="text-white">{text}</span>
  </div>
);

export default UploadDataset;
