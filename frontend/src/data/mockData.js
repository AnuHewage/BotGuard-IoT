export const dashboardStats = [
  {
    title: "Total Traffic Samples",
    value: "50,240",
    icon: "Database",
    description: "IoT traffic samples analyzed",
  },
  {
    title: "Detected Threats",
    value: "324",
    icon: "ShieldAlert",
    description: "Threats identified by ML models",
  },
  {
    title: "Best Model Accuracy",
    value: "98.7%",
    icon: "CheckCircle",
    description: "Best performing model accuracy",
  },
  {
    title: "Trained ML Models",
    value: "4",
    icon: "BrainCircuit",
    description: "Models trained for detection",
  },
];


export const mlModels = [
  {
    name: "Random Forest",
    accuracy: "98.7%",
    status: "Active",
  },
  {
    name: "Decision Tree",
    accuracy: "96.4%",
    status: "Active",
  },
  {
    name: "Logistic Regression",
    accuracy: "93.2%",
    status: "Active",
  },
  {
    name: "Naive Bayes",
    accuracy: "91.8%",
    status: "Active",
  },
];


export const recentThreats = [
  {
    attack: "Mirai Botnet",
    source: "192.168.1.45",
    confidence: "97%",
  },
  {
    attack: "UDP Flood Attack",
    source: "10.0.0.23",
    confidence: "94%",
  },
];

export const trafficData = [
  {
    time: "00:00",
    normal: 400,
    botnet: 40,
  },
  {
    time: "04:00",
    normal: 600,
    botnet: 80,
  },
  {
    time: "08:00",
    normal: 900,
    botnet: 150,
  },
  {
    time: "12:00",
    normal: 1200,
    botnet: 320,
  },
  {
    time: "16:00",
    normal: 1000,
    botnet: 200,
  },
  {
    time: "20:00",
    normal: 700,
    botnet: 100,
  },
];

export const trafficSummary = [
  {
    title: "Average Packet Size",
    value: "512 Bytes",
    description: "Average size of packets in IoT traffic",
  },
  {
    title: "Packet Rate",
    value: "245 Packets/s",
    description: "Network packets processed per second",
  },
  {
    title: "Flow Duration",
    value: "3.8 Seconds",
    description: "Average duration of network flows",
  },
  {
    title: "Packets Per Flow",
    value: "86",
    description: "Average packets transmitted per flow",
  },
];


export const protocolData = [
  {
    protocol: "TCP",
    value: 65,
  },
  {
    protocol: "UDP",
    value: 30,
  },
  {
    protocol: "HTTP",
    value: 5,
  },
];


export const featureData = [
  {
    feature: "Average Packet Size",
    value: "512 Bytes",
  },
  {
    feature: "Packet Rate",
    value: "245 packets/s",
  },
  {
    feature: "Flow Duration",
    value: "3.8 sec",
  },
  {
    feature: "Source Port",
    value: "54321",
  },
  {
    feature: "Destination Port",
    value: "80",
  },
  {
    feature: "Protocol Type",
    value: "TCP",
  },
  {
    feature: "Packets Per Flow",
    value: "86",
  },
];


export const trafficRecords = [
  {
    protocol: "TCP",
    sourcePort: "54321",
    destinationPort: "80",
    packets: 120,
    prediction: "Normal",
  },
  {
    protocol: "UDP",
    sourcePort: "41232",
    destinationPort: "53",
    packets: 250,
    prediction: "Botnet",
  },
];
export const detectionResults = [
  {
    timestamp: "10:32:15",
    source: "192.168.1.25",
    destination: "45.33.21.10",
    protocol: "TCP",
    prediction: "Botnet",
    confidence: "98.5%",
  },
  {
    timestamp: "10:35:42",
    source: "192.168.1.18",
    destination: "8.8.8.8",
    protocol: "UDP",
    prediction: "Normal",
    confidence: "96.2%",
  },
  {
    timestamp: "10:41:08",
    source: "192.168.1.45",
    destination: "104.21.55.12",
    protocol: "TCP",
    prediction: "Botnet",
    confidence: "97.8%",
  },
];

export const modelPerformance = [
  {
    name:"Decision Tree",
    accuracy:"95.4%",
    precision:"94.8%",
    recall:"95.1%",
    f1:"94.9%"
  },
  {
    name:"Random Forest",
    accuracy:"98.7%",
    precision:"98.5%",
    recall:"98.8%",
    f1:"98.6%"
  },
  {
    name:"Logistic Regression",
    accuracy:"94.8%",
    precision:"94.2%",
    recall:"94.6%",
    f1:"94.4%"
  },
  {
    name:"Naive Bayes",
    accuracy:"93.6%",
    precision:"93.1%",
    recall:"93.8%",
    f1:"93.4%"
  }
];