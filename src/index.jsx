import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Sidebar from "./components/Sidebar";
import BasicModal from "./components/BasicModal";
import DescriptionModal from "./components/DescriptionModal";
import FormModal from "./components/FormModal";
import StyledModal from "./components/StyledModal";
import UserInputModal from "./components/UserInputModal";

function App() {
  const scenarios = [
    { id: "basic", title: "Basic Modal", component: BasicModal },
    { id: "description", title: "Modal with Description", component: DescriptionModal },
    { id: "form", title: "Modal with Form", component: FormModal },
    { id: "styled", title: "Animated Modal", component: StyledModal },
    { id: "userinput", title: "getUserInput() Pattern", component: UserInputModal },
  ];

  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const ActiveComponent =
    scenarios.find((s) => s.id === activeScenario)?.component || BasicModal;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-layout">
      <button 
        className="hamburger-button" 
        onClick={toggleSidebar}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Sidebar
        scenarios={scenarios}
        activeScenario={activeScenario}
        onScenarioChange={setActiveScenario}
        isOpen={sidebarOpen}
      />
      <main className="main-content">
        <ActiveComponent />
        <footer className="footer">
          Commit Hash: {window.process ? process.env.COMMIT_HASH : "unknown"} <br />
          Build Date: {window.process ? process.env.BUILD_DATE : "unknown"}
        </footer>
      </main>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
