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