import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import TrafficAnalysis from "./pages/TrafficAnalysis";
import DetectionResults from "./pages/DetectionResults";
import ModelPerformance from "./pages/ModelPerformance";
import UploadDataset from "./pages/UploadDataset";
import Settings from "./pages/Settings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/traffic-analysis" element={<TrafficAnalysis />} />

        <Route path="/detection-results" element={<DetectionResults />} />

        <Route path="/model-performance" element={<ModelPerformance />} />

        <Route path="/upload-dataset" element={<UploadDataset />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
